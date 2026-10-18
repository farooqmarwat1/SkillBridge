import type { HomeContent } from "@/content/home";
import { contact } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { FaqList } from "./FaqList";

export function FaqSection({ t }: { t: HomeContent["faq"] }) {
  return (
    <section className="sec">
      <div className="c">
        <div className="faq">
          <div className="faq__side rv">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
            <p className="lead">{t.lead}</p>
            <a className="faq__call" href={`tel:${contact.phone.tel}`}>
              <span className="foot__ic"><Icon name="phone" /></span>
              <div><span className="label">{t.call}</span><b className="data" dir="ltr">{contact.phone.display}</b></div>
            </a>
          </div>
          <FaqList items={t.items} />
        </div>
      </div>
    </section>
  );
}
