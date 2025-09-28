import Image from "next/image";
import { Montserrat } from "next/font/google";
import background from "@/public/DSCF5555.jpeg";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
// app/page.tsx
import ContentLayout from "./components/ContentLayout";

const ourteam = [
  {
    title: "Our Team",
    titleColor: "text-sage-light ",
    subtitle: "Sage Hill Robotics — FRC 5835",
    description: `Founded in 2016, Sage Hill Robotics brings together students with a passion for engineering, coding, and teamwork...`,
  },
];
const aboutfirst = [
  {
    title: "About First",
    titleColor: "text-blue-500 ",
    subtitle: "First Robotics Competitions",
    description: `blah
    blah
    blah`,
  },
];


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative h-180 w-full flex items-center justify-start px-12">
        {/* Background Video */}
        <Image
          className="absolute inset-0 w-full h-full object-cover object-[center_-1200px]"
          src={background}
          alt="image"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content on top */}
        <div className="flex flex-col z-10 text-left">
            <h1 className="text-8xl font-extrabold text-white">
              Sage Hill Robotics
            </h1>
            <h1 className="text-6xl font-extrabold text-white">
              FRC 5835
            </h1>
        </div>
      </section>
      <ContentLayout content={ourteam} />
      <ContentLayout content={aboutfirst} />
    </main>
  );
}