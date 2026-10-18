"use client";

import { useId, useState, type FormEvent } from "react";
import type { HomeContent } from "@/content/home";
import { prefillQuote } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

const segTypes = ["manpower", "equipment", "other"] as const;

/** Three-field request in the hero. It hands its answers to the full quote form below. */
export function QuickRequest({ t, sites }: { t: HomeContent["quick"]; sites: string[] }) {
  const id = useId();
  const [seg, setSeg] = useState(0);
  const [site, setSite] = useState(sites[0]);
  const [start, setStart] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    prefillQuote({ type: segTypes[seg], site, start }, true);
  }

  return (
    <form className="quick" onSubmit={submit}>
      <div className="quick__head">
        <strong>{t.title}</strong>
        <span className="label">{t.fields}</span>
      </div>
      <div className="fld quick__need">
        <span className="fld__lbl" id={`${id}-need`}>{t.need}</span>
        <div className="seg" role="group" aria-labelledby={`${id}-need`}>
          {t.segs.map((label, i) => (
            <button key={label} type="button" aria-pressed={seg === i} onClick={() => setSeg(i)}>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="fld">
        <label htmlFor={`${id}-site`}>{t.site}</label>
        <select id={`${id}-site`} className="inp" value={site} onChange={(e) => setSite(e.target.value)}>
          {sites.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="fld">
        <label htmlFor={`${id}-start`}>{t.start}</label>
        <input id={`${id}-start`} className="inp" type="date" value={start} onChange={(e) => setStart(e.target.value)} />
      </div>
      <button className="btn" type="submit">
        {t.submit} <Icon name="arrow" />
      </button>
    </form>
  );
}
