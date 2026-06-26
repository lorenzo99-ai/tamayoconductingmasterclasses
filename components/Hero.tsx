import Image from "next/image";
import ApplyButton from "./ApplyButton";
import { EVENT } from "@/lib/site";

const chips = ["Berlin", "October 5–8, 2026", "8 Spots Only"];

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-[640px] items-end justify-center overflow-hidden px-8 pb-7 pt-20 text-center"
    >
      <Image
        src="/images/IMG_0853.jpg"
        alt="Participants of a previous masterclass with Maestro Tamayo and the Berliner Symphoniker"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 38%" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,22,18,0.62) 0%, rgba(26,22,18,0.48) 42%, rgba(26,22,18,0.78) 100%)",
        }}
      />
      <div className="relative max-w-[880px] text-paper">
        <div className="mb-[22px] text-[13px] font-bold uppercase tracking-[0.28em] text-rose">
          International Conducting Masterclass
        </div>
        <h1 className="m-0 mb-[14px] text-[clamp(40px,8vw,70px)] font-extrabold leading-[1.0] tracking-[-0.025em] text-white">
          Prof. Arturo Tamayo
          <br />
          <span className="font-semibold text-[#f0e6d8]">
            &amp; the Berliner Symphoniker Orchestra
          </span>
        </h1>
        {/* Large bottom margin pushes the CTAs toward the bottom so neither the
            headline/chips nor the buttons cover the participants' faces. */}
        <div className="mb-24 inline-flex flex-wrap items-center justify-center gap-[14px] md:mb-[200px]">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-[100px] border border-paper/40 px-[18px] py-2 text-[13.5px] font-bold uppercase tracking-[0.08em] text-paper"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ApplyButton
            variant="primary-lg"
            href="#participation"
            external={false}
            className="!px-[34px] !py-4 !text-base !shadow-cta"
          >
            Apply Now →
          </ApplyButton>
          <ApplyButton variant="ghost-light" href="#repertoire" external={false}>
            Explore the Repertoire
          </ApplyButton>
        </div>
        <div className="mt-[22px] text-[13px] text-[#d8cab8]">
          Application deadline — {EVENT.deadline}
        </div>
      </div>
    </header>
  );
}
