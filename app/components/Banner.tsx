"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/sageroboticslogo.png";

export default function Banner() {
  return (
    <div className="w-full bg-black ">
      <div className=" mx-auto h-16 px-6 flex items-center">
        {/* Logo + text to the left, same size/height as Navbar */}
        <Link href="/" className="flex items-center gap-3 mt-3">
          <Image
            src={logo}
            alt="Sage Robotics Logo" className="h-15 w-15"/>
          <h1 className="text-5xl font-semibold text-white mt-1">
            Sage Hill Robotics
          </h1>
        </Link>
      </div>
    </div>
  );
}
