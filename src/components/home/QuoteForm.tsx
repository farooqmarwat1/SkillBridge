"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { HomeContent, QuoteType } from "@/content/home";
import { contact } from "@/content/site";
import { QUOTE_EVENT, type QuotePrefill } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

/* The full request form. It accepts prefills from the hero, role picker and fleet list.
   TODO(client): there is no inbox or CRM yet, so a request is only confirmed on screen.
   Wire `submit` to a Server Action once the destination is confirmed (docs/PROJECT.md). */
export function QuoteForm({ t, sites }: { t: HomeContent["quote"]; sites: string[] }) {
  const id = useId();
  const scopeRef = useRef<HTMLTextAreaElement>(null);
  const [type, setType] = useState<QuoteType["id"]>("manpower");
  const [scope, setScope] = useState("");
  const [site, setSite] = useState(sites[0]);
  const [start, setStart] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    function onPrefill(e: Event) {
      const d = (e as CustomEvent<QuotePrefill>).detail;
      setSent(false);
      if (d.type) setType(d.type);
      if (d.scope) setScope(d.scope);
      if (d.site) setSite(d.site);
      if (d.start) setStart(d.start);
      // Let the scroll settle, then put the cursor where the visitor continues.
      window.setTimeout(() => scopeRef.current?.focus({ preventScroll: true }), 400);
    }
    window.addEventListener(QUOTE_EVENT, onPrefill);
    return () => window.removeEventListener(QUOTE_EVENT, onPrefill);
  }, []);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="qf__done" role="status">
        <span className="qf__tick"><Icon name="check" /></span>
        <h3 className="h2">{t.doneTitle}</h3>
        <p className="lead">
          {t.doneText} <a href={`tel:${contact.phone.tel}`} dir="ltr">{contact.phone.display}</a>.
        </p>
        <button className="btn btn--ghost" type="button" onClick={() => setSent(false)}>{t.again}</button>
      </div>
    );
  }

  const f = (name: string) => `${id}-${name}`;
  return (
    <form className="qf__form" onSubmit={submit}>
      <fieldset className="qf__set">
        <legend className="qf__legend"><span className="qf__step">1</span> {t.step1}</legend>
        <div className="qf__types" role="group" aria-label={t.typesLabel}>
          {t.types.map((q) => (
            <button key={q.id} className="qf__type" type="button" aria-pressed={type === q.id} onClick={() => setType(q.id)}>
              <b>{q.label}</b><span>{q.sub}</span>
            </button>
          ))}
        </div>
        <div className="fld">
          <label htmlFor={f("scope")}>{t.scope}</label>
          <textarea ref={scopeRef} id={f("scope")} name="scope" className="inp inp--area" placeholder={t.scopePh} value={scope} onChange={(e) => setScope(e.target.value)} required />
        </div>
      </fieldset>

      <fieldset className="qf__set">
        <legend className="qf__legend"><span className="qf__step">2</span> {t.step2}</legend>
        <div className="qf__grid">
          <div className="fld">
            <label htmlFor={f("site")}>{t.siteLabel}</label>
            <select id={f("site")} name="site" className="inp" value={site} onChange={(e) => setSite(e.target.value)}>
              {sites.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="fld">
            <label htmlFor={f("start")}>{t.start}</label>
            <input id={f("start")} name="start" className="inp" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
          </div>
          <div className="fld">
            <label htmlFor={f("dur")}>{t.duration} <span className="qf__opt">{t.optional}</span></label>
            <input id={f("dur")} name="duration" className="inp" placeholder={t.durationPh} />
          </div>
          <div className="fld">
            <label htmlFor={f("count")}>{t.count} <span className="qf__opt">{t.optional}</span></label>
            <input id={f("count")} name="count" className="inp" placeholder={t.countPh} />
          </div>
        </div>
      </fieldset>

      <fieldset className="qf__set">
        <legend className="qf__legend"><span className="qf__step">3</span> {t.step3}</legend>
        <div className="qf__grid">
          <div className="fld">
            <label htmlFor={f("name")}>{t.name}</label>
            <input id={f("name")} name="name" className="inp" autoComplete="name" placeholder={t.namePh} required />
          </div>
          <div className="fld">
            <label htmlFor={f("company")}>{t.company}</label>
            <input id={f("company")} name="company" className="inp" autoComplete="organization" placeholder={t.companyPh} />
          </div>
          <div className="fld">
            <label htmlFor={f("phone")}>{t.phone}</label>
            <input id={f("phone")} name="phone" className="inp" type="tel" autoComplete="tel" placeholder={t.phonePh} dir="ltr" required />
          </div>
          <div className="fld">
            <label htmlFor={f("email")}>{t.email}</label>
            <input id={f("email")} name="email" className="inp" type="email" autoComplete="email" placeholder={t.emailPh} dir="ltr" />
          </div>
        </div>
        <label className="qf__check"><input name="whatsapp" type="checkbox" /> {t.wa}</label>
      </fieldset>

      <div className="qf__foot">
        <p className="qf__fine">{t.fine}</p>
        <button className="btn btn--lg" type="submit">{t.send} <Icon name="arrow" /></button>
      </div>
    </form>
  );
}
