// Renders a 16:9 video embed when `url` is set, otherwise an on-brand
// play-button placeholder. Set the embed URL in lib/site.ts once supplied.
export default function VideoFrame({
  url,
  label,
  size = "lg",
  className = "",
}: {
  url: string | null;
  label: string;
  size?: "lg" | "sm";
  className?: string;
}) {
  if (url) {
    return (
      <div
        className={`relative aspect-video overflow-hidden rounded-[5px] border border-paper/[0.14] ${className}`}
      >
        <iframe
          src={url}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  const tri = size === "lg" ? 62 : 54;
  const bw = size === "lg" ? "11px 0 11px 18px" : "9px 0 9px 15px";
  const ml = size === "lg" ? "4px" : "3px";

  return (
    <div
      className={`relative flex aspect-video flex-col items-center justify-center gap-[14px] rounded-[5px] border border-paper/[0.14] ${className}`}
      style={{ background: "linear-gradient(135deg,#3a342c,#211d18)" }}
      role="img"
      aria-label={`${label} (placeholder)`}
    >
      <div
        className="flex items-center justify-center rounded-full bg-accent"
        style={{ width: tri, height: tri }}
      >
        <span
          className="inline-block"
          style={{
            borderStyle: "solid",
            borderWidth: bw,
            borderColor: "transparent transparent transparent #f6f1e7",
            marginLeft: ml,
          }}
        />
      </div>
      <div className="text-[13px] font-semibold tracking-[0.04em] text-[#a99c8a]">
        {label}
      </div>
    </div>
  );
}
