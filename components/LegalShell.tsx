import Footer from "./Footer";

// Minimal chrome for the legal pages: brand + back-to-home link, prose body,
// shared footer. Page anchors from the main nav don't apply here.
export default function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-paper text-ink">
      <header className="border-b border-ink/10 bg-paper/[0.88] backdrop-blur-[10px]">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-6 px-8">
          <a
            href="/"
            className="whitespace-nowrap text-[15.5px] font-extrabold tracking-[-0.01em] text-ink no-underline"
          >
            Tamayo <span className="text-accent">&amp;</span> Berliner
            Symphoniker
          </a>
          <a
            href="/"
            className="text-sm font-semibold text-body no-underline transition-colors hover:text-accent"
          >
            ← Back to home
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-[760px] px-8 py-16">
        <h1 className="m-0 text-[clamp(32px,6vw,44px)] font-extrabold tracking-[-0.02em]">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>

        <div className="legal-prose mt-10 text-[15.5px] leading-[1.7] text-body">
          <div className="mb-8 rounded-[6px] border border-accent/[0.22] bg-card px-6 py-4 text-[14px] text-body">
            <strong className="text-accent">Draft — review required.</strong>{" "}
            This is starter copy generated for a single-page event site. It is
            not legal advice. Please review, complete the bracketed fields, and
            have it checked before publishing.
          </div>
          {children}
        </div>
      </article>

      <Footer />
    </main>
  );
}
