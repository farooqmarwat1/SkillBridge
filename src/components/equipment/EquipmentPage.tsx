import Image from "next/image";
import Link from "next/link";
import type { EquipmentContent } from "@/content/equipment";
import type { SiteContent } from "@/content/site";
import { site } from "@/lib/media";
import { href, projectHref, routes, type Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/home/CtaBand";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { FleetCatalogue } from "./FleetCatalogue";

export function EquipmentPage({ lang, t, sites, tbc, cta }: { lang: Locale; t: EquipmentContent; sites: string[]; tbc: string; cta: SiteContent["cta"] }) {
  return <>
    <header className="ph">
      <Image className="ph__img" src={site.fleetLineupDesert} alt="" sizes="100vw" placeholder="blur" priority />
      <div className="c ph__in">
        <ol className="crumbs"><li><Link href={href(lang, routes.home)}>{t.hero.home}</Link></li><li><Link href={href(lang, routes.services)}>{t.hero.services}</Link></li><li aria-current="page">{t.hero.title}</li></ol>
        <span className="eyebrow">{t.hero.eyebrow}</span>
        <h1 className="display ph__h">{t.hero.title}</h1>
        <p className="lead ph__lead">{t.hero.lead}</p>
        <div className="ph__facts">{t.hero.facts.map((fact) => <span className="ph__fact" key={fact.label}><b dir="auto">{fact.value}</b>{fact.label}</span>)}</div>
      </div>
    </header>

    <FleetCatalogue lang={lang} t={t} sites={sites} tbc={tbc} />

    <section className="sec"><div className="c">
      <div className="head rv"><div><span className="eyebrow">{t.projects.eyebrow}</span><h2 className="h2">{t.projects.title}</h2></div><p className="lead">{t.projects.lead}</p></div>
      <div className="fia rv">{t.projects.items.map((item) => <Link className="fia__item" href={projectHref(lang, item.slug)} key={item.slug}>
        <Image src={item.image} alt={item.alt} sizes="(max-width: 600px) 50vw, 25vw" placeholder="blur" /><div><span className="label">{item.label}</span><b>{item.title}</b></div>
      </Link>)}</div>
    </div></section>

    <section className="sec alt"><div className="c">
      <div className="head rv"><div><span className="eyebrow">{t.rental.eyebrow}</span><h2 className="h2">{t.rental.title}</h2></div><p className="lead">{t.rental.lead}</p></div>
      <div className="models3 rv">{t.rental.items.map((item, index) => <article className={index === 1 ? "mdl mdl--dark" : "mdl"} key={item.code}>
        <div className="mdl__top"><span className="label">{item.code}</span><Icon name={item.icon} /></div><h3 className="h3s">{item.title}</h3><p>{item.text}</p>
        <dl><div><dt className="label">{t.rental.bestFor}</dt><dd>{item.best}</dd></div><div><dt className="label">{item.secondLabel}</dt><dd>{item.secondValue}</dd></div></dl>
      </article>)}</div>
      <div className="fl-insp rv"><span className="cert__ic"><Icon name="shield" /></span><div><b className="h4">{t.rental.inspectionTitle}</b><p>{t.rental.inspectionText} <Tbc label={tbc} /></p></div></div>
    </div></section>
    <CtaBand lang={lang} t={cta} />
  </>;
}
