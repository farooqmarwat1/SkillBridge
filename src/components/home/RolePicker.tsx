"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { fill, type HomeContent } from "@/content/home";
import { prefillQuote } from "@/lib/quote-bus";
import { Icon } from "@/components/ui/Icon";

/** Discipline tabs with selectable role chips. "Request these roles" fills the quote form. */
export function RolePicker({ t, rolesPrefix }: { t: HomeContent["manpower"]; rolesPrefix: string }) {
  const id = useId();
  const [tab, setTab] = useState(0);
  const [picked, setPicked] = useState<string[]>(t.preselected);
  const current = t.disciplines[tab];

  const toggle = (role: string) =>
    setPicked((p) => (p.includes(role) ? p.filter((r) => r !== role) : [...p, role]));

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  function onTabKey(e: KeyboardEvent<HTMLDivElement>) {
    const rtl = document.documentElement.dir === "rtl";
    const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (tab + step + t.disciplines.length) % t.disciplines.length;
    setTab(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  }

  const n = picked.length;
  return (
    <div className="mp__panel">
      <div className="tabs" role="tablist" aria-label={t.tabsLabel} onKeyDown={onTabKey}>
        {t.disciplines.map((d, i) => (
          <button
            key={d.label}
            id={`${id}-tab-${i}`}
            className="tab"
            type="button"
            role="tab"
            aria-selected={tab === i}
            aria-controls={`${id}-panel`}
            tabIndex={tab === i ? 0 : -1}
            onClick={() => setTab(i)}
          >
            {d.label} <span className="cnt">{d.roles.length}</span>
          </button>
        ))}
      </div>
      <div
        className="chips"
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${tab}`}
        aria-label={fill(t.panelLabel, { d: current.label })}
        key={tab}
      >
        {current.roles.map((r) => {
          const on = picked.includes(r);
          return (
            <button key={r} className="chip" type="button" aria-pressed={on} onClick={() => toggle(r)}>
              {on && <Icon name="check" />}
              {r}
            </button>
          );
        })}
      </div>
      <div className="mp__foot">
        <span className="label" aria-live="polite">{fill(n === 1 ? t.pickedOne : t.pickedMany, { n })}</span>
        <a
          className="btn"
          href="#quote"
          onClick={() => prefillQuote({ type: "manpower", scope: picked.length ? rolesPrefix + picked.join(", ") : undefined })}
        >
          {t.cta} <Icon name="arrow" />
        </a>
      </div>
    </div>
  );
}
