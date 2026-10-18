import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { site } from "@/lib/media";
import { Icon } from "@/components/ui/Icon";

export function AboutIntro({ lang, t }: { lang: Locale; t: HomeContent }) {
  const a = t.about;
  return (
    <section className="sec">
      <div className="c">
        <div className="about">
          <div className="about__media rv">
            <Image className="about__main rv-img" src={site.teamFleetDesert} alt={a.mainAlt} placeholder="blur" sizes="(max-width: 900px) 100vw, 600px" />
            <Image className="about__sub" src={site.toolboxTalkSunrise} alt={a.subAlt} sizes="(max-width: 900px) 46vw, 280px" />
            <div className="about__badge"><b>{a.badge[0]}</b><span>{a.badge[1]}</span></div>
          </div>
          <div className="about__copy rv">
            <span className="eyebrow">{a.eyebrow}</span>
            <h2 className="h2">{a.title}</h2>
            <p className="lead">{a.lead}</p>
            <ul className="checks">
              {a.checks.map((c) => (
                <li key={c.title}>
                  <Icon name="check" />
                  <div><b>{c.title}</b><span>{c.text}</span></div>
                </li>
              ))}
            </ul>
            <Link className="link" href={href(lang, routes.about)}>
              {a.link} <Icon name="arrow" />
            </Link>
          </div>
        </div>

        <div className="stats rv">
          {t.stats.map((s) => (
            <div className="stat" key={s.label}>
              {/* The number counts up in CSS (@property --n); the text copy is for assistive tech. */}
              <span className="stat__n" style={{ "--to": s.n } as CSSProperties} aria-hidden="true" />
              <span className="sr-only">{s.n}</span>
              <span className="label">{s.label}</span>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
