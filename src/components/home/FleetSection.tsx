import type { HomeContent } from "@/content/home";
import type { Locale } from "@/lib/i18n";
import { FleetPreview } from "./FleetPreview";

export function FleetSection({ lang, t, tbc, machinesPrefix }: { lang: Locale; t: HomeContent["fleet"]; tbc: string; machinesPrefix: string }) {
  return (
    <section className="sec alt" id="fleet">
      <div className="c">
        <div className="head rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>
        <FleetPreview lang={lang} t={t} tbc={tbc} machinesPrefix={machinesPrefix} />
      </div>
    </section>
  );
}
