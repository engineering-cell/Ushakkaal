import Link from "next/link";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "default" | "primary";
  className?: string;
  type?: "button" | "submit";
};

export default function Button({
  href,
  children,
  variant = "default",
  className,
  type,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 min-h-[52px] px-[22px] rounded-full border border-(--line) " +
    "transition-[transform,border-color,background] duration-250 ease-(--ease) " +
    "hover:-translate-y-0.5 hover:border-[rgba(184,155,94,.5)] hover:bg-[rgba(184,155,94,.12)]";

  const styles =
    variant === "primary"
      ? "bg-[var(--text)] !text-[#090909] border-[var(--text)] hover:bg-white hover:!text-[#090909]"
      : "bg-[rgba(255,255,255,.055)] text-foreground";

  const cls = [base, styles, className ?? ""].join(" ");

  if (href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type}>
      {children}
    </button>
  );
}

