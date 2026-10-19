"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NewsContent } from "@/content/news";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function NewsPage({ lang, t }: { lang: Locale; t: NewsContent }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? t.articles
      : t.articles.filter((a) => a.category === activeFilter);

  return (
    <>
      <header className="ph ph--sub">
        <div className="c ph__in">
          <ol className="crumbs">
            <li>
              <Link href={href(lang, routes.home)}>{t.hero.home}</Link>
            </li>
            <li aria-current="page">{t.hero.news}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
        </div>
      </header>

      <section className="sec">
        <div className="c">
          <div className="dir__bar" style={{ marginBottom: "32px" }}>
            <div className="dir__tabs" role="group" aria-label="Filters">
              {t.filters.map((f) => (
                <button
                  key={f.id}
                  className="filter"
                  type="button"
                  aria-pressed={activeFilter === f.id}
                  onClick={() => setActiveFilter(f.id)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="news">
            {filtered.map((item) => (
              <Link
                key={item.slug}
                className="post"
                href={href(lang, `${routes.news}/${item.slug}`)}
              >
                <div className="post__ph">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    sizes="(max-width: 1000px) 100vw, 420px"
                  />
                </div>
                <div className="post__body">
                  <div className="post__meta">
                    <span className="post__tag">{item.tag}</span>
                    <span className="label">{item.date}</span>
                    <span className="label" style={{ marginInlineStart: "auto" }}>
                      {item.readTime}
                    </span>
                  </div>
                  <h2 className="h4">{item.title}</h2>
                  <p>{item.lead}</p>
                  <span className="link">
                    {t.readArticle} <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="cta-band">
        <div className="c cta-band__in">
          <div>
            <span className="eyebrow">{t.cta.eyebrow}</span>
            <h2 className="h2">{t.cta.title}</h2>
            <p className="lead">{t.cta.lead}</p>
          </div>
          <Link className="btn btn--hivis btn--lg" href={href(lang, routes.quote)}>
            {t.cta.btn} <Icon name="arrow" />
          </Link>
        </div>
      </section>
    </>
  );
}
