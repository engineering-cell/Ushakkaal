"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";

const NAV_LINKS = [
  { href: "#intelligence", label: "Intelligence" },
  { href: "#products", label: "Products" },
  { href: "#systems", label: "Systems" },
  { href: "#recognition", label: "Recognition" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-20 backdrop-blur-[18px] border-b transition-[border-color,background] duration-400 ease-(--ease)",
          scrolled
            ? "border-(--line) bg-[rgba(9,9,9,.82)]"
            : "border-transparent bg-[rgba(9,9,9,.58)]",
        ].join(" ")}
      >
        <Container>
          <div className="h-[76px] max-[620px]:h-[66px] flex items-center justify-between gap-6">
            <Link
              className="flex items-center gap-[10px] tracking-[.02em] font-semibold group"
              href="#top"
              onClick={close}
            >
              <span className="w-9 h-9 grid place-items-center rounded-full border border-(--line) bg-[rgba(255,255,255,.04)] text-(--gold) font-serif text-[20px] leading-none transition-[border-color,background] duration-250 ease-(--ease) group-hover:border-[rgba(184,155,94,.4)] group-hover:bg-[rgba(184,155,94,.08)]">
                U
              </span>
              <span className="text-[15px] tracking-[.05em]">Ushakkaal</span>
            </Link>

            <nav
              className="flex items-center gap-[26px] text-[14px] text-(--muted)"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  className="hover:text-foreground transition-colors duration-200 max-[920px]:hidden"
                  href={l.href}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                className="text-foreground text-[14px] px-[18px] py-[9px] rounded-full border border-(--line) bg-[rgba(255,255,255,.045)] hover:border-[rgba(184,155,94,.5)] hover:bg-[rgba(184,155,94,.1)] transition-[border-color,background] duration-250 ease-(--ease) max-[920px]:hidden"
                href="#contact"
              >
                Contact
              </Link>

              {/* Mobile hamburger */}
              <button
                className="hidden max-[920px]:flex flex-col justify-center gap-[5px] w-9 h-9 -mr-1"
                onClick={() => setMenuOpen((o) => !o)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
              >
                <span
                  className={[
                    "block w-5 h-px bg-current transition-[transform,opacity] duration-300 origin-center",
                    menuOpen ? "translate-y-[6px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block w-5 h-px bg-current transition-opacity duration-300",
                    menuOpen ? "opacity-0" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "block w-5 h-px bg-current transition-[transform,opacity] duration-300 origin-center",
                    menuOpen ? "-translate-y-[6px] -rotate-45" : "",
                  ].join(" ")}
                />
              </button>
            </nav>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-nav"
        className={[
          "fixed inset-0 z-[19] flex flex-col pt-[66px] backdrop-blur-[22px] bg-[rgba(9,9,9,.96)]",
          "transition-[opacity,visibility] duration-350 ease-(--ease)",
          "min-[921px]:hidden",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col px-6 pt-4 gap-0">
          {NAV_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-5 border-b border-(--line) text-[22px] text-(--muted) hover:text-foreground transition-colors duration-200 tracking-[-.01em]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={close}
            className="mt-6 text-center text-[18px] text-foreground px-6 py-4 rounded-2xl border border-(--line) bg-[rgba(255,255,255,.045)] hover:border-[rgba(184,155,94,.5)] hover:bg-[rgba(184,155,94,.1)] transition-[border-color,background] duration-250 ease-(--ease)"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
