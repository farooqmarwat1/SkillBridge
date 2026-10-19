"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { EquipmentContent, FleetCategory } from "@/content/equipment";
import { contact } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { queueQuotePrefill } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";

const fill = (text: string, values: Record<string, string | number>) => text.replace(/\{(\w+)\}/g, (match, key: string) => key in values ? String(values[key]) : match);

/** Catalogue filters and the quantity-aware quote list share one small client island. */
export function FleetCatalogue({ lang, t, sites, tbc }: { lang: Locale; t: EquipmentContent; sites: string[]; tbc: string }) {
  const id = useId();
  const [category, setCategory] = useState<FleetCategory | null>(null);
  const [query, setQuery] = useState("");
  const [list, setList] = useState<Record<string, number>>({ "SB-E01": 2, "SB-L01": 1 });
  const [site, setSite] = useState(sites[0]);
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState(t.quote.durations[1]);
  const [supply, setSupply] = useState(1);
  const categoryLabel = Object.fromEntries(t.catalogue.categories.map((entry) => [entry.id, entry.label]));
  const search = query.trim().toLocaleLowerCase();
  const shown = t.items.filter((item) => (category === null || item.category === category) && (!search || item.name.toLocaleLowerCase().includes(search) || categoryLabel[item.category].toLocaleLowerCase().includes(search)));
  const selected = t.items.filter((item) => list[item.code] > 0);
  const total = selected.reduce((sum, item) => sum + list[item.code], 0);
  const units = fill(total === 1 ? t.quote.unitOne : t.quote.unitMany, { n: total });
  const shownCount = fill(shown.length === 1 ? t.catalogue.countOne : t.catalogue.countMany, { n: shown.length });

  function setQty(code: string, qty: number) {
    setList((current) => {
      const next = { ...current };
      if (qty <= 0) delete next[code];
      else next[code] = qty;
      return next;
    });
  }

  function continueRequest() {
    if (!selected.length) return;
    const names = selected.map((item) => `${list[item.code]} × ${item.name} (${item.code})`).join(", ");
    queueQuotePrefill({ type: "equipment", scope: `${t.quote.scopePrefix} ${names}\n${t.quote.supplyPrefix} ${t.quote.supplyOptions[supply]}`, site, start, duration });
    window.location.assign(`${href(lang, routes.home)}#quote`);
  }

  return <>
    <section className="sec alt" id="catalogue"><div className="c"><div className="fl-wrap">
      <div className="fl-main">
        <div className="fl-tools">
          <label className="dir__search" htmlFor={`${id}-search`}><Icon name="search" /><span className="sr">{t.catalogue.search}</span><input id={`${id}-search`} type="search" placeholder={t.catalogue.searchPlaceholder} value={query} onChange={(e) => setQuery(e.target.value)} /></label>
          <div className="filters fl-filters" role="group" aria-label={t.catalogue.categoryLabel}>
            <button className="filter" type="button" aria-pressed={category === null} onClick={() => setCategory(null)}>{t.catalogue.all} <span className="cnt" dir="ltr">{t.items.length}</span></button>
            {t.catalogue.categories.map((entry) => <button className="filter" type="button" aria-pressed={category === entry.id} onClick={() => setCategory(entry.id)} key={entry.id}>{entry.label} <span className="cnt" dir="ltr">{t.items.filter((item) => item.category === entry.id).length}</span></button>)}
          </div>
          <div className="fl-meta"><span className="label" aria-live="polite">{shownCount}</span><span className="fl-legend"><span className="fl-sitetag">{t.catalogue.sitePhoto}</span> {t.catalogue.sitePhotoNote}</span></div>
        </div>
        <div className="fl-grid">
          {shown.map((item) => { const inList = list[item.code] > 0; return <article className={inList ? "fl-card is-in" : "fl-card"} key={item.code}>
            <div className="fl-card__top"><span>{categoryLabel[item.category]}</span><b dir="ltr">{item.code}</b></div>
            <div className="fl-card__ph">
              {item.image ? <Image className={`fl-img${item.imageClass ? ` ${item.imageClass}` : ""}`} src={item.image} alt={item.alt} sizes="(max-width: 600px) 50vw, (max-width: 1100px) 50vw, 300px" /> : <div className="fl-ph"><Icon name={item.icon} /><span className="label">{t.catalogue.photoSoon}</span></div>}
              {item.sitePhoto && <span className="fl-sitetag fl-sitetag--on">{t.catalogue.sitePhoto}</span>}
            </div>
            <h2 className="fl-card__name">{item.name}</h2>
            <dl className="fl-card__specs"><div><dt>{item.specLabel}</dt><dd>{item.specValue ?? <Tbc label={tbc} />}</dd></div><div><dt>{t.catalogue.supply}</dt><dd>{item.supply}</dd></div></dl>
            <div className="fl-card__act"><button className={inList ? "btn btn--sm btn--ink" : "btn btn--sm"} type="button" aria-pressed={inList} onClick={() => setQty(item.code, inList ? 0 : 1)}>{inList ? t.catalogue.added : t.catalogue.add}</button></div>
          </article>; })}
          {shown.length === 0 && <p className="dir__empty">{t.catalogue.noMatchBefore}{query}{t.catalogue.noMatchAfter}</p>}
        </div>
      </div>

      <aside className="ql" id="quote-list">
        <div className="ql__head"><strong>{t.quote.title}</strong><span className="ql__count" aria-live="polite">{total ? units : t.quote.emptyCount}</span></div>
        <div className="ql__body">
          {selected.length === 0 && <p className="ql__empty">{t.quote.empty}</p>}
          {selected.length > 0 && <ul className="ql__list">{selected.map((item) => <li className="ql__item" key={item.code}>
            <div className="ql__name"><b>{item.name}</b><span className="label" dir="ltr">{item.code}</span></div>
            <div className="ql__qty"><button type="button" aria-label={fill(t.quote.fewer, { name: item.name })} onClick={() => setQty(item.code, list[item.code] - 1)}>−</button><span dir="ltr">{list[item.code]}</span><button type="button" aria-label={fill(t.quote.more, { name: item.name })} onClick={() => setQty(item.code, list[item.code] + 1)}>+</button></div>
            <button className="ql__rm" type="button" aria-label={fill(t.quote.remove, { name: item.name })} onClick={() => setQty(item.code, 0)}><Icon name="close" /></button>
          </li>)}</ul>}
          <div className="ql__fields">
            <div className="fld"><label htmlFor={`${id}-site`}>{t.quote.site}</label><select id={`${id}-site`} className="inp" value={site} onChange={(e) => setSite(e.target.value)}>{sites.map((name) => <option key={name}>{name}</option>)}</select></div>
            <div className="row2"><div className="fld"><label htmlFor={`${id}-start`}>{t.quote.start}</label><input id={`${id}-start`} className="inp" type="date" value={start} onChange={(e) => setStart(e.target.value)} /></div><div className="fld"><label htmlFor={`${id}-duration`}>{t.quote.duration}</label><select id={`${id}-duration`} className="inp" value={duration} onChange={(e) => setDuration(e.target.value)}>{t.quote.durations.map((value) => <option key={value}>{value}</option>)}</select></div></div>
            <div className="fld"><span className="fld__lbl">{t.quote.supply}</span><div className="seg ql__seg" role="group" aria-label={t.quote.supply}>{t.quote.supplyOptions.map((label, index) => <button key={label} type="button" aria-pressed={supply === index} onClick={() => setSupply(index)}>{label}</button>)}</div></div>
          </div>
          <button className="btn btn--lg ql__send" type="button" disabled={selected.length === 0} onClick={continueRequest}>{t.quote.continue} <Icon name="arrow" /></button>
          <p className="ql__fine">{t.quote.fine} <a href={`tel:${contact.phone.tel}`} dir="ltr">{contact.phone.display}</a>.</p>
        </div>
      </aside>
    </div></div></section>
    {total > 0 && <div className="fl-bar"><span><b dir="ltr">{units}</b> {t.quote.inList}</span><a className="btn btn--sm btn--hivis" href="#quote-list">{t.quote.review}</a></div>}
  </>;
}
