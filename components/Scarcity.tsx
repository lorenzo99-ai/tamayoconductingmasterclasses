export default function Scarcity() {
  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-7 px-8 py-[30px] text-center">
        <div className="flex items-center gap-[18px]">
          <span className="text-[54px] font-extrabold leading-none tracking-[-0.02em] text-white">
            8
          </span>
          <span className="max-w-[560px] text-left text-base font-medium leading-[1.4]">
            <strong className="font-bold tracking-[0.06em] text-rose">
              LIMITED SPOTS:
            </strong>{" "}
            Only <strong className="font-bold text-white">8 Active Participants</strong>{" "}
            will be selected by Prof. Tamayo to ensure{" "}
            <strong className="font-bold text-white">70+ minutes</strong> of podium
            time to each participant, individual feedback, and preparation.
          </span>
        </div>
      </div>
    </div>
  );
}
