"use client";

import { useRef } from "react";
import { Montserrat } from "next/font/google";

import StickyLayout, { type ContentItem, type StackedGroup } from "./components/StickyLayout";
import NormalLayout from "./components/NormalLayout";

import d1 from "@/public/about1.jpg";
import d2 from "@/public/about2.jpg";
import d3 from "@/public/about3.jpg";
import r1 from "@/public/2025rob1.jpg";
import r2 from "@/public/2025rob2.jpg";
import r3 from "@/public/2025rob3.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

/* -------- Content -------- */

const ourteam: ContentItem[] = [
  {
    title: "About Sage Hill Robotics",
    subtitle: "FRC 5835, Newport Beach California",
    description:
      "Sage Hill Robotics is the competitive robotics team at Sage Hill School. Our students work together to design, build, and program robots for the annual FIRST Robotics Competition. The team includes subgroups focused on mechanical design, programming, electronics, and outreach, giving members hands-on experience in all parts of robotics.",
    titleColor: "text-sage-light",
    imageSide: "right",
    stickyOffsetClass: "top-16",
    images: [
      { src: d1, caption: "Sage Hill Robotics 2025" },
      { src: d2, caption: "Working in the Pits", size: "half", aspect: "1/1" },
      { src: d3, caption: "Aerospace Valley Regionals 2025", size: "half", aspect: "1/1" },
    ],
  },
];

const robot2025: ContentItem[] = [
  {
    title: "Hungry Hippo",
    subtitle: "Our 2025 Robot",
    description:
      "Hungry Hippo is Sage Hill Robotics’ competition robot, designed and built by students to take on the challenges of the 2025 FIRST Robotics Competition. From precision programming to custom-built mechanisms, Hungry Hippo represents months of teamwork, testing, and creativity. It’s the centerpiece of our season and the product of our team’s dedication to engineering and innovation.",
    titleColor: "text-sage-sigma",
    imageSide: "right",
    stickyOffsetClass: "top-16",
    images: [
      { src: r1, caption: "Aerospace Valley Regionals 2025", size: "half", aspect: "2/5" },
      {
        layout: "stack",
        children: [
          { src: r2, caption: "'Hungry Hippo' Our 2025 Robot", size: "half", aspect: "1/1" },
          { src: r3, caption: "Hungry Hippoi Displaying Ground Intake", size: "half", aspect: "1/1" },
        ],
      }satisfies StackedGroup,
    ],
  },
];

const mission: ContentItem[] = [
  {
    title: "Our Mission",
    titleColor: "text-sage-light",
    subtitle: "Building robots, skills, and community at Sage Hill.",
    description:
      "Our mission at Sage Hill Robotics is to empower students to explore engineering, programming, and design through hands-on robotics. We strive to foster collaboration, creativity, and problem-solving while competing at the highest level of FIRST Robotics. Above all, we aim to inspire a passion for innovation that extends beyond our team and into the wider community.",
  },
];
const aboutfirst: ContentItem[] = [
  {
    title: "About FIRST®",
    titleColor: "text-blue-500",
    subtitle: "First Robotics Competitions",
    description:
      "FIRST® (For Inspiration and Recognition of Science and Technology) is a global nonprofit founded in 1989 by inventor Dean Kamen to inspire young people in science and technology. Its hands-on robotics programs give students the chance to develop technical skills, teamwork, and confidence for future STEM careers. The FIRST® Robotics Competition (FRC) challenges high school teams to design, build, and program large-scale robots to compete in themed games, fostering innovation and collaboration.",
  },
];

/* -------- Page -------- */

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    const vid = videoRef.current;
    if (vid) {
      vid.pause();
      vid.currentTime = vid.duration;
    }
  };

  return (
    <main className={`bg-black ${montserrat.variable}`}>
      {/* Wrapper establishes the sticky boundary */}
      <div className="relative">
        {/* Hero sticks at top and can be covered */}
        <section
          id="home"
          className="sticky top-0 z-0 h-screen w-full flex items-center justify-start px-6 md:px-12 overflow-hidden"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
          >
            <source src="/herovid.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Foreground content */}
          <div className="relative z-10 text-left">
            <h1 className="text-white font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none">
              Sage Hill Robotics
            </h1>
            <h2 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl mt-2 leading-none">
              FRC 5835
            </h2>
          </div>

          {/* Optional bottom fade to smooth the cover */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-black/80" />
        </section>

        {/* First section slides up and covers hero */}
        <div className="relative z-10 bg-black">
          <StickyLayout content={ourteam} />
        </div>
      </div>

      {/* Rest of the page as usual */}
      <NormalLayout content={mission} />
      <StickyLayout content={robot2025} />
      <NormalLayout content={aboutfirst} />
    </main>
  );
}
