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

      if (y > lastY && y > 220) setHidden(true);
      else setHidden(false);
      setLastY(y);

      setScrolled(y > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <div
      className={[
        "w-full sticky top-0 z-50",
        "transition-all duration-500 ease-in-out will-change-transform",
        hidden ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      {/* fading background layer on scroll */}
      <div
        className={[
          "absolute inset-0 transition-opacity duration-700 ease-in-out",
          scrolled
            ? "opacity-100 bg-gradient-to-b from-sage-dark to-black"
            : "opacity-0",
        ].join(" ")}
      />

      {/* content above background */}
      <div className="relative z-10 px-2 h-16 flex items-center">
        <nav className="flex gap-5 mx-22 text-sm">
          <Link href="/about" className="text-2xl font-bold hover:text-sage-light">
            About
          </Link>
          <Link href="/outreach" className="text-2xl font-bold hover:text-sage-light">
            Outreach
          </Link>
        </nav>
      </div>
    </div>
  );
}
