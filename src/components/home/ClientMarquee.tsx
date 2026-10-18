import type { HomeContent } from "@/content/home";

/* Names are listed twice so the track can loop seamlessly; the copy is hidden from screen readers. */
export function ClientMarquee({ t }: { t: HomeContent["clients"] }) {
  return (
    <div className="clients">
      <div className="c">
        <span className="label clients__lbl">{t.label}</span>
        <div className="clients__vp">
          <div className="clients__tr">
            {t.names.map((n) => (
              <span key={n}>{n}</span>
            ))}
            {t.names.map((n) => (
              <span key={`${n}-copy`} aria-hidden="true">{n}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
