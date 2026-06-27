import VideoFrame from "./VideoFrame";
import { WATCH_VIDEOS } from "@/lib/site";

export default function Watch() {
  return (
    <section id="watch" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-8 py-[84px]">
        <h2 className="m-0 mb-11 text-center text-[clamp(30px,5vw,44px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-white">
          Watch Arturo Tamayo on the podium
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-[22px] gap-y-9">
          {WATCH_VIDEOS.map((v, i) => (
            <div key={i} className="flex flex-col">
              <VideoFrame url={v.url} label={v.label} size="lg" />
              {v.description && (
                <p className="mt-[18px] text-[14.5px] leading-[1.55] text-[#cdbfae]">
                  {v.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
