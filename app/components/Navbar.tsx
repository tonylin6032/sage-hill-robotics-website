"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/sageroboticslogo.png";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) setHidden(true); // scrolling down
      else setHidden(false); // scrolling up
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <div
      className={[
        "w-full sticky top-0 z-50 bg-emerald-900",
        "transition-all duration-500 ease-in-out will-change-transform",
        hidden
          ? "-translate-y-10 opacity-0"
          : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <div className="px-2 h-22  flex items-center">
        <Image src={logo} alt="Sage Robotics Logo" className="h-14 w-14"/>
        <Link href="/" className="text-lg font-semibold text-white">
          Sage Hill Robotics
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/about" className="text-white hover:opacity-80">
            About
          </Link>
          <Link href="/outreach" className="text-white hover:opacity-80">
            Outreach
          </Link>
        </nav>
      </div>
    </div>
  );
}
