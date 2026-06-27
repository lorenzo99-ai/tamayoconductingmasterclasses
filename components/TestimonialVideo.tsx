"use client";

import { useState } from "react";

// Facade YouTube player for vertical Shorts. Until the user clicks play, only a
// poster + custom burgundy play button show (no YouTube chrome / controls). On
// click it swaps in a privacy-enhanced youtube-nocookie embed that autoplays
// INLINE (never navigating away). 9:16 aspect ratio is preserved.
export default function TestimonialVideo({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const [playing, setPlaying] = useState(false);
  const title = `Testimonial video — ${name}`;

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[6px] bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer border-0 p-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/10 transition-colors group-hover:from-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent shadow-[0_6px_20px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-110">
            <span
              style={{
                borderStyle: "solid",
                borderWidth: "11px 0 11px 18px",
                borderColor: "transparent transparent transparent #f6f1e7",
                marginLeft: "4px",
              }}
            />
          </span>
        </button>
      )}
    </div>
  );
}
