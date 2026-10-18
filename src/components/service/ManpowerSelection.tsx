"use client";

import { createContext, useContext, useId, useState, type ReactNode } from "react";
import type { ServiceContent } from "@/content/service-manpower";
import { contact } from "@/content/site";
import { prefillQuote } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

type Selection = {
  picked: string[];
  toggle: (role: string) => void;
  site: string;
  setSite: (site: string) => void;
  start: string;
  setStart: (start: string) => void;
};

const SelectionContext = createContext<Selection | null>(null);

function useSelection() {
  const selection = useContext(SelectionContext);
  if (!selection) throw new Error("Manpower selection provider is missing");
  return selection;
}

export function ManpowerSelectionProvider({ t, sites, children }: { t: ServiceContent; sites: string[]; children: ReactNode }) {
  const [picked, setPicked] = useState(t.directory.preselected);
  const [site, setSite] = useState(sites[0]);
  const [start, setStart] = useState("");
  const toggle = (role: string) => setPicked((current) => current.includes(role) ? current.filter((r) => r !== role) : [...current, role]);
  return <SelectionContext.Provider value={{ picked, toggle, site, setSite, start, setStart }}>{children}</SelectionContext.Provider>;
}

function pickedText(t: ServiceContent, count: number) {
  return (count === 1 ? t.request.one : t.request.many).replace("{n}", String(count));
}

function useContinue(t: ServiceContent) {
  const { picked, site, start } = useSelection();
  return () => prefillQuote({
    type: "manpower",
    scope: picked.length ? `${t.directory.scopePrefix} ${picked.join(", ")}` : "",
    site,
    start,
  }, true);
}

export function ManpowerRequestCard({ t, sites }: { t: ServiceContent; sites: string[] }) {
  const { picked, site, setSite, start, setStart } = useSelection();
  const continueRequest = useContinue(t);
  const id = useId();
  return <aside className="side"><div className="side__card">
    <div className="side__head"><strong>{t.request.title}</strong></div>
    <div className="side__body">
      <div className="side__picked"><span className="label">{t.request.selected}</span><b>{pickedText(t, picked.length)}</b><span className="side__names">{picked.length ? picked.join(" · ") : t.request.none}</span></div>
      <div className="fld"><label htmlFor={`${id}-site`}>{t.request.site}</label><select id={`${id}-site`} className="inp" value={site} onChange={(e) => setSite(e.target.value)}>{sites.map((name) => <option key={name}>{name}</option>)}</select></div>
      <div className="fld"><label htmlFor={`${id}-start`}>{t.request.start}</label><input id={`${id}-start`} className="inp" type="date" value={start} onChange={(e) => setStart(e.target.value)} /></div>
      <button className="btn" type="button" onClick={continueRequest}>{t.request.continue} <Icon name="arrow" /></button>
    </div>
    <div className="side__call"><span className="label">{t.request.call}</span><a className="data" href={`tel:${contact.phone.tel}`} dir="ltr">{contact.phone.display}</a></div>
  </div></aside>;
}

export function ManpowerDirectory({ t }: { t: ServiceContent }) {
  const { picked, toggle } = useSelection();
  const continueRequest = useContinue(t);
  const [discipline, setDiscipline] = useState(t.directory.all);
  const [query, setQuery] = useState("");
  const id = useId();
  const all = t.directory.disciplines.flatMap((group) => group.roles.map((name) => ({ name, discipline: group.label })));
  const search = query.trim().toLocaleLowerCase();
  const matches = all.filter((role) => (discipline === t.directory.all || role.discipline === discipline) && (!search || role.name.toLocaleLowerCase().includes(search)));
  const rows = discipline === t.directory.all && !search ? matches.slice(0, 12) : matches;

  return <section className="sec alt" id="roles"><div className="c">
    <div className="head rv"><div><span className="eyebrow">{t.directory.eyebrow}</span><h2 className="h2">{t.directory.title}</h2></div><p className="lead">{t.directory.lead}</p></div>
    <div className="dir">
      <div className="dir__bar">
        <label className="dir__search" htmlFor={`${id}-search`}><Icon name="search" /><span className="sr">{t.directory.searchLabel}</span><input id={`${id}-search`} type="search" placeholder={t.directory.searchPlaceholder} value={query} onChange={(e) => setQuery(e.target.value)} /></label>
        <div className="dir__tabs" role="group" aria-label={t.directory.eyebrow}>
          {[{ label: t.directory.all, count: all.length }, ...t.directory.disciplines.map((group) => ({ label: group.label, count: group.roles.length }))].map((group) => <button className="filter" type="button" aria-pressed={discipline === group.label} onClick={() => setDiscipline(group.label)} key={group.label}>{group.label} <span className="cnt" dir="ltr">{group.count}</span></button>)}
        </div>
      </div>
      <div className="dir__list">
        {rows.map((role) => { const selected = picked.includes(role.name); return <div className={selected ? "dir__row is-on" : "dir__row"} key={role.name}>
          <span className="dir__ic"><Icon name="hardhat" /></span><div className="dir__name"><b>{role.name}</b><span className="label">{role.discipline}</span></div>
          <button className={selected ? "btn btn--sm btn--ink" : "btn btn--sm btn--ghost"} type="button" aria-pressed={selected} onClick={() => toggle(role.name)}>{selected ? t.directory.added : t.directory.add}</button>
        </div>; })}
        {rows.length === 0 && <p className="dir__empty">{t.directory.emptyBefore}{query}{t.directory.emptyAfter}</p>}
      </div>
      <div className="dir__tray"><div><span className="label">{t.directory.yourRequest}</span><b>{pickedText(t, picked.length)}</b></div><button className="btn btn--hivis" type="button" onClick={continueRequest}>{t.directory.cta} <Icon name="arrow" /></button></div>
    </div>
  </div></section>;
}
