import { contact, type SiteContent } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { LangSwitch } from "./LangSwitch";

export function UtilityBar({ lang, t }: { lang: Locale; t: SiteContent }) {
  return (
    <div className="util">
      <div className="c">
        <div className="util__g">
          <a className="data" href={`tel:${contact.phone.tel}`} dir="ltr">
            {contact.phone.display}
          </a>
          <a className="data util__hide" href={`tel:${contact.phone2.tel}`} dir="ltr">
            {contact.phone2.display}
          </a>
          <span className="util__hide">{t.util.office}</span>
        </div>
        <div className="util__g">
          <a className="util__hide" href={contact.profilePdf} target="_blank" rel="noopener">
            {t.util.profile}
          </a>
          <LangSwitch lang={lang} label={t.util.language} />
        </div>
      </div>
    </div>
  );
}
