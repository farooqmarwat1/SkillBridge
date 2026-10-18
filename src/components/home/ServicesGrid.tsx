import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function ServicesGrid({ lang, t }: { lang: Locale; t: HomeContent["services"] }) {
  return (
    <section className="sec alt" id="services">
      <div className="c">
        <div className="head rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>
        <div className="svcs rv">
          {t.items.map((s) => (
            <Link className="svc" href={href(lang, routes[s.route])} key={s.title}>
              <span className="svc__ic"><Icon name={s.icon} /></span>
              <span className="label">{s.tag}</span>
              <h3 className="h4">{s.title}</h3>
              <p>{s.text}</p>
              <span className="link">{t.more} <Icon name="arrow" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
