"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";

type Props = {
  src: string;
  poster: string;
  /** Labels for the pause/play button. Omit for a purely decorative background video. */
  controls?: { pause: string; play: string };
};

/* Muted, looping background video. It stays on its poster frame when the visitor prefers
   reduced motion, and the optional button lets anyone pause it. */
export function AutoVideo({ src, poster, controls }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (reduce.matches) video.pause();
      else video.play().catch(() => {});
    };
    apply();
    reduce.addEventListener("change", apply);
    return () => reduce.removeEventListener("change", apply);
  }, []);

  function toggle() {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  }

  return (
    <>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
      />
      {controls && (
        <button className="vidbtn" type="button" onClick={toggle}>
          <Icon name={paused ? "play" : "pause"} />
          {paused ? controls.play : controls.pause}
        </button>
      )}
    </>
  );
}
