import Image from "next/image";
import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { site } from "@/lib/media";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";

export function HseIntro({ lang, t, tbc }: { lang: Locale; t: HomeContent["hse"]; tbc: string }) {
  return (
    <section className="sec" id="hse">
      <div className="c">
        <div className="hse">
          <div className="hse__media rv">
            <Image className="rv-img" src={site.rebarHarnessWalkway} alt={t.imgAlt} placeholder="blur" sizes="(max-width: 900px) 100vw, 600px" />
            <div className="hse__tag"><b>{t.tag[0]}</b><span className="label">{t.tag[1]}</span></div>
          </div>
          <div className="hse__copy rv">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
            <p className="lead">{t.lead}</p>
            <div className="pillars">
              {t.pillars.map((p) => (
                <div className="pillar" key={p.title}><b>{p.title}</b><span>{p.text}</span></div>
              ))}
            </div>
            <div className="regs">
              {t.regs.map((r) => (
                <span className="label" key={r}>{r} <Tbc label={tbc} /></span>
              ))}
            </div>
            <Link className="link" href={href(lang, routes.hse)}>
              {t.link} <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
