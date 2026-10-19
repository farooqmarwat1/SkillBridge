import Image from "next/image";
import Link from "next/link";
import type { NewsArticle, NewsContent } from "@/content/news";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function NewsDetailPage({
  lang,
  article,
  t,
  related,
}: {
  lang: Locale;
  article: NewsArticle;
  t: NewsContent;
  related: NewsArticle[];
}) {
  return (
    <>
      <header className="ph ph--sub">
        <div className="c ph__in">
          <ol className="crumbs">
            <li>
              <Link href={href(lang, routes.home)}>{t.hero.home}</Link>
            </li>
            <li>
              <Link href={href(lang, routes.news)}>{t.hero.news}</Link>
            </li>
            <li aria-current="page">{article.title}</li>
          </ol>
          <span className="eyebrow">{article.tag}</span>
          <h1 className="display ph__h">{article.title}</h1>
          <p className="lead ph__lead">{article.lead}</p>
          <div className="ph__facts">
            <span className="ph__fact">
              <b>{article.date}</b>
              {lang === "ar" ? "تاريخ النشر" : "Published"}
            </span>
            <span className="ph__fact">
              <b>{article.readTime}</b>
              {lang === "ar" ? "وقت القراءة" : "Reading time"}
            </span>
            <span className="ph__fact">
              <b>{article.author.name}</b>
              {article.author.role}
            </span>
          </div>
        </div>
      </header>

      <article className="sec">
        <div className="c" style={{ maxWidth: "880px" }}>
          {/* Main Hero Image */}
          <figure
            style={{
              margin: "0 0 40px",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              border: "1px solid var(--line)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}>
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 880px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <figcaption
              className="label"
              style={{
                padding: "12px 18px",
                background: "var(--surface)",
                borderTop: "1px solid var(--line)",
              }}
            >
              {article.imageAlt}
            </figcaption>
          </figure>

          {/* Key Takeaways Box */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line-strong)",
              borderInlineStart: "4px solid var(--highlight)",
              borderRadius: "var(--radius-sm)",
              padding: "24px 28px",
              marginBottom: "40px",
            }}
          >
            <h2
              className="h4"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "14px",
                color: "var(--text)",
              }}
            >
              <Icon name="check" /> {article.keyPointsTitle}
            </h2>
            <ul
              style={{
                display: "grid",
                gap: "10px",
                paddingInlineStart: "20px",
                margin: 0,
                color: "var(--text)",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              {article.keyPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div style={{ display: "grid", gap: "36px" }}>
            {article.sections.map((section) => (
              <section key={section.heading} style={{ display: "grid", gap: "14px" }}>
                <h2 className="h3s" style={{ color: "var(--text)" }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "16px",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
                {section.checklist && (
                  <div
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-sm)",
                      padding: "18px 24px",
                      marginTop: "6px",
                    }}
                  >
                    <ul
                      style={{
                        display: "grid",
                        gap: "8px",
                        paddingInlineStart: "20px",
                        margin: 0,
                        color: "var(--text)",
                        fontSize: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {section.checklist.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Conclusion Block */}
            <div
              style={{
                borderTop: "1px solid var(--line)",
                paddingTop: "24px",
                marginTop: "12px",
              }}
            >
              <blockquote
                style={{
                  margin: 0,
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "var(--text)",
                  lineHeight: "1.6",
                  fontStyle: "italic",
                }}
              >
                “{article.conclusion}”
              </blockquote>
            </div>

            {/* Author Footer Card */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                padding: "20px 24px",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-md)",
                marginTop: "10px",
              }}
            >
              <div>
                <span className="label" style={{ display: "block", marginBottom: "4px" }}>
                  {lang === "ar" ? "الكاتب / المنسق الفني" : "Article Contributor"}
                </span>
                <strong style={{ fontSize: "16px", color: "var(--text)" }}>
                  {article.author.name}
                </strong>
                <span style={{ display: "block", fontSize: "13px", color: "var(--text-muted)" }}>
                  {article.author.role}
                </span>
              </div>
              <Link className="btn btn--ghost" href={href(lang, routes.news)}>
                <Icon name="arrowBack" /> {t.backToNews}
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="sec alt">
          <div className="c">
            <div className="head rv" style={{ marginBottom: "28px" }}>
              <div>
                <span className="eyebrow">{t.hero.eyebrow}</span>
                <h2 className="h2">{t.relatedTitle}</h2>
              </div>
              <Link className="link" href={href(lang, routes.news)}>
                {t.hero.news} <Icon name="arrow" />
              </Link>
            </div>
            <div className="news">
              {related.map((item) => (
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
                    </div>
                    <h3 className="h4">{item.title}</h3>
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
      )}

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
