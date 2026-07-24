import type { IconComponent } from "@/lib/types";

type Variant = "primary" | "secondary";

export type ActionLinkProps = {
  label: string;
  href: string;
  icon: IconComponent;
  variant?: Variant;
  external?: boolean;
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand text-brand-foreground hover:bg-brand-strong",
  secondary:
    "border border-border bg-card text-foreground hover:border-white/20 hover:bg-white/5",
};

/** A single icon + label link, styled by variant. */
export function ActionLink({
  label,
  href,
  icon: Icon,
  variant = "secondary",
  external = false,
}: ActionLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 font-mono text-sm font-medium transition-colors ${variantClasses[variant]}`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
