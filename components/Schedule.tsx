const days = [
  {
    label: "DAY 1 · OCT 5",
    time: "10:00 AM – 1:00 PM",
    title: "Orchestra rehearsal",
    body: (
      <>
        Schönberg&apos;s{" "}
        <em className="font-serif italic">Verklärte Nacht</em> — the mandatory
        piece — with focus on technique, gesture, sound and string-orchestra
        work.
      </>
    ),
  },
  {
    label: "DAYS 2–3 · OCT 6–7",
    time: "10:00 AM – 1:00 PM",
    title: "Orchestra rehearsals",
    body: "Participants choose which repertoire to rehearse with the orchestra, under Maestro Tamayo's guidance.",
  },
  {
    label: "DAY 4 · OCT 8",
    time: "10:00 AM – 5:00 PM",
    title: "General rehearsal + recording",
    body: "General rehearsal in the morning, followed by the final dressed recording session in the afternoon.",
  },
];

export default function Schedule() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 py-16">
      <div className="mb-[34px] flex items-center gap-4">
        <span className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-accent">
          The four days
        </span>
        <span className="h-px flex-1 bg-ink/[0.18]" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        {days.map((d) => (
          <div key={d.label} className="border-t-[3px] border-accent pt-[18px]">
            <div className="text-[13px] font-bold tracking-[0.04em] text-accent">
              {d.label}
            </div>
            <div className="mt-2 inline-block rounded-[100px] bg-card px-3 py-1 text-[12.5px] font-bold text-body">
              {d.time}
            </div>
            <div className="mb-2 mt-3 text-[19px] font-extrabold tracking-[-0.01em]">
              {d.title}
            </div>
            <div className="text-[14.5px] leading-[1.5] text-muted-serif">
              {d.body}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-[6px] border border-accent/[0.22] bg-card px-8 py-7">
        <div className="mb-[10px] flex flex-wrap items-center gap-3">
          <span className="rounded-[100px] bg-accent px-[13px] py-[5px] text-[11.5px] font-bold uppercase tracking-[0.16em] text-paper">
            Bonus
          </span>
          <span className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
            Every afternoon
          </span>
        </div>
        <div className="mb-2 text-[20px] font-extrabold leading-[1.3] text-ink">
          Additional masterclasses with Prof. Arturo Tamayo
        </div>
        <div className="max-w-[880px] text-[15px] leading-[1.6] text-body">
          On technique, score study, and rehearsal technique, plus strategies
          for preparing and performing in international competitions — available
          every afternoon, along with open Q&amp;A and personalized feedback for
          every conductor.
        </div>
      </div>

      <p className="m-0 mt-6 text-center font-serif text-base italic text-muted">
        Each session is recorded, and Maestro Tamayo is available for one-on-one
        feedback throughout the masterclass.
      </p>
    </section>
  );
}
