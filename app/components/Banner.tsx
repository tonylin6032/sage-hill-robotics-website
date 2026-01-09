"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/sageroboticslogo.png";

export default function Banner() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto flex h-20 max-w-screen-2xl items-center px-6">
        <Link
          href="/"
          className="flex w-full items-center justify-center sm:justify-start gap-3"
        >
          <Image
            src={logo}
            alt="Sage Robotics Logo"
            width={60}
            height={60}
            className="h-[60px] w-[60px] object-contain"
            priority
          />
          <h1 className="text-5xl font-semibold text-white leading-none">
            Sage Hill Robotics
          </h1>
        </Link>
      </div>
    </div>
  );
}
