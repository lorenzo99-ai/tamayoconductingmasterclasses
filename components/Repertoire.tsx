const works = [
  {
    composer: "A. Schönberg",
    title: "Verklärte Nacht",
    sub: "String orchestra, 1914 version",
    tag: "Mandatory",
  },
  {
    composer: "C. Debussy",
    title: "Prélude à l'après-midi d'un faune",
    sub: "A. Schönberg version",
  },
  {
    composer: "R. Strauss",
    title: "Vier letzte Lieder",
  },
];

export default function Repertoire() {
  return (
    <section id="repertoire" className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-8 py-20">
        <div className="rounded-[10px] border-[1.5px] border-accent bg-white px-6 py-12 md:px-[54px] md:py-[52px]">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-14">
            <div>
              <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
                Repertoire
              </div>
              <h2 className="m-0 mb-[18px] text-[clamp(30px,5vw,40px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
                Explore the masterclass repertoire
              </h2>
              <p className="m-0 font-serif text-[17px] italic leading-[1.5] text-muted-serif">
                Participants are expected to study their scores deeply before
                the masterclass.
              </p>
            </div>
            <div className="flex flex-col">
              {works.map((w, i) => (
                <div
                  key={w.title}
                  className={`flex items-baseline justify-between gap-5 py-[22px] ${
                    i < works.length - 1 ? "border-b border-ink/[0.14]" : ""
                  }`}
                >
                  <div>
                    <div className="text-[20px] font-bold tracking-[-0.01em] text-ink">
                      {w.composer} —{" "}
                      <em className="font-serif font-medium italic">
                        {w.title}
                      </em>
                    </div>
                    {w.sub && (
                      <div className="mt-[5px] text-sm text-muted">{w.sub}</div>
                    )}
                  </div>
                  {w.tag && (
                    <span className="whitespace-nowrap rounded-[100px] border border-accent/20 bg-card px-[13px] py-[6px] text-[11px] font-bold uppercase tracking-[0.1em] text-accent">
                      {w.tag}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
