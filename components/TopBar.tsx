import { CONTACT_EMAIL } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="hidden bg-ink-dark text-[#cdbfae] md:block">
      <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-2 px-8 py-[9px] text-[13px]">
        <span className="text-[#a99c8a]">
          Need help? Contact the organization —
        </span>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-semibold text-[#f0e6d8] no-underline hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </div>
  );
}
