import type { HomeContent } from "@/content/home";
import { contact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { Tbc } from "@/components/ui/Tbc";
import { QuoteForm } from "./QuoteForm";

export function QuoteSection({ t, sites, tbc }: { t: HomeContent["quote"]; sites: string[]; tbc: string }) {
  return (
    <section className="sec alt" id="quote">
      <div className="c">
        <div className="qf">
          <aside className="qf__side rv">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
            <p className="qf__lead">{t.lead}</p>
            <ul className="qf__list">
              <li>
                <span className="qf__ic"><Icon name="phone" /></span>
                <div>
                  <span className="label">{t.call}</span>
                  <a className="data" href={`tel:${contact.phone.tel}`} dir="ltr"><b>{contact.phone.display}</b></a>
                  <a className="data" href={`tel:${contact.phone2.tel}`} dir="ltr"><b>{contact.phone2.display}</b></a>
                </div>
              </li>
              <li>
                <span className="qf__ic"><Icon name="whatsapp" /></span>
                <div>
                  <span className="label">{t.whatsapp}</span>
                  <a className="data" href={contact.whatsapp.url} target="_blank" rel="noopener" dir="ltr"><b>{contact.whatsapp.display}</b></a>
                </div>
              </li>
              <li>
                <span className="qf__ic"><Icon name="pin" /></span>
                <div>
                  <span className="label">{t.office}</span>
                  <b>{t.officeLines[0]}</b>
                  <span className="qf__muted">{t.officeLines[1]}</span>
                </div>
              </li>
              <li>
                <span className="qf__ic"><Icon name="clock" /></span>
                <div>
                  <span className="label">{t.hours}</span>
                  <b><Tbc label={tbc} /></b>
                </div>
              </li>
            </ul>
            <a className="btn btn--ghost-inv" href={contact.profilePdf} target="_blank" rel="noopener">
              {t.profile}
            </a>
          </aside>
          <div className="qf__card rv">
            <QuoteForm t={t} sites={sites} />
          </div>
        </div>
      </div>
    </section>
  );
}
