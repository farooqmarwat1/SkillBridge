import Image from "next/image";
import Link from "next/link";
import type { CaseStudyData, CaseStudyI18n } from "@/content/project-case-studies";
import type { SiteContent } from "@/content/site";
import { href, projectHref, routes, type Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { ProjectGallery } from "./ProjectGallery";

export function ProjectCaseStudyPage({
  lang,
  p,
  i18n,
  nextProject,
  tbc,
  cta,
}: {
  lang: Locale;
  p: CaseStudyData;
  i18n: CaseStudyI18n;
  nextProject: CaseStudyData;
  tbc: string;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      {/* Case hero */}
      <header className="cs-hero">
        <div className="cs-hero__copy">
          <ol className="crumbs">
            <li>
              <Link href={href(lang, routes.home)}>{i18n.home}</Link>
            </li>
            <li>
              <Link href={href(lang, routes.projects)}>{i18n.projects}</Link>
            </li>
            <li aria-current="page">{p.short}</li>
          </ol>
          <span className="eyebrow">{p.eyebrow}</span>
          <h1 className="display cs-hero__h">{p.title}</h1>
          <p className="lead cs-hero__lead">{p.lead}</p>
          <div className="cs-chips">
            {p.chips.map((chip) => (
              <span className="cs-chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="cs-hero__media">
          <Image
            src={p.heroImage}
            alt={p.heroAlt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="cs-hero__tag">
            <span className="label">{i18n.clientLabel}</span>
            <b>{p.client}</b>
          </div>
        </div>
      </header>

      {/* Key facts */}
      <div className="cs-facts">
        <div className="c cs-facts__in">
          {p.facts.map((fact) => (
            <div className="cs-fact" key={fact.label}>
              <span className="label">{fact.label}</span>
              <b>
                {fact.value !== null ? (
                  fact.value
                ) : (
                  <Tbc label={tbc} />
                )}
              </b>
            </div>
          ))}
        </div>
      </div>

      {/* Brief + scope */}
      <section className="sec">
        <div className="c">
          <div className="cs-brief">
            <div className="cs-brief__copy rv">
              <span className="eyebrow">{i18n.theBrief}</span>
              <h2 className="h2">{p.briefTitle}</h2>
              <p className="lead">{p.briefLead}</p>
              <p className="cs-p">{p.briefText}</p>
              {p.bigNum && (
                <div className="cs-big">
                  <b>{p.bigNum}</b>
                  <span>{p.bigLabel}</span>
                </div>
              )}
            </div>
            <div className="rv">
              <span className="label cs-scope__lbl">{i18n.scopeLabel}</span>
              <ol className="cs-scope">
                {p.scope.map((s) => (
                  <li key={s.num}>
                    <span className="cs-scope__n">{s.num}</span>
                    <div>
                      <b>{s.title}</b>
                      <p>{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery
        photos={p.photos}
        lead={p.galleryLead}
        eyebrow={i18n.galleryEyebrow}
        title={i18n.galleryTitle}
      />

      {/* Resources */}
      <section className="sec">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{i18n.resourcesEyebrow}</span>
              <h2 className="h2">{p.resourcesTitle}</h2>
            </div>
            <p className="lead">{p.resourcesLead}</p>
          </div>
          <div className="cs-res rv">
            {p.resources.map((res) => (
              <article className="cs-res__item" key={res.title}>
                <span className="label">{res.label}</span>
                <b className="h4">{res.title}</b>
                <p>{res.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Figures / Results */}
      <section className="sec alt">
        <div className="c">
          <div className="head rv">
            <div>
              <span className="eyebrow">{i18n.resultsEyebrow}</span>
              <h2 className="h2">{p.figuresTitle}</h2>
            </div>
            <p className="lead">{p.figuresLead}</p>
          </div>
          <div className="cs-figs rv">
            {p.figures.map((fig) => (
              <div className="cs-fig" key={fig.label}>
                <span className="label">{fig.label}</span>
                <b className="cs-fig__v">
                  {fig.val !== null ? (
                    fig.val
                  ) : (
                    <Tbc label={tbc} />
                  )}
                </b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="cs-next">
        <div className="c">
          <Link
            className="cs-next__card"
            href={projectHref(lang, nextProject.slug)}
          >
            <Image
              src={nextProject.heroImage}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
            <div className="cs-next__body">
              <span className="label">
                {i18n.nextProject} · {nextProject.client}
              </span>
              <b className="h2">{nextProject.title}</b>
              <span className="link">
                {i18n.viewCaseStudy} <Icon name="arrow" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
