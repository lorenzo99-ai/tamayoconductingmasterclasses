// Persistent Apply CTA fixed to the bottom on small screens only.
export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur md:hidden">
      <a
        href="#participation"
        className="block w-full rounded-[4px] bg-accent py-[14px] text-center text-base font-bold text-paper no-underline shadow-cta-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        Apply Now →
      </a>
    </div>
  );
}
