import Link from "next/link";
import type { ContactContent } from "@/content/contact";
import { contact } from "@/content/site";
import { href, routes, type Locale } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { ContactForm } from "./ContactForm";

export function ContactPage({
  lang,
  t,
  tbc,
}: {
  lang: Locale;
  t: ContactContent;
  tbc: string;
}) {
  return (
    <>
      <header className="ct-head">
        <div className="c ct-head__in">
          <ol className="crumbs crumbs--dark">
            <li>
              <Link href={href(lang, routes.home)}>{t.hero.home}</Link>
            </li>
            <li aria-current="page">{t.hero.contact}</li>
          </ol>
          <span className="eyebrow">{t.hero.eyebrow}</span>
          <h1 className="display">{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
        </div>
      </header>

      {/* Contact cards */}
      <section className="ct-cards-sec">
        <div className="c">
          <div className="ct-cards">
            <div className="ct-card">
              <span className="foot__ic">
                <Icon name="phone" />
              </span>
              <span className="label">{t.cards.call.label}</span>
              <a
                className="data"
                href={`tel:${contact.phone.tel}`}
                dir="ltr"
              >
                {t.cards.call.p1}
              </a>
              <a
                className="data"
                href={`tel:${contact.phone2.tel}`}
                dir="ltr"
              >
                {t.cards.call.p2}
              </a>
            </div>

            <div className="ct-card">
              <span className="foot__ic">
                <Icon name="whatsapp" />
              </span>
              <span className="label">{t.cards.whatsapp.label}</span>
              <a
                className="data"
                href={contact.whatsapp.url}
                target="_blank"
                rel="noopener"
                dir="ltr"
              >
                {t.cards.whatsapp.phone}
              </a>
              <span className="ct-card__note">{t.cards.whatsapp.note}</span>
            </div>

            <div className="ct-card">
              <span className="foot__ic">
                <Icon name="doc" />
              </span>
              <span className="label">{t.cards.email.label}</span>
              <b>{t.cards.email.val}</b>
              <Tbc label={tbc} />
            </div>

            <div className="ct-card">
              <span className="foot__ic">
                <Icon name="clock" />
              </span>
              <span className="label">{t.cards.hours.label}</span>
              <b>{t.cards.hours.val}</b>
              <Tbc label={t.cards.hours.tbc} />
            </div>
          </div>
        </div>
      </section>

      {/* Form + side map & quick routes */}
      <section className="sec">
        <div className="c">
          <div className="ct-main">
            <ContactForm lang={lang} t={t.form} />

            <aside className="ct-side">
              <div
                className="ct-map"
                role="img"
                aria-label={t.side.mapAria}
              >
                <div className="ct-map__grid" aria-hidden="true" />
                <div className="ct-map__coast" aria-hidden="true" />
                <span className="ct-map__pin" aria-hidden="true">
                  <Icon name="pin" />
                </span>
                <span className="ct-map__ring" aria-hidden="true" />
                <div className="ct-map__card">
                  <span className="label">{t.side.headOffice}</span>
                  <b>{t.side.city}</b>
                  <span>{t.side.region}</span>
                  <Tbc label={t.side.addressTbc} />
                  <a
                    className="link"
                    href={t.side.mapsUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    {t.side.openMaps} <Icon name="arrowUpRight" />
                  </a>
                </div>
              </div>

              <div className="ct-routes">
                {t.side.routes.map((r) => (
                  <Link
                    key={r.title}
                    className="ct-route"
                    href={href(lang, routes[r.routeKey])}
                  >
                    <span className="svc__ic">
                      <Icon name={r.icon} />
                    </span>
                    <div>
                      <b>{r.title}</b>
                      <span>{r.sub}</span>
                    </div>
                    <Icon name="arrow" />
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
