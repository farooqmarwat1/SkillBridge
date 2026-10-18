"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { fill, type HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { prefillQuote } from "@/lib/quote-bus";
import { Tbc } from "@/components/ui/Tbc";

/** Category filter, equipment spec plates and a running quote list. */
export function FleetPreview({ lang, t, tbc, machinesPrefix }: { lang: Locale; t: HomeContent["fleet"]; tbc: string; machinesPrefix: string }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [list, setList] = useState<string[]>([]);

  const shown = t.plates.filter((p) => filter === null || p.cat === filter);
  const toggle = (code: string) => setList((l) => (l.includes(code) ? l.filter((c) => c !== code) : [...l, code]));
  const n = list.length;
  const listText = n === 0 ? t.listEmpty : fill(n === 1 ? t.listOne : t.listMany, { n });

  function sendList() {
    const names = t.plates.filter((p) => list.includes(p.code)).map((p) => `${p.name} (${p.code})`);
    prefillQuote({ type: "equipment", scope: names.length ? machinesPrefix + names.join(", ") : undefined });
  }

  return (
    <>
      <div className="filters" role="group" aria-label={t.filterLabel}>
        {[null, ...t.filters].map((f) => (
          <button key={f ?? "all"} className="filter" type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f ?? t.all}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="plates">
          {shown.map((p) => {
            const added = list.includes(p.code);
            return (
              <article className="plate" key={p.code}>
                <div className="plate__top"><span>{p.cat}</span><b dir="ltr">{p.code}</b></div>
                <div className="plate__ph">
                  <Image src={p.img} alt={p.alt} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 300px" />
                </div>
                <h3>{p.name}</h3>
                <dl>
                  {p.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v ?? <Tbc label={tbc} />}</dd>
                    </div>
                  ))}
                </dl>
                <div className="plate__act">
                  <button className={added ? "btn btn--sm btn--ink" : "btn btn--sm"} type="button" aria-pressed={added} onClick={() => toggle(p.code)}>
                    {added ? `${t.added} ✓` : t.add}
                  </button>
                  <Link className="btn btn--sm btn--ghost" href={href(lang, routes.equipment)}>{t.details}</Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="fleet__more">
          <div>
            <b className="h4">{t.empty.title}</b>
            <p className="lead fleet__note">{t.empty.text}</p>
          </div>
          <a className="btn btn--ghost" href="#quote" onClick={() => prefillQuote({ type: "equipment" })}>{t.empty.cta}</a>
        </div>
      )}

      <div className="fleet__more">
        <div>
          <b className="h4" aria-live="polite">{listText}</b>
          <p className="fleet__note">{t.fleetNote}</p>
        </div>
        <div className="fleet__acts">
          <Link className="btn btn--ink" href={href(lang, routes.equipment)}>{t.viewFleet}</Link>
          <a className="btn" href="#quote" onClick={sendList}>{t.sendList}</a>
        </div>
      </div>
    </>
  );
}
