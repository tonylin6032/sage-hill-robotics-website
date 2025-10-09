"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-gradient-to-b from-black to-sage-ultradark pt-12 pb-8">
      <div className="max-w-9xl mx-10  px-8 flex flex-col gap-8">
        {/* Top Row: Nav (left) + Icons (right) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Nav Links */}
          <div className="flex gap-10 text-lg font-semibold tracking-wide">
            <Link href="/" className="hover:text-sage-light transition">Home</Link>
            <Link href="/about" className="hover:text-sage-light transition">About</Link>
            <Link href="/outreach" className="hover:text-sage-light transition">Outreach</Link>
          </div>

          {/* Icons */}
          <div className="flex gap-5">
            {/* Email */}
            <a
              href="mailto:team5835@sagehillschool.org"
              aria-label="Email"
              className="hover:text-sage-light transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/sagehillrobotics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-sage-light transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 7.5h.008v.008H16.5V7.5zM12 9.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Row: Site Name + Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-base font-semibold text-white/80">
          <h1 className="text-3xl font-extrabold text-sage-light">
            Sage Hill Robotics
          </h1>
          <p className="mt-3 sm:mt-0">
            &copy; {new Date().getFullYear()} Sage Hill Robotics
          </p>
        </div>
      </div>
    </footer>
  );
}
