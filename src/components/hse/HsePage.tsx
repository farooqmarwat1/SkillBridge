import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { HseContent } from "@/content/hse";
import type { SiteContent } from "@/content/site";
import { contact } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { projects as pj, site } from "@/lib/media";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";

const practicePhotos: Record<
  HseContent["practices"]["cards"][number]["photoKey"],
  StaticImageData
> = {
  toolboxTalkSunrise: site.toolboxTalkSunrise,
  rebarHarnessWalkway: site.rebarHarnessWalkway,
  neomTrenchBackhoe: pj.neomTrenchBackhoe,
  tcfTadanoLiftRiggers: pj.tcfTadanoLiftRiggers,
  neomJcbBackhoes: pj.neomJcbBackhoes,
  neomSubstationDigging: pj.neomSubstationDigging,
};

export function HsePage({
  lang,
  t,
  tbc,
  cta,
}: {
  lang: Locale;
  t: HseContent;
  tbc: string;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image
          className="ph__img"
          src={site.rebarHarnessWalkway}
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
            <li aria-current="page">{t.hero.hse}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
          <div className="ph__facts">
            {t.hero.facts.map((fact) => (
              <span className="ph__fact" key={fact.label}>
                <b dir="auto">{fact.val}</b> {fact.label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Policy commitment */}
      <section className="sec">
        <div className="c">
          <div className="hs-pol">
            <div className="hs-pol__copy rv">
              <span className="eyebrow">{t.policy.eyebrow}</span>
              <h2 className="h2">{t.policy.title}</h2>
              <p className="lead">{t.policy.lead}</p>
              <ul className="checks">
                {t.policy.checks.map((c) => (
                  <li key={c.title}>
                    <Icon name="check" />
                    <div>
                      <b>{c.title}</b>
                      <span>{c.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                <a
                  className="btn"
                  href={contact.profilePdf}
                  target="_blank"
                  rel="noopener"
                >
                  {t.policy.download}
                </a>
                <Tbc label={t.policy.downloadTbc} />
              </div>
            </div>
            <figure className="hs-pol__fig rv">
              <Image
                className="rv-img"
                src={pj.neomToolboxTalk}
                alt={t.policy.figAlt}
                sizes="(max-width: 900px) 100vw, 560px"
                placeholder="blur"
              />
              <figcaption className="label">{t.policy.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="sec alt">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.practices.eyebrow}</span>
              <h2 className="h2">{t.practices.title}</h2>
            </div>
            <p className="lead">{t.practices.lead}</p>
          </div>
          <div className="hs-grid rv">
            {t.practices.cards.map((card) => (
              <article className="hs-card" key={card.title}>
                <Image
                  src={practicePhotos[card.photoKey]}
                  alt={card.alt}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 380px"
                  placeholder="blur"
                />
                <div>
                  <span className="label">{card.label}</span>
                  <b className="h4">{card.title}</b>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Performance numbers band */}
      <section className="nb">
        <div className="c nb__in">
          {t.performance.items.map((label) => (
            <div className="nb__item" key={label}>
              <b className="nb__tbc">
                <Tbc label={tbc} />
              </b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quality */}
      <section className="sec">
        <div className="c">
          <div className="hs-q">
            <figure className="hs-q__fig rv">
              <Image
                className="rv-img"
                src={site.rebarInspectionTeam}
                alt={t.quality.figAlt}
                sizes="(max-width: 900px) 100vw, 560px"
                placeholder="blur"
              />
              <figcaption className="label">{t.quality.caption}</figcaption>
            </figure>
            <div className="hs-q__copy rv">
              <span className="eyebrow">{t.quality.eyebrow}</span>
              <h2 className="h2">{t.quality.title}</h2>
              <p className="lead">{t.quality.lead}</p>
              <ol className="cs-scope">
                {t.quality.steps.map((s) => (
                  <li key={s.num}>
                    <span className="cs-scope__n">{s.num}</span>
                    <div>
                      <b>{s.title}</b>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="certs-sec alt">
        <div className="c">
          <div className="certs__head rv">
            <div>
              <span className="eyebrow">{t.certificates.eyebrow}</span>
              <h2 className="h2">{t.certificates.title}</h2>
            </div>
            <a
              className="btn btn--ghost"
              href={contact.profilePdf}
              target="_blank"
              rel="noopener"
            >
              {t.certificates.download}
            </a>
          </div>
          <div className="certs rv">
            {t.certificates.items.map((c) => (
              <div className="cert" key={c.title}>
                <span className="cert__ic">
                  <Icon name={c.icon} />
                </span>
                <b>{c.title}</b>
                <span>{c.text}</span>
                <Tbc label={tbc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
