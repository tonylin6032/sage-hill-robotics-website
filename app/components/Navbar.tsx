"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 220);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={[
        // 🔽 MOVED DOWN MORE ON MOBILE: top-28 (112px). Desktop stays top-0.
        "sticky inset-x-0 z-50 w-full",
        "transition-all duration-500 ease-in-out will-change-transform",
        hidden ? "-translate-y-12 opacity-0" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      {/* ✅ solid black background */}
      <div className="pointer-events-none absolute inset-0 bg-black" />

      <div className="relative z-10 h-14 sm:h-16">
        <div className="mx-auto flex h-full max-w-screen-2xl items-center pl-6 sm:pl-24 pr-4 sm:pr-6">
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
