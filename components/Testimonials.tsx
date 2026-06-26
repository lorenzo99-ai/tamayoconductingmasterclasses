import VideoFrame from "./VideoFrame";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-8 py-[84px]">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-rose">
            Testimonials
          </div>
          <h2 className="m-0 text-[clamp(30px,5vw,42px)] font-extrabold leading-[1.08] tracking-[-0.02em] text-white">
            What participants from previous masterclasses say about us
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[5px] border border-paper/[0.14] bg-paper/[0.05] px-[30px] py-8"
            >
              <div className="mx-[-30px] mb-[26px] mt-[-32px]">
                <VideoFrame
                  url={t.videoUrl}
                  label="Video placeholder — add link"
                  size="sm"
                  className="!rounded-none !border-0 !border-b !border-paper/[0.12]"
                />
              </div>
              <div className="h-6 font-serif text-[42px] leading-[0.6] text-accent">
                &ldquo;
              </div>
              <p className="m-0 mb-[22px] font-serif text-[18px] italic leading-[1.5] text-[#f0e6d8]">
                {t.quote}
              </p>
              <div className="text-sm font-bold text-white">{t.name}</div>
              <div className="mt-[2px] text-[13px] text-[#a99c8a]">{t.meta}</div>
            </div>
          ))}
        </div>
        <p className="m-0 mt-7 text-center text-[13px] text-muted">
          Replace the videos and quotes with real participant testimonials.
        </p>
      </div>
    </section>
  );
}
