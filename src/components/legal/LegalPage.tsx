import Link from "next/link";
import type { LegalDocContent } from "@/content/legal";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function LegalPage({
  lang,
  doc,
}: {
  lang: Locale;
  doc: LegalDocContent;
}) {
  return (
    <>
      <header className="ph ph--sub">
        <div className="c ph__in">
          <ol className="crumbs">
            <li>
              <Link href={href(lang, routes.home)}>{doc.hero.home}</Link>
            </li>
            <li aria-current="page">{doc.hero.title}</li>
          </ol>
          <span className="eyebrow">{doc.hero.eyebrow}</span>
          <h1 className="display ph__h">{doc.hero.title}</h1>
          <p className="lead ph__lead">{doc.hero.lastUpdated}</p>
        </div>
      </header>

      <section className="sec">
        <div className="c" style={{ maxWidth: "860px" }}>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: "var(--radius-md)",
              padding: "40px",
              display: "grid",
              gap: "36px",
            }}
          >
            {doc.sections.map((section) => (
              <article key={section.title} style={{ display: "grid", gap: "14px" }}>
                <h2 className="h3s" style={{ color: "var(--text)" }}>
                  {section.title}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "15px" }}>
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul
                    style={{
                      display: "grid",
                      gap: "8px",
                      margin: "6px 0 0",
                      paddingInlineStart: "20px",
                      color: "var(--text-muted)",
                      fontSize: "15px",
                      lineHeight: "1.6",
                    }}
                  >
                    {section.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}

            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: "28px",
                display: "grid",
                gap: "10px",
              }}
            >
              <h3 className="h4">{doc.contactBlock.title}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "15px" }}>
                {doc.contactBlock.text}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center", marginTop: "4px" }}>
                <a
                  className="data"
                  href={`tel:${doc.contactBlock.phone.replace(/\s+/g, "")}`}
                  dir="ltr"
                  style={{ fontWeight: 600, color: "var(--text)" }}
                >
                  {doc.contactBlock.phone}
                </a>
                <span className="label">·</span>
                <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                  {doc.contactBlock.address}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              <Link className="btn btn--hivis" href={href(lang, routes.quote)}>
                {lang === "ar" ? "طلب عرض سعر" : "Request a quote"} <Icon name="arrow" />
              </Link>
              <Link className="btn btn--ghost" href={href(lang, routes.home)}>
                {lang === "ar" ? "العودة للرئيسية" : "Back to home"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
