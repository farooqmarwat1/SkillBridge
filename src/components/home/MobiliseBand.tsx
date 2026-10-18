import type { HomeContent } from "@/content/home";
import { video } from "@/lib/media";
import { AutoVideo } from "@/components/ui/AutoVideo";

export function MobiliseBand({ t }: { t: HomeContent["mobilise"] }) {
  return (
    <section className="band on-dark">
      <AutoVideo src={video.desert.src} poster={video.desert.poster} />
      <div className="c sec">
        <div className="head head--flush rv">
          <div>
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
          </div>
          <p className="lead">{t.lead}</p>
        </div>
        <ol className="steps rv">
          {t.steps.map((s, i) => (
            <li className="step" key={s.title}>
              <span className="step__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
