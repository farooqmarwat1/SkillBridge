import Link from "next/link";
import { contact, type SiteContent } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function CtaBand({ lang, t }: { lang: Locale; t: SiteContent["cta"] }) {
  return (
    <>
      <div className="hazard" aria-hidden="true" />
      <section className="cta">
        <div className="c">
          <div>
            <h2 className="h2">{t.title}</h2>
            <p>{t.text}</p>
          </div>
          <div className="cta__act">
            <div>
              <Link className="btn btn--ink btn--lg" href={href(lang, routes.quote)}>
                {t.quote} <Icon name="arrow" />
              </Link>
              <a className="btn btn--ghost btn--lg" href={contact.whatsapp.url} target="_blank" rel="noopener">
                {t.whatsapp}
              </a>
            </div>
            <div className="cta__nums">
              <a className="data" href={`tel:${contact.phone.tel}`} dir="ltr">{contact.phone.display}</a>
              <a className="data" href={`tel:${contact.phone2.tel}`} dir="ltr">{contact.phone2.display}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
