import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { IndustriesContent, IndustrySector } from "@/content/industries";
import type { SiteContent } from "@/content/site";
import { href, projectHref, routes, type Locale } from "@/lib/i18n";
import { projects as pj, site } from "@/lib/media";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { IndustriesNav } from "./IndustriesNav";

const sectorMedia: Record<
  IndustrySector["photoKey"],
  StaticImageData
> = {
  pipelineExcavatorsRow: site.pipelineExcavatorsRow,
  neomTrenchPvRow: pj.neomTrenchPvRow,
  formworkRebarWide: site.formworkRebarWide,
  concretePourPump: site.concretePourPump,
  dareenFinishedPlaza: pj.dareenFinishedPlaza,
};

const projectThumbs: Record<
  NonNullable<IndustrySector["projects"][number]["photoKey"]>,
  StaticImageData
> = {
  pipelineSanyLine: site.pipelineSanyLine,
  tcfTadanoLiftRiggers: pj.tcfTadanoLiftRiggers,
  neomCableTapeCrew: pj.neomCableTapeCrew,
  rebarCagesCrew: site.rebarCagesCrew,
  fleetLineupDesert: site.fleetLineupDesert,
  dareenPavingManhole: pj.dareenPavingManhole,
};

export function IndustriesPage({
  lang,
  t,
  cta,
}: {
  lang: Locale;
  t: IndustriesContent;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image
          className="ph__img"
          src={pj.neomSolarField}
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
            <li aria-current="page">{t.hero.industries}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
        </div>
      </header>

      <IndustriesNav lang={lang} sectors={t.sectors} quoteBtn={t.quoteBtn} />

      {t.sectors.map((sector, index) => {
        const isReversed = index % 2 === 1;
        const isAlt = index % 2 === 1;
        return (
          <section
            key={sector.id}
            id={sector.id}
            className={isAlt ? "sec alt" : "sec"}
          >
            <div className="c">
              <div className={isReversed ? "sb-blk sb-blk--rev rv" : "sb-blk rv"}>
                <div className="sb-blk__media">
                  <Image
                    className="rv-img"
                    src={sectorMedia[sector.photoKey]}
                    alt={sector.photoAlt}
                    sizes="(max-width: 900px) 100vw, 580px"
                    placeholder="blur"
                  />
                  <div className="sb-blk__fig">
                    <b>{sector.figure.val}</b>
                    <span>{sector.figure.label}</span>
                  </div>
                </div>
                <div className="sb-blk__copy">
                  <span className="label sb-blk__n">{sector.num}</span>
                  <h2 className="h2">{sector.title}</h2>
                  <p className="lead">{sector.lead}</p>
                  <div className="sb-blk__chips">
                    {sector.chips.map((chip) => (
                      <span className="cs-chip cs-chip--light" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  <div className="sb-blk__projects">
                    {sector.projects.map((p) => {
                      const linkUrl = p.slug
                        ? projectHref(lang, p.slug)
                        : p.href
                        ? href(lang, p.href)
                        : "#";
                      return (
                        <Link className="sb-blk__p" href={linkUrl} key={p.title}>
                          <Image
                            src={projectThumbs[p.photoKey]}
                            alt=""
                            width={88}
                            height={60}
                            style={{ objectFit: "cover", borderRadius: "var(--radius-sm)" }}
                          />
                          <div>
                            <span className="label">{p.client}</span>
                            <b>{p.title}</b>
                          </div>
                          <Icon name="arrow" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
