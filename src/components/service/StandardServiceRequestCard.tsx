"use client";

import { useId, useState } from "react";
import type { QuoteType } from "@/content/home";
import type { ServiceContent } from "@/content/service-manpower";
import { contact } from "@/content/site";
import { prefillQuote } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

export function StandardServiceRequestCard({
  serviceType,
  t,
  sites,
}: {
  serviceType: QuoteType["id"];
  t: ServiceContent;
  sites: string[];
}) {
  const [site, setSite] = useState(sites[0] || "Al Jubail");
  const [start, setStart] = useState("");
  const id = useId();

  const handleContinue = () => {
    prefillQuote(
      {
        type: serviceType,
        site,
        start,
      },
      true
    );
  };

  return (
    <aside className="side">
      <div className="side__card">
        <div className="side__head">
          <strong>{t.request.title}</strong>
        </div>
        <div className="side__body">
          {t.request.note && (
            <div className="side__picked">
              <span className="side__names">{t.request.note}</span>
            </div>
          )}
          <div className="fld">
            <label htmlFor={`${id}-site`}>{t.request.site}</label>
            <select
              id={`${id}-site`}
              className="inp"
              value={site}
              onChange={(e) => setSite(e.target.value)}
            >
              {sites.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="fld">
            <label htmlFor={`${id}-start`}>{t.request.start}</label>
            <input
              id={`${id}-start`}
              className="inp"
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
          <button className="btn" type="button" onClick={handleContinue}>
            {t.request.continue} <Icon name="arrow" />
          </button>
        </div>
        <div className="side__call">
          <span className="label">{t.request.call}</span>
          <a className="data" href={`tel:${contact.phone.tel}`} dir="ltr">
            {contact.phone.display}
          </a>
        </div>
      </div>
    </aside>
  );
}
