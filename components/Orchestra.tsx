import ImageFrame from "./ImageFrame";
import ApplyButton from "./ApplyButton";
import { ORCHESTRA_PHOTO } from "@/lib/site";

export default function Orchestra() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-[84px]">
        <div className="mx-auto mb-9 max-w-[680px] text-center">
          <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
            The Orchestra
          </div>
          <h2 className="m-0 text-[clamp(34px,6vw,46px)] font-extrabold leading-none tracking-[-0.02em]">
            Berliner Symphoniker
          </h2>
        </div>

        <ImageFrame
          src={ORCHESTRA_PHOTO.src}
          alt={ORCHESTRA_PHOTO.alt}
          aspect="5 / 2"
          placeholder="Photo of the orchestra in the Philharmonie"
          sizes="(max-width: 1200px) 100vw, 1136px"
          className="mb-10"
        />

        <p className="mx-auto mb-[30px] max-w-[860px] text-center font-serif text-[22px] leading-[1.5] text-[#3a3326]">
          For over five decades, the Berlin Symphony Orchestra has been an
          integral part of Berlin&apos;s musical and cultural life, enriching the
          German orchestral scene; since 1990, it has been the orchestra for all
          Berliners.
        </p>

        <div className="mx-auto max-w-[980px] text-[15.5px] leading-[1.65] text-body md:columns-2 md:gap-12">
          <p className="m-0 mb-4">
            In addition to their popular and long-established symphony concerts
            at the{" "}
            <strong className="font-bold text-ink">Berlin Philharmonie</strong>,
            the orchestra performs throughout Berlin and the surrounding area —
            regular guests at venues including the Konzerthaus Berlin, the Berlin
            University of the Arts, Berlin Cathedral, the Kulturbrauerei, and
            Chorin Abbey.
          </p>
          <p className="m-0 mb-4">
            With guest performances across Europe and tours to North and South
            America, Africa, and Asia, as well as appearances at international
            festivals — including in France, Italy, Austria, Spain, and Israel —
            the orchestra enjoys worldwide success and sees itself as a{" "}
            <em className="font-serif text-accent">
              cultural ambassador for Berlin
            </em>
            .
          </p>
          <p className="m-0 mb-4">
            Alongside a wide-ranging repertoire of classical and popular concert
            works, its programming also embraces special rarities — unknown and
            forgotten works as well as contemporary compositions.
          </p>
          <p className="m-0">
            Music education has always been a particular focus and a hallmark of
            the orchestra. The Berlin Symphony Orchestra was the first in Berlin
            to develop a profile in music education — through school concerts and
            concerts for children and families — and to establish and promote
            young talent on a long-term basis.
          </p>
        </div>

        <div className="mt-[54px] text-center">
          <ApplyButton variant="primary-lg" href="#participation" external={false}>
            Apply Now →
          </ApplyButton>
        </div>
      </div>
    </section>
  );
}
