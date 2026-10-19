import Link from "next/link";
import type { QuoteWizardContent } from "@/content/quote";
import { href, routes, type Locale } from "@/lib/i18n";
import { QuoteWizard } from "./QuoteWizard";

export function QuotePage({
  lang,
  t,
}: {
  lang: Locale;
  t: QuoteWizardContent;
}) {
  return (
    <>
      <header className="ct-head ct-head--short">
        <div className="c ct-head__in">
          <ol className="crumbs crumbs--dark">
            <li>
              <Link href={href(lang, routes.home)}>{t.hero.home}</Link>
            </li>
            <li aria-current="page">{t.hero.quote}</li>
          </ol>
          <h1 className="display">{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
        </div>
      </header>

      <section className="qz-sec">
        <div className="c">
          <QuoteWizard lang={lang} t={t} />
        </div>
      </section>
    </>
  );
}
