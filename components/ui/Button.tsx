import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "ember" | "ghost";
  size?: "default" | "hero";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

const base = "inline-flex items-center justify-center font-medium text-small transition-opacity hover:opacity-90 disabled:opacity-50";

const variants = {
  primary: "bg-ink text-paper",
  ember: "bg-ember text-paper",
  ghost: "border border-ink text-ink bg-transparent",
};

const sizes = {
  default: "h-11 px-6",
  hero: "h-12 px-8 md:h-14 md:px-10",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  type = "button",
  disabled,
  className = "",
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
