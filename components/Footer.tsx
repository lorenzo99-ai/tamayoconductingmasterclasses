import { CONTACT_EMAIL, CONTACT_NAME } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-dark text-[#cdbfae]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-8 px-8 py-12">
        <div>
          <div className="text-[18px] font-extrabold tracking-[-0.01em] text-paper">
            Conducting Masterclass
          </div>
          <div className="mt-1 font-serif text-[15px] italic text-[#a99c8a]">
            with Prof. Arturo Tamayo &amp; the Berliner Symphoniker
          </div>
          <div className="mt-[14px] text-sm text-muted">
            Berlin · October 5–8, 2026
          </div>
        </div>
        <div>
          <div className="mb-2 text-[11.5px] font-bold uppercase tracking-[0.16em] text-[#7a6f5e]">
            Contact
          </div>
          <div className="text-[15px] font-bold text-paper">{CONTACT_NAME}</div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-[#cdbfae] no-underline hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
      <div className="border-t border-paper/[0.08]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-8 py-5">
          <div className="text-[12.5px] text-[#6f6555]">
            © 2026 Conducting Masterclass with Arturo Tamayo. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[13px] text-[#cdbfae] no-underline hover:text-paper"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[13px] text-[#cdbfae] no-underline hover:text-paper"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
