"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectsContent } from "@/content/projects";
import { projectHref, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function ProjectsList({
  lang,
  t,
}: {
  lang: Locale;
  t: ProjectsContent;
}) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: t.items.length };
    for (const item of t.items) {
      map[item.sector] = (map[item.sector] || 0) + 1;
    }
    return map;
  }, [t.items]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return t.items;
    return t.items.filter((item) => item.sector === activeFilter);
  }, [t.items, activeFilter]);

  return (
    <section className="sec">
      <div className="c">
        <div className="pl-bar">
          <div
            className="filters"
            role="group"
            aria-label="Filter projects by sector"
          >
            {t.filters.map((f) => {
              const isPressed = activeFilter === f.id;
              const count = counts[f.id] || 0;
              return (
                <button
                  key={f.id}
                  className="filter"
                  type="button"
                  aria-pressed={isPressed}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label} <span className="cnt">{count}</span>
                </button>
              );
            })}
          </div>
          <span className="label">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? t.projectLabel : t.projectsLabel}
          </span>
        </div>

        <div className="pl-grid">
          {filteredItems.map((c) => (
            <Link
              className="pcard"
              href={projectHref(lang, c.slug)}
              key={c.slug}
            >
              <div className="pcard__ph">
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 380px"
                />
                <span className="proj__tag">{c.tag}</span>
              </div>
              <div className="pcard__body">
                <span className="label">{c.client}</span>
                <h3 className="h4">{c.title}</h3>
                <div className="pcard__fig">
                  <b dir="auto">{c.fig}</b>
                  <span>{c.figLabel}</span>
                </div>
                <span className="link">
                  {t.viewProject} <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
