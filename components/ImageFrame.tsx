import Image from "next/image";

// Renders a real optimized image when `src` is set, otherwise an on-brand
// styled placeholder frame with the given prompt text. Swap by setting `src`
// in lib/site.ts once the client supplies the asset.
export default function ImageFrame({
  src,
  alt,
  aspect,
  placeholder,
  sizes = "100vw",
  className = "",
}: {
  src: string | null;
  alt: string;
  aspect: string; // e.g. "4 / 5" or "5 / 2"
  placeholder: string;
  sizes?: string;
  className?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative w-full overflow-hidden rounded-[4px] border border-ink/[0.16] ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 rounded-[4px] border border-dashed border-ink/[0.25] bg-card/60 px-6 text-center ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`${alt} (placeholder)`}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8a8170"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <div className="text-[13px] font-semibold text-muted">{placeholder}</div>
    </div>
  );
}
