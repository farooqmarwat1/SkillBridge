import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CareersContent } from "@/content/careers";
import type { SiteContent } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { projects as pj, site } from "@/lib/media";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { CareersForm } from "./CareersForm";

const whyPhotos: Record<
  CareersContent["why"]["items"][number]["photoKey"],
  StaticImageData
> = {
  neomDuctBankCrew: pj.neomDuctBankCrew,
  rebarHarnessWalkway: site.rebarHarnessWalkway,
  rebarInspectionTeam: site.rebarInspectionTeam,
  teamFleetDesert: site.teamFleetDesert,
};

export function CareersPage({
  lang,
  t,
  tbc,
  cta,
}: {
  lang: Locale;
  t: CareersContent;
  tbc: string;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image
          className="ph__img"
          src={site.toolboxTalkSunrise}
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
            <li aria-current="page">{t.hero.careers}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
          <div className="hero__ctas">
            <a className="btn btn--hivis btn--lg" href="#apply">
              {t.hero.applyBtn} <Icon name="arrow" />
            </a>
            <a className="btn btn--ghost-inv btn--lg" href="#roles">
              {t.hero.rolesBtn}
            </a>
          </div>
        </div>
      </header>

      {/* Why join */}
      <section className="sec">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.why.eyebrow}</span>
              <h2 className="h2">{t.why.title}</h2>
            </div>
            <p className="lead">{t.why.lead}</p>
          </div>
          <div className="cr-why rv">
            {t.why.items.map((item) => (
              <article className="cr-why__item" key={item.title}>
                <Image
                  src={whyPhotos[item.photoKey]}
                  alt={item.alt}
                  sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 380px"
                  placeholder="blur"
                />
                <div>
                  <span className="label">{item.label}</span>
                  <b className="h4">{item.title}</b>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="sec alt" id="roles">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.roles.eyebrow}</span>
              <h2 className="h2">{t.roles.title}</h2>
            </div>
            <p className="lead">{t.roles.lead}</p>
          </div>
          <div className="cr-roles rv">
            {t.roles.disciplines.map((d) => (
              <div className="cr-roles__col" key={d.name}>
                <div className="cr-roles__head">
                  <b className="h4">{d.name}</b>
                  <span className="cnt">{d.roles.length}</span>
                </div>
                <ul>
                  {d.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How hiring works */}
      <section className="sec">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{t.hiring.eyebrow}</span>
              <h2 className="h2">{t.hiring.title}</h2>
            </div>
            <p className="lead">{t.hiring.lead}</p>
          </div>
          <ol className="tl tl--4 rv">
            {t.hiring.steps.map((s) => (
              <li className="tl__step" key={s.num}>
                <span className="tl__dot">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="cr-warn rv">
            <Icon name="shield" />
            <p>
              <b>{t.hiring.warning.bold}</b> {t.hiring.warning.text}{" "}
              <Tbc label={tbc} />
            </p>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="sec alt">
        <div className="c">
          <CareersForm t={t.form} disciplines={t.roles.disciplines} />
        </div>
      </section>

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
