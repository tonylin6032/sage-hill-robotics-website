"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-sage-dark text-white py-6">
      <div className=" mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <div className="flex gap-6 mt-3 sm:mt-0 text-sm">
          <Link href="/about" className="hover:text-brand-accent">
            About
          </Link>
          <Link href="/outreach" className="hover:text-brand-accent">
            Outreach
          </Link>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sage Hill Robotics
        </p>
      </div>
    </footer>
  );
}