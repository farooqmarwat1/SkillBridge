import Image from "next/image";
import type { HomeContent } from "@/content/home";
import { site } from "@/lib/media";
import { RolePicker } from "./RolePicker";

export function ManpowerSection({ t, quote }: { t: HomeContent["manpower"]; quote: HomeContent["quote"] }) {
  return (
    <section className="sec">
      <div className="c">
        <div className="mp">
          <div className="mp__copy rv">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
            <p className="lead">{t.lead}</p>
            <Image className="mp__photo rv-img" src={site.rebarInspectionTeam} alt={t.photoAlt} placeholder="blur" sizes="(max-width: 900px) 100vw, 560px" />
          </div>
          <div className="rv">
            <RolePicker t={t} rolesPrefix={quote.rolesPrefix} />
            <div className="models">
              {t.models.map((m) => (
                <div className="model" key={m.title}><b>{m.title}</b><span>{m.text}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
