import type { CSSProperties } from "react";
import type { HomeContent } from "@/content/home";
import { video } from "@/lib/media";
import { AutoVideo } from "@/components/ui/AutoVideo";
import { Icon } from "@/components/ui/Icon";
import { QuickRequest } from "./QuickRequest";

/* Full-bleed site video with the headline over a dark gradient. Key figures count up on the
   right and the quick request is docked along the base. */
export function Hero({ t }: { t: HomeContent }) {
  const h = t.hero;
  return (
    <section className="hero on-dark">
      <div className="hero__bg">
        <AutoVideo src={video.excavator.src} poster={video.excavator.poster} controls={{ pause: h.pause, play: h.play }} />
      </div>

      <div className="c hero__top">
        <span className="hero__tag">
          <span className="hero__dot" aria-hidden="true" />
          <span className="label">{h.footage} · {h.caption}</span>
        </span>
      </div>

      <div className="c hero__in">
        <div className="hero__copy">
          <span className="eyebrow">{h.eyebrow}</span>
          <h1 className="display">
            <span className="ln"><span>{h.lines[0]}</span></span>
            <span className="ln"><span>{h.lines[1]}</span></span>
            <span className="ln"><span><mark>{h.lines[2]}</mark></span></span>
          </h1>
          <p className="lead fade">{h.lead}</p>
          <div className="hero__ctas fade2">
            <a className="btn btn--hivis btn--lg" href="#quote">
              {h.quote} <Icon name="arrow" />
            </a>
            <a className="btn btn--ghost-inv btn--lg" href="#services">
              {h.services}
            </a>
          </div>
        </div>

        <div className="hero__aside">
          {h.facts.map((f) => (
            <div className="hfact" key={f.label}>
              {/* Counts up in CSS (@property --n); the text copy is for assistive tech. */}
              <span className="hfact__n" style={{ "--to": Number(f.n) } as CSSProperties} aria-hidden="true" />
              <span className="sr-only">{f.n}</span>
              <span className="label">{f.label}</span>
            </div>
          ))}
          <p className="hero__loc label">
            <span>{h.place}</span>
            <span dir="ltr">27.0° N · 49.6° E</span>
          </p>
        </div>
      </div>

      <div className="c hero__dock">
        <QuickRequest t={t.quick} sites={t.sites} />
      </div>
    </section>
  );
}
