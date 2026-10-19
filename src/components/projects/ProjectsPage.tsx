import Image from "next/image";
import Link from "next/link";
import type { ProjectsContent } from "@/content/projects";
import type { SiteContent } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { projects as pj } from "@/lib/media";
import { CtaBand } from "@/components/home/CtaBand";
import { ProjectsList } from "./ProjectsList";

export function ProjectsPage({
  lang,
  t,
  cta,
}: {
  lang: Locale;
  t: ProjectsContent;
  cta: SiteContent["cta"];
}) {
  return (
    <>
      <header className="ph">
        <Image
          className="ph__img"
          src={pj.neomJcbBackhoes}
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
            <li aria-current="page">{t.hero.projects}</li>
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

      <ProjectsList lang={lang} t={t} />

      <CtaBand lang={lang} t={cta} />
    </>
  );
}
