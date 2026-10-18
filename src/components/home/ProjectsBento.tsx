import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, projectHref, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

/** The five confirmed projects; each card opens its case study. */
export function ProjectsBento({ lang, t }: { lang: Locale; t: HomeContent["projects"] }) {
  return (
    <section className="sec" id="projects">
      <div className="c">
        <div className="head rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <div className="head__aside">
            <p className="lead">{t.lead}</p>
            <Link className="link" href={href(lang, routes.projects)}>
              {t.all} <Icon name="arrow" />
            </Link>
          </div>
        </div>
        <div className="pbento rv">
          {t.items.map((p, i) => (
            <Link className="pcard" href={projectHref(lang, p.slug)} key={p.slug}>
              <div className="pcard__ph">
                <Image
                  src={p.img}
                  alt={p.alt}
                  placeholder="blur"
                  sizes={i === 0 ? "(max-width: 600px) 100vw, (max-width: 1100px) 100vw, 640px" : "(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 320px"}
                />
                <span className="proj__tag">{p.tag}</span>
              </div>
              <div className="pcard__body">
                <span className="label">{p.client}</span>
                <h3 className="h4">{p.title}</h3>
                <div className="pcard__fig"><b>{p.fig}</b><span>{p.figText}</span></div>
                <span className="link">{t.view} <Icon name="arrow" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
