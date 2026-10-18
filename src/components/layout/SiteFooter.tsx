import Image from "next/image";
import Link from "next/link";
import { contact, type SiteContent } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { logo } from "@/lib/media";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { OtherLangLink } from "./LangSwitch";

export function SiteFooter({ lang, t }: { lang: Locale; t: SiteContent }) {
  const f = t.footer;
  // The footer carries the company's legal name in the other language as well.
  const otherName =
    lang === "ar" ? (
      <p className="foot__ar" lang="en" dir="ltr">
        {contact.legalNameEn}
      </p>
    ) : (
      <p className="foot__ar" lang="ar" dir="rtl">
        {contact.legalNameAr}
      </p>
    );

  return (
    <>
      <div className="hazard" aria-hidden="true" />
      <footer className="foot">
        <div className="c">
          <div className="foot__contact">
            <div className="foot__ci">
              <span className="foot__ic"><Icon name="phone" /></span>
              <div>
                <span className="label">{f.callUs}</span>
                <a className="data" href={`tel:${contact.phone.tel}`} dir="ltr"><b>{contact.phone.display}</b></a>
              </div>
            </div>
            <div className="foot__ci">
              <span className="foot__ic"><Icon name="phone" /></span>
              <div>
                <span className="label">{f.alsoOn}</span>
                <a className="data" href={`tel:${contact.phone2.tel}`} dir="ltr"><b>{contact.phone2.display}</b></a>
              </div>
            </div>
            <div className="foot__ci">
              <span className="foot__ic"><Icon name="pin" /></span>
              <div>
                <span className="label">{f.headOffice}</span>
                <b>{f.headOfficeShort}</b>
              </div>
            </div>
            <Link className="btn btn--hivis" href={href(lang, routes.quote)}>
              {t.quote} <Icon name="arrow" />
            </Link>
          </div>

          <div className="foot__g">
            <div className="foot__brand">
              <span className="plate-logo">
                <Image src={logo} alt={t.brand} />
              </span>
              {otherName}
              <p className="foot__tag">{f.tagline}</p>
              <div className="foot__soc">
                <a className="foot__sq" href={contact.whatsapp.url} target="_blank" rel="noopener" aria-label={f.whatsapp}>
                  <Icon name="whatsapp" />
                </a>
                <a className="btn btn--sm btn--ghost-inv" href={contact.profilePdf} target="_blank" rel="noopener">
                  <Icon name="download" /> {f.profile}
                </a>
              </div>
            </div>
            <div>
              <h3>{f.servicesTitle}</h3>
              <ul>
                {f.services.map((l) => (
                  <li key={l.key}><Link href={href(lang, routes[l.key])}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{f.companyTitle}</h3>
              <ul>
                {f.company.map((l) => (
                  <li key={l.key}><Link href={href(lang, routes[l.key])}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{f.officeTitle}</h3>
              <ul>
                <li>{f.address[0]}<br />{f.address[1]}</li>
                <li className="data foot__num" dir="ltr">{contact.phone.display}</li>
                <li className="data foot__num" dir="ltr">{contact.phone2.display}</li>
                <li>{f.cr} <Tbc label={t.tbc} /></li>
                <li>{f.vat} <Tbc label={t.tbc} /></li>
              </ul>
            </div>
          </div>

          <div className="foot__legal">
            <span>© {new Date().getFullYear()} {f.rights}</span>
            <span>
              <Link href={href(lang, "/privacy")}>{f.privacy}</Link> · <Link href={href(lang, "/terms")}>{f.terms}</Link> · <OtherLangLink lang={lang} />
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
