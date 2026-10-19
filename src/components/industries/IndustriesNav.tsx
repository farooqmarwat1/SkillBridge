"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { href, routes, type Locale } from "@/lib/i18n";
import type { IndustrySector } from "@/content/industries";

export function IndustriesNav({
  lang,
  sectors,
  quoteBtn,
}: {
  lang: Locale;
  sectors: IndustrySector[];
  quoteBtn: string;
}) {
  const [activeId, setActiveId] = useState<string>(sectors[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 180;
      for (let i = sectors.length - 1; i >= 0; i--) {
        const sector = sectors[i];
        const el = document.getElementById(sector.id);
        if (el && el.offsetTop - offset <= scrollY) {
          setActiveId(sector.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectors]);

  return (
    <nav className="subnav" aria-label="Sectors">
      <div className="c subnav__in">
        {sectors.map((s) => (
          <a
            key={s.id}
            className={activeId === s.id ? "is-on" : undefined}
            href={`#${s.id}`}
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(s.id);
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                setActiveId(s.id);
                history.replaceState(null, "", `#${s.id}`);
              }
            }}
          >
            {s.title}
          </a>
        ))}
        <Link className="btn btn--sm subnav__cta" href={href(lang, routes.quote)}>
          {quoteBtn}
        </Link>
      </div>
    </nav>
  );
}
