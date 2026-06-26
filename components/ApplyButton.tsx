import { FORM_URL } from "@/lib/site";

type Variant = "primary" | "primary-lg" | "ghost-light" | "ghost-outline";

const base =
  "inline-block text-center no-underline font-bold rounded-[4px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent";

const variants: Record<Variant, string> = {
  primary:
    "text-paper bg-accent hover:bg-accent-hover shadow-cta-sm px-6 py-4 text-base focus-visible:ring-offset-paper",
  "primary-lg":
    "text-paper bg-accent hover:bg-accent-hover shadow-cta-lg px-12 py-[18px] text-[17px] focus-visible:ring-offset-paper",
  "ghost-light":
    "text-white bg-white/10 hover:bg-white/20 border border-paper/50 px-[30px] py-4 text-base focus-visible:ring-paper focus-visible:ring-offset-transparent",
  "ghost-outline":
    "text-accent bg-transparent hover:bg-accent/10 border border-accent px-6 py-[15px] text-base focus-visible:ring-offset-paper",
};

export default function ApplyButton({
  variant = "primary",
  href = FORM_URL,
  external = true,
  className = "",
  children,
}: {
  variant?: Variant;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const external_props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...external_props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
