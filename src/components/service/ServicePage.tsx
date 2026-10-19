import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceContent } from "@/content/service-manpower";
import type { HomeContent } from "@/content/home";
import type { SiteContent } from "@/content/site";
import { contact } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { FaqList } from "@/components/home/FaqList";
import { CtaBand } from "@/components/home/CtaBand";
import { QuoteSection } from "@/components/home/QuoteSection";

/** Shared service layout. A service can insert its own catalogue and request card. */
export function ServicePage({ lang, t, tbc, requestCard, directory, quote, sites, cta }: {
  lang: Locale;
  t: ServiceContent;
  tbc: string;
  requestCard?: ReactNode;
  directory?: ReactNode;
  quote: HomeContent["quote"];
  sites: string[];
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image className="ph__img" src={t.hero.image} alt="" sizes="100vw" placeholder="blur" priority />
        <div className="c ph__in">
          <ol className="crumbs">
            <li><Link href={href(lang, routes.home)}>{t.hero.home}</Link></li>
            <li><Link href={href(lang, routes.services)}>{t.hero.services}</Link></li>
            <li aria-current="page">{t.hero.title}</li>
          </ol>
          <span className="eyebrow">{t.hero.index}</span>
          <h1 className="display ph__h">{t.hero.title}</h1>
          <p className="lead ph__lead">{t.hero.lead}</p>
          <div className="ph__facts">
            {t.hero.facts.map((fact) => <span className="ph__fact" key={fact.label}><b dir="ltr">{fact.value}</b>{fact.label}</span>)}
          </div>
          <div className="hero__ctas">
            <a className="btn btn--hivis btn--lg" href={`#${t.hero.chooseAnchor}`}>{t.hero.choose} <Icon name="arrow" /></a>
            <a className="btn btn--ghost-inv btn--lg" href={contact.profilePdf} target="_blank" rel="noopener">{t.hero.profile}</a>
          </div>
        </div>
      </header>

      <nav className="subnav" aria-label={t.hero.services}>
        <div className="c subnav__in">
          {t.nav.map((item, index) => <a className={index === 0 ? "is-on" : undefined} href={`#${item.id}`} key={item.id}>{item.label}</a>)}
          <a className="btn btn--sm subnav__cta" href="#quote">{t.request.title}</a>
        </div>
      </nav>

      <section className="sec" id="overview"><div className="c"><div className="ov">
        <div className="ov__main">
          <div className="ov__head rv"><span className="eyebrow">{t.overview.eyebrow}</span><h2 className="h2">{t.overview.title}</h2><p className="lead">{t.overview.lead}</p></div>
          <div className="incl rv">
            {t.overview.includes.map((item, index) => <div className="incl__item" key={item.title}>
              <span className="incl__n" dir="ltr">{String(index + 1).padStart(2, "0")}</span>
              <div><b>{item.title}</b><p>{item.text} {item.tbc && <Tbc label={tbc} />}</p></div>
            </div>)}
          </div>
          <figure className="ov__fig rv">
            <Image className="rv-img" src={t.overview.image} alt={t.overview.imageAlt} sizes="(max-width: 1000px) 100vw, 760px" placeholder="blur" />
            <figcaption className="label">{t.overview.caption}</figcaption>
          </figure>
        </div>
        {requestCard}
      </div></div></section>

      {directory}

      <section className="sec" id="models"><div className="c">
        <div className="head rv"><div><span className="eyebrow">{t.models.eyebrow}</span><h2 className="h2">{t.models.title}</h2></div><p className="lead">{t.models.lead}</p></div>
        <div className="models3 rv">{t.models.items.map((model, index) => <article className={index === 1 ? "mdl mdl--dark" : "mdl"} key={model.code}>
          <div className="mdl__top"><span className="label">{model.code}</span><Icon name={model.icon} /></div>
          <h3 className="h3s">{model.title}</h3><p>{model.text}</p>
          <dl><div><dt className="label">{t.models.length}</dt><dd>{model.length}</dd></div><div><dt className="label">{t.models.best}</dt><dd>{model.best}</dd></div></dl>
        </article>)}</div>
      </div></section>

      <section className="sec alt" id="process"><div className="c">
        <div className="head rv"><div><span className="eyebrow">{t.process.eyebrow}</span><h2 className="h2">{t.process.title}</h2></div><p className="lead">{t.process.lead}</p></div>
        <ol className="tl rv">{t.process.steps.map((step, index) => <li className="tl__step" key={step.title}>
          <span className="tl__dot" dir="ltr">{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p>
        </li>)}</ol>
      </div></section>

      <section className="docs" id="docs"><div className="c docs__in">
        <div className="docs__copy rv"><span className="eyebrow">{t.documents.eyebrow}</span><h2 className="h2">{t.documents.title}</h2><p className="lead">{t.documents.lead} <Tbc label={tbc} /></p></div>
        <ul className="docs__list rv">{t.documents.items.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
      </div></section>

      <section className="sec"><div className="c">
        <div className="head rv"><div><span className="eyebrow">{t.industries.eyebrow}</span><h2 className="h2">{t.industries.title}</h2></div><p className="lead">{t.industries.lead}</p></div>
        <div className="indrow rv">{t.industries.items.map((industry) => <Link className="indcard" href={href(lang, routes.industries)} key={industry.title}>
          <Image src={industry.image} alt={industry.alt} sizes="(max-width: 600px) 50vw, 20vw" placeholder="blur" /><span>{industry.title}</span>
        </Link>)}</div>
        <div className="rel"><span className="eyebrow">{t.related.eyebrow}</span><div className="rel__grid rv">{t.related.items.map((item) => <Link className="relc" href={href(lang, routes[item.route])} key={item.route}>
          <Image src={item.image} alt={item.alt} sizes="120px" /><div><span className="label">{item.label}</span><b className="h4">{item.title}</b><span className="link">{t.related.view} <Icon name="arrow" /></span></div>
        </Link>)}</div></div>
      </div></section>

      <section className="sec alt" id="svc-faq"><div className="c"><div className="faq">
        <div className="faq__side rv"><span className="eyebrow">{t.faq.eyebrow}</span><h2 className="h2">{t.faq.title}</h2><p className="lead">{t.faq.lead}</p></div>
        <FaqList items={t.faq.items} />
      </div></div></section>

      <CtaBand lang={lang} t={cta} />
      <QuoteSection t={quote} sites={sites} tbc={tbc} />
    </>
  );
}
