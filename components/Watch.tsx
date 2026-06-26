import VideoFrame from "./VideoFrame";
import { WATCH_VIDEOS } from "@/lib/site";

export default function Watch() {
  return (
    <section id="watch" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-8 py-[84px]">
        <h2 className="m-0 mb-11 text-center text-[clamp(30px,5vw,44px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
          Watch Arturo Tamayo on the podium
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[22px]">
          {WATCH_VIDEOS.map((v, i) => (
            <VideoFrame key={i} url={v.url} label={v.label} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}
