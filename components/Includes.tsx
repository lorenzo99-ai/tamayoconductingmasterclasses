const items = [
  {
    big: "70+",
    title: "Minutes of podium time",
    body: "Substantial, individual time on the podium with the Berliner Symphoniker.",
  },
  {
    big: "1:1",
    title: "Feedback from Maestro Tamayo",
    body: "One-on-one guidance throughout rehearsals, feedback sessions and meetings.",
  },
  {
    big: "★",
    title: "Final dressed recording",
    body: "A professionally recorded video you can use for auditions, applications and competitions.",
  },
  {
    big: "↺",
    title: "Every session recorded",
    body: "All recorded sessions are available to you for review and study afterward.",
  },
];

export default function Includes() {
  return (
    <section
      id="includes"
      className="mx-auto max-w-[1200px] px-8 pb-6 pt-[86px]"
    >
      <div className="mx-auto mb-12 max-w-[760px] text-center">
        <h2 className="m-0 text-[clamp(30px,5vw,44px)] font-extrabold leading-[1.04] tracking-[-0.02em]">
          What every active participant receives
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[18px]">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-[4px] border border-ink/10 bg-white px-[26px] py-7"
          >
            <div className="text-[34px] font-extrabold leading-none tracking-[-0.02em] text-accent">
              {it.big}
            </div>
            <div className="mb-[6px] mt-3 text-base font-bold">{it.title}</div>
            <div className="text-[14.5px] leading-[1.5] text-muted-serif">
              {it.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
