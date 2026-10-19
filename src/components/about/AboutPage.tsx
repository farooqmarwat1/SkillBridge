import Image from "next/image";
import Link from "next/link";
import type { AboutContent } from "@/content/about";
import type { SiteContent } from "@/content/site";
import { contact } from "@/content/site";
import { href, projectHref, routes, type Locale } from "@/lib/i18n";
import { leaders, projects as pj, site } from "@/lib/media";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";

export function AboutPage({
  lang,
  t,
  tbc,
  cta,
}: {
  lang: Locale;
  t: AboutContent;
  tbc: string;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image
          className="ph__img"
          src={site.teamFleetDesert}
          alt=""
          sizes="100vw"
          placeholder="blur"
          priority
        />
        <div className="c ph__in">
          <ol className="crumbs">
            <li>
              <Link href={href(lang, routes.home)}>{t.hero.home}</Link>
            </li>
            <li aria-current="page">{t.hero.about}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
          <p className="ab-ar" lang="ar" dir="rtl">
            {t.hero.arabicBrand}
          </p>
        </div>
      </header>

      {/* Who we are */}
      <section className="sec">
        <div className="c">
          <div className="ab-intro">
            <div className="ab-intro__copy rv">
              <span className="eyebrow">{t.intro.eyebrow}</span>
              <h2 className="h2">{t.intro.title}</h2>
              <p className="lead">{t.intro.lead}</p>
              <p className="cs-p">{t.intro.body}</p>
              <div className="ab-quick">
                <div>
                  <span className="label">{t.intro.quick.office.label}</span>
                  <b>{t.intro.quick.office.value}</b>
                </div>
                <div>
                  <span className="label">{t.intro.quick.services.label}</span>
                  <b>{t.intro.quick.services.value}</b>
                </div>
                <div>
                  <span className="label">{t.intro.quick.sectors.label}</span>
                  <b>{t.intro.quick.sectors.value}</b>
                </div>
              </div>
            </div>
            <div className="ab-collage rv">
              <Image
                className="ab-collage__a rv-img"
                src={site.toolboxTalkSunrise}
                alt={t.intro.altA}
                sizes="(max-width: 900px) 100vw, 560px"
                placeholder="blur"
              />
              <Image
                className="ab-collage__b"
                src={pj.neomToolboxTalk}
                alt={t.intro.altB}
                sizes="(max-width: 900px) 50vw, 280px"
                placeholder="blur"
              />
              <div className="ab-collage__tag">
                <b>{t.intro.collageTag.count}</b>
                <span>{t.intro.collageTag.label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / vision / values */}
      <section className="sec alt">
        <div className="c">
          <div className="mv rv">
            <article className="mv__card mv__card--dark">
              <span className="label">{t.mv.mission.label}</span>
              <p className="mv__q">{t.mv.mission.text}</p>
            </article>
            <article className="mv__card">
              <span className="label">{t.mv.vision.label}</span>
              <p className="mv__q">{t.mv.vision.text}</p>
            </article>
          </div>
          <div className="mv-values rv">
            {t.mv.values.map((v) => (
              <div className="mv-value" key={v.num}>
                <span className="incl__n">{v.num}</span>
                <b>{v.title}</b>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="sec" id="leadership">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.leadership.eyebrow}</span>
              <h2 className="h2">{t.leadership.title}</h2>
            </div>
            <p className="lead">{t.leadership.lead}</p>
          </div>
          <div className="ldr rv">
            {t.leadership.members.map((m) => (
              <article className="ldr__card" key={m.name}>
                <div className="ldr__ph">
                  <Image
                    src={m.image}
                    alt={m.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 280px"
                  />
                </div>
                <div className="ldr__body">
                  <span className="label">{m.role}</span>
                  <h3 className="ldr__name">{m.name}</h3>
                  <p>{m.desc}</p>
                  <p className="ldr__bio">{m.bio}</p>
                  <div className="ldr__contact">
                    {m.phone && (
                      <a
                        className="data"
                        href={`tel:${m.phone.replace(/\s+/g, "")}`}
                        dir="ltr"
                      >
                        {m.phone}
                      </a>
                    )}
                    <a
                      className="foot__sq ldr__in"
                      href={m.linkedinUrl}
                      aria-label={m.linkedinAria}
                    >
                      <Icon name="linkedin" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers band */}
      <section className="nb">
        <div className="c nb__in">
          {t.numbers.map((n) => (
            <div className="nb__item" key={n.val}>
              <b dir="auto">{n.val}</b>
              <span>{n.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="sec">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.services.eyebrow}</span>
              <h2 className="h2">{t.services.title}</h2>
            </div>
            <p className="lead">{t.services.lead}</p>
          </div>
          <div className="svl rv">
            {t.services.items.map((item) => (
              <Link
                className="svl__row"
                href={href(lang, routes[item.routeKey])}
                key={item.num}
              >
                <span className="svl__n">{item.num}</span>
                <b>{item.title}</b>
                <span className="svl__d">{item.desc}</span>
                <span className="svl__go">
                  <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who we work for */}
      <section className="sec alt">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.clients.eyebrow}</span>
              <h2 className="h2">{t.clients.title}</h2>
            </div>
            <div style={{ display: "grid", gap: "16px", justifyItems: "start" }}>
              <p className="lead">{t.clients.lead}</p>
              <Link className="link" href={href(lang, routes.projects)}>
                {t.clients.link} <Icon name="arrow" />
              </Link>
            </div>
          </div>
          <div className="cw rv">
            {t.clients.items.map((c) => (
              <Link className="cw__item" href={projectHref(lang, c.slug)} key={c.slug}>
                <b>{c.name}</b>
                <span className="label">{c.project}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Management message + company file */}
      <section className="sec">
        <div className="c">
          <div className="ab-two">
            <figure className="msg rv">
              <svg className="tst__q" viewBox="0 0 48 36" aria-hidden="true">
                <path d="M0 36V20C0 8 7 1 19 0v7c-6 1-9 5-9 11h9v18zm29 0V20c0-12 7-19 19-20v7c-6 1-9 5-9 11h9v18z" />
              </svg>
              <span className="label">{t.management.label}</span>
              <blockquote>{t.management.quote}</blockquote>
              <figcaption className="tst__who">
                <Image
                  className="msg__av"
                  src={leaders.zafeerUllahKhanCeo}
                  alt=""
                  width={46}
                  height={46}
                />
                <div>
                  <b>{t.management.name}</b>
                  <span className="label">{t.management.role}</span>
                </div>
              </figcaption>
            </figure>
            <div className="cd rv">
              <span className="eyebrow">{t.companyFile.eyebrow}</span>
              <h2 className="h2">{t.companyFile.title}</h2>
              <dl className="cd__list">
                {t.companyFile.items.map((item) => (
                  <div key={item.label}>
                    <dt className="label">{item.label}</dt>
                    <dd
                      className={item.isArabic ? "cd__ar" : undefined}
                      dir={item.isArabic ? "rtl" : undefined}
                      lang={item.isArabic ? "ar" : undefined}
                    >
                      {item.val ? (
                        item.isData ? (
                          <span className="data">{item.val}</span>
                        ) : (
                          item.val
                        )
                      ) : (
                        <Tbc label={tbc} />
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <a
                  className="btn"
                  href={contact.profilePdf}
                  target="_blank"
                  rel="noopener"
                >
                  {t.companyFile.download}
                </a>
                <Link className="btn btn--ghost" href={href(lang, routes.hse)}>
                  {t.companyFile.hseButton}
                </Link>
              </div>
            </div>
          </div>
          <div className="v2030 rv">
            <span className="label">{t.vision2030.label}</span>
            <p>{t.vision2030.text}</p>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
