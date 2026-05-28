"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-20 backdrop-blur-[18px] border-b transition-[border-color,background] duration-400 ease-(--ease)",
        scrolled
          ? "border-(--line) bg-[rgba(9,9,9,.78)]"
          : "border-transparent bg-[rgba(9,9,9,.58)]",
      ].join(" ")}
    >
      <Container>
        <div className="h-[76px] max-[620px]:h-[66px] flex items-center justify-between gap-6">
          <Link className="flex items-center gap-3 tracking-[.02em] font-semibold" href="#top">
            <span className="w-9 h-9 grid place-items-center rounded-full border border-(--line) bg-[rgba(255,255,255,.04)] text-(--gold) font-serif text-[18px]">
              U
            </span>
            <span>Ushakkaal</span>
          </Link>

          <nav
            className="flex items-center gap-[26px] text-[14px] text-(--muted)"
            aria-label="Primary navigation"
          >
            <Link className="hover:text-foreground transition-colors duration-200 max-[920px]:hidden" href="#intelligence">
              Intelligence
            </Link>
            <Link className="hover:text-foreground transition-colors duration-200 max-[920px]:hidden" href="#products">
              Products
            </Link>
            <Link className="hover:text-foreground transition-colors duration-200 max-[920px]:hidden" href="#systems">
              Systems
            </Link>
            <Link className="hover:text-foreground transition-colors duration-200 max-[920px]:hidden" href="#recognition">
              Recognition
            </Link>
            <Link
              className="text-foreground px-4 py-[10px] rounded-full border border-(--line) bg-[rgba(255,255,255,.045)]"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}

