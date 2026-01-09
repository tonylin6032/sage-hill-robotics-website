"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      setHidden(y > lastY && y > 220);
      setLastY(y);
      setScrolled(y > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={[
        "sticky top-0 inset-x-0 z-50 w-full",
        "transition-all duration-500 ease-in-out will-change-transform",
        hidden ? "-translate-y-12 opacity-0" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      {/* fading background layer on scroll */}
      <div
        className={[
          "pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out",
          scrolled
            ? "opacity-100 bg-gradient-to-b from-sage-dark to-black"
            : "opacity-0",
        ].join(" ")}
      />

      {/* content above background */}
      <div className="relative z-10 h-14 sm:h-16">
        <div className="mx-auto flex h-full max-w-10xl items-center pl-24">
          <nav className="flex w-full items-center justify-start gap-4 sm:gap-6">
            <Link href="/" className="font-bold hover:text-sage-light text-lg sm:text-2xl">
              Home
            </Link>
            <Link href="/about" className="font-bold hover:text-sage-light text-lg sm:text-2xl">
              About
            </Link>
            <Link href="/outreach" className="font-bold hover:text-sage-light text-lg sm:text-2xl">
              Outreach
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
