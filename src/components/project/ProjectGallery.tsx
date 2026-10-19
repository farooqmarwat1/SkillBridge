"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Icon } from "@/components/ui/Icon";

export function ProjectGallery({
  photos,
  lead,
  eyebrow,
  title,
}: {
  photos: { image: StaticImageData; alt: string }[];
  lead: string;
  eyebrow: string;
  title: string;
}) {
  const [index, setIndex] = useState(0);

  if (!photos.length) return null;

  const current = photos[index] || photos[0];

  const prev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <section className="sec alt">
      <div className="c">
        <div className="head rv">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="h2">{title}</h2>
          </div>
          <p className="lead">{lead}</p>
        </div>

        <div className="gal">
          <figure className="gal__main">
            <Image
              src={current.image}
              alt={current.alt}
              fill
              sizes="(max-width: 600px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority={index === 0}
            />
            <figcaption className="gal__cap">
              <span className="label">
                {index + 1} / {photos.length}
              </span>
              <span>{current.alt}</span>
            </figcaption>
            <button
              className="gal__nav gal__nav--prev"
              type="button"
              aria-label="Previous photo"
              onClick={prev}
            >
              <Icon name="arrowBack" />
            </button>
            <button
              className="gal__nav gal__nav--next"
              type="button"
              aria-label="Next photo"
              onClick={next}
            >
              <Icon name="arrow" />
            </button>
          </figure>

          <div className="gal__thumbs">
            {photos.map((p, idx) => (
              <button
                key={p.alt + idx}
                className="gal__th"
                type="button"
                aria-label={`Photo ${idx + 1}`}
                aria-pressed={index === idx}
                onClick={() => setIndex(idx)}
              >
                <Image
                  src={p.image}
                  alt=""
                  width={160}
                  height={120}
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
