import ApplyButton from "./ApplyButton";

const activeIncludes = [
  <>
    <strong>70+ minutes</strong> of total podium time with the Berliner
    Symphoniker
  </>,
  "One-on-one feedback from Maestro Tamayo",
  "Orchestra rehearsals and final dressed recording",
  "Recorded sessions for review",
  "Attendance at rehearsals, feedback sessions and meetings",
];

const passiveIncludes = [
  "Listen and attend all the sessions and afternoon masterclasses with the Berliner Symphoniker and Arturo Tamayo",
  <>
    <strong>Two one-on-one lessons</strong> with Arturo Tamayo
  </>,
  "Attendance at rehearsals, feedback sessions, and meetings",
];

function Check() {
  return <span className="font-extrabold text-accent">✓</span>;
}

export default function Pricing() {
  return (
    <section
      id="participation"
      className="mx-auto max-w-[1100px] px-8 pb-[84px] pt-16"
    >
      <div className="mx-auto mb-11 max-w-[680px] text-center">
        <div className="mb-[14px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
          Participation
        </div>
        <h2 className="m-0 text-[clamp(32px,5vw,44px)] font-extrabold leading-[1.04] tracking-[-0.02em]">
          Choose how you take part
        </h2>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {/* ACTIVE */}
        <div className="relative flex flex-col rounded-[6px] border-2 border-accent bg-white px-[38px] py-10">
          <div className="absolute -top-[13px] left-[38px] rounded-[100px] bg-accent px-[14px] py-[6px] text-[11px] font-bold uppercase tracking-[0.12em] text-paper">
            Conduct the orchestra
          </div>
          <div className="mb-[14px] mt-[6px] text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Active participant
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[56px] font-extrabold leading-[0.9] tracking-[-0.02em]">
              €1850
            </span>
          </div>
          <div className="mb-6 mt-3 text-sm leading-[1.5] text-muted">
            Accommodation and transportation are not included. Payment plans are
            available upon request.
          </div>
          <ul className="m-0 flex list-none flex-col gap-[11px] p-0">
            {activeIncludes.map((it, i) => (
              <li
                key={i}
                className="flex gap-[11px] text-[15px] leading-[1.4] text-body-card"
              >
                <Check />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <div className="flex-1" />
          <ApplyButton variant="primary" className="mt-7 block w-full">
            Click Here To Apply Now →
          </ApplyButton>
          <div className="mt-3 text-center text-[13px] text-muted">
            Submit the form + one conducting video link
          </div>
          <div className="mt-[10px] border-t border-ink/10 pt-[14px] text-center text-[12.5px] font-bold tracking-[0.04em] text-accent">
            Active participant limited to 8 spots.
          </div>
        </div>

        {/* PASSIVE */}
        <div className="flex flex-col rounded-[6px] border border-ink/[0.14] bg-white px-[38px] py-10">
          <div className="mb-[14px] mt-[6px] text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Passive participant
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[56px] font-extrabold leading-[0.9] tracking-[-0.02em]">
              €350
            </span>
          </div>
          <div className="mb-6 mt-3 text-sm leading-[1.5] text-muted">
            Experience the full masterclass alongside the active participants,
            with personal lessons of your own.
          </div>
          <ul className="m-0 flex list-none flex-col gap-[11px] p-0">
            {passiveIncludes.map((it, i) => (
              <li
                key={i}
                className="flex gap-[11px] text-[15px] leading-[1.4] text-body-card"
              >
                <Check />
                <span>{it}</span>
              </li>
            ))}
          </ul>
          <div className="flex-1" />
          <ApplyButton variant="ghost-outline" className="mt-7 block w-full">
            Apply as Passive Participant →
          </ApplyButton>
          <div className="mt-3 text-center text-[13px] text-muted">
            Submit the form to reserve a seat
          </div>
        </div>
      </div>

      {/* EARLY BIRD + SCHEDULE */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-[6px] bg-accent px-[30px] py-7 text-paper">
          <div className="mb-[10px] text-[11.5px] font-bold uppercase tracking-[0.16em] text-rose">
            Early-bird bonus
          </div>
          <div className="mb-2 text-[20px] font-extrabold leading-[1.25]">
            A free 1-hour private lesson with Maestro Tamayo
          </div>
          <div className="text-[14.5px] leading-[1.5] text-rose-2">
            Early applicants get a private session before the masterclass — to
            review repertoire, ask questions, and work on technique.
          </div>
        </div>
        <div className="rounded-[6px] border border-ink/[0.12] bg-card px-[30px] py-7">
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent">
            Schedule requests
          </div>
          <div className="text-[14.5px] leading-[1.5] text-body">
            We do our best to accommodate schedule needs — for example,
            participants may request to conduct later in the day when possible.
          </div>
        </div>
      </div>
    </section>
  );
}
