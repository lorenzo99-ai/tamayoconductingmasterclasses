import TestimonialVideo from "./TestimonialVideo";
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
        <div className="flex flex-wrap justify-center gap-7">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex w-full max-w-[330px] flex-col rounded-[8px] border border-paper/10 bg-paper/[0.04] p-5"
            >
              <TestimonialVideo id={t.id} name={t.name} />
              <p className="mb-0 mt-5 font-serif text-[16.5px] italic leading-[1.55] text-[#f0e6d8]">
                {t.quote}
              </p>
              <div className="mt-5 border-t border-paper/10 pt-4">
                <div className="text-[15px] font-bold text-white">{t.name}</div>
                <div className="mt-[3px] text-[13px] text-rose">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
