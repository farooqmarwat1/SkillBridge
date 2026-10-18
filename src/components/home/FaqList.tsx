"use client";

import { useId, useState } from "react";

/** Accordion with one answer open at a time. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const id = useId();
  const [open, setOpen] = useState(0);
  return (
    <div className="faq__list rv">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={isOpen ? "faq__item is-open" : "faq__item"} key={it.q}>
            <h3 className="faq__h">
              <button
                className="faq__q"
                type="button"
                id={`${id}-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{it.q}</span>
                <span className="faq__pm" aria-hidden="true" />
              </button>
            </h3>
            <div id={`${id}-a-${i}`} role="region" aria-labelledby={`${id}-q-${i}`} hidden={!isOpen}>
              <p className="faq__a">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
