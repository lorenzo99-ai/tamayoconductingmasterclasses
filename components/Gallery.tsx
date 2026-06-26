import Image from "next/image";

const portraits = [
  { src: "/images/IMG_0580.jpg", alt: "Masterclass moment" },
  { src: "/images/IMG_0612.jpg", alt: "Masterclass moment" },
  { src: "/images/IMG_0634.jpg", alt: "Masterclass moment" },
  { src: "/images/IMG_0703.jpg", alt: "Masterclass moment" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1200px] px-8 py-[84px]">
      <div className="mx-auto mb-11 max-w-[760px] text-center">
        <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Gallery
        </div>
        <h2 className="m-0 text-[clamp(30px,5vw,40px)] font-extrabold leading-[1.08] tracking-[-0.02em]">
          Photos from previous masterclasses in Berlin
        </h2>
      </div>
      <div className="flex flex-col gap-[18px]">
        <div className="relative w-full overflow-hidden rounded-[4px] border border-ink/[0.12]">
          <Image
            src="/images/IMG_0853.jpg"
            alt="Group photo with the Maestro and the Berliner Symphoniker"
            width={1136}
            height={711}
            sizes="(max-width: 1200px) 100vw, 1136px"
            className="h-auto w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {portraits.map((p) => (
            <div
              key={p.src}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-[4px] border border-ink/[0.12]"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
