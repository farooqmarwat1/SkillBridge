import Link from "next/link";
import type { HomeContent } from "@/content/home";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";

/* Every certificate is marked "To confirm" until the client sends copies. */
export function Certificates({ lang, t, tbc }: { lang: Locale; t: HomeContent["certs"]; tbc: string }) {
  return (
    <section className="certs-sec alt">
      <div className="c">
        <div className="certs__head rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <Link className="btn btn--ghost" href={href(lang, routes.contact)}>{t.docs}</Link>
        </div>
        <div className="certs rv">
          {t.items.map((c) => (
            <div className="cert" key={c.title}>
              <span className="cert__ic"><Icon name={c.icon} /></span>
              <b>{c.title}</b>
              <span>{c.text}</span>
              <Tbc label={tbc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
