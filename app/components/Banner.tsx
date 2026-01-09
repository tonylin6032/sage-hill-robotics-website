"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/sageroboticslogo.png";

export default function Banner() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:px-6">
        <Link
          href="/"
          className="flex w-full items-center justify-center sm:justify-start gap-3"
        >
          <Image
            src={logo}
            alt="Sage Robotics Logo"
            width={44}
            height={44}
            className="h-11 w-11 sm:h-12 sm:w-12 object-contain"
            priority
          />
          <h1 className="text-white font-semibold leading-none text-xl sm:text-3xl md:text-4xl">
            Sage Hill Robotics
          </h1>
        </Link>
      </div>
    </div>
  );
}
