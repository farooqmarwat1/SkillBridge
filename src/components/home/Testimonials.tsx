"use client";

import Image from "next/image";
import { useState } from "react";
import { fill, type HomeContent } from "@/content/home";
import { Icon } from "@/components/ui/Icon";

/* Placeholder quotes stay in [brackets] until the client sends real, approved testimonials. */
export function Testimonials({ t }: { t: HomeContent["testimonials"] }) {
  const [i, setI] = useState(0);
  const count = t.items.length;
  const cur = t.items[i];
  const go = (next: number) => setI((next + count) % count);

  return (
    <section className="sec alt">
      <div className="c">
        <div className="tst">
          <div className="tst__side rv">
            <span className="eyebrow">{t.eyebrow}</span>
            <h2 className="h2">{t.title}</h2>
            <p className="lead">{t.lead}</p>
            <div className="tst__nav">
              <button className="tst__arrow" type="button" aria-label={t.prev} onClick={() => go(i - 1)}>
                <Icon name="arrowBack" />
              </button>
              <button className="tst__arrow" type="button" aria-label={t.next} onClick={() => go(i + 1)}>
                <Icon name="arrow" />
              </button>
              <span className="label" dir="ltr">{i + 1} / {count}</span>
            </div>
          </div>
          <figure className="tst__card rv" aria-live="polite">
            <Image key={`ph-${i}`} className="tst__ph" src={cur.img} alt="" sizes="(max-width: 640px) 100vw, 300px" />
            <div className="tst__body">
              <svg className="tst__q" viewBox="0 0 48 36" aria-hidden="true">
                <path d="M0 36V20C0 8 7 1 19 0v7c-6 1-9 5-9 11h9v18zm29 0V20c0-12 7-19 19-20v7c-6 1-9 5-9 11h9v18z" />
              </svg>
              <blockquote className="tst__text" key={`q-${i}`}>{cur.text}</blockquote>
              <figcaption className="tst__who">
                <span className="tst__av" aria-hidden="true">{cur.init}</span>
                <div><b>{cur.name}</b><span className="label">{cur.role}</span></div>
                <span className="tst__tag">{cur.tag}</span>
              </figcaption>
              <div className="tst__dots">
                {t.items.map((_, n) => (
                  <button
                    key={n}
                    className="tst__dot"
                    type="button"
                    aria-label={fill(t.show, { n: n + 1 })}
                    aria-pressed={i === n}
                    onClick={() => setI(n)}
                  />
                ))}
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
