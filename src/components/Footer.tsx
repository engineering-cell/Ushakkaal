import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--line) pt-10 pb-8 text-[13px] text-(--faint)">
      <Container>
        <div className="flex flex-wrap justify-between gap-8 items-start">
          <div className="flex flex-col gap-[10px]">
            <span className="text-(--muted) font-semibold tracking-[.05em] text-[14px]">
              Ushakkaal
            </span>
            <p className="m-0 max-w-[260px] leading-[1.6]">
              A legacy in persuasion.
              <br />A future in intelligence.
            </p>
            <a
              href="mailto:hello@ushakkaal.com"
              className="text-(--gold) hover:opacity-80 transition-opacity duration-200 mt-1"
            >
              hello@ushakkaal.com
            </a>
          </div>

          <nav className="flex flex-col gap-[10px]" aria-label="Footer navigation">
            <span className="text-[11px] uppercase tracking-[.12em] text-(--faint) mb-1">
              Explore
            </span>
            {[
              { href: "#intelligence", label: "Intelligence" },
              { href: "#products", label: "Products" },
              { href: "#systems", label: "Systems" },
              { href: "#recognition", label: "Recognition" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-(--muted) transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-(--line) flex flex-wrap justify-between gap-4 text-[12px]">
          <span>© {year} Ushakkaal. All rights reserved.</span>
          <span className="text-(--faint) opacity-60">
            AI strategy · Intelligent systems · Technical craft
          </span>
        </div>
      </Container>
    </footer>
  );
}
