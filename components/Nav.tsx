const links = [
  { href: "#repertoire", label: "Repertoire" },
  { href: "#watch", label: "Watch" },
  { href: "#maestro", label: "Maestro" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#gallery", label: "Gallery" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 hidden border-b border-ink/10 bg-paper/[0.88] backdrop-blur-[10px] md:block">
      <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between gap-3 px-5 sm:gap-6 sm:px-8">
        <a
          href="#top"
          className="min-w-0 flex-shrink no-underline"
        >
          <span className="block text-[13px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink sm:text-[15.5px]">
            Tamayo <span className="text-accent">&amp;</span> Berliner
            Symphoniker
          </span>
        </a>
        <div className="flex flex-shrink-0 items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-body no-underline transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#participation"
            className="whitespace-nowrap rounded-[3px] bg-accent px-4 py-[10px] text-sm font-bold text-paper no-underline transition-colors hover:bg-accent-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:px-5"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
