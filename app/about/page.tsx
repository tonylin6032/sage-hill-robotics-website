
"use client";
import StickyLayout, { type ContentItem, type StackedGroup } from "../components/StickyLayout";
import NormalLayout from "../components/NormalLayout"; 
import ImageDivider from "../components/ImageDivider";
import ContactForm from "../components/ContactCard";



const ourteam: ContentItem[] = [
  {
    title: "About Sage Hill Robotics",
    subtitle: "FRC 5835, Newport Beach California",
    description:
      "Sage Hill Robotics is the competitive robotics team at Sage Hill School. Our students work together to design, build, and program robots for the annual FIRST Robotics Competition. Our team is composed of students at Sage Hill School passionate about STEM.The team includes subgroups focused on mechanical design, programming, electronics, and outreach, giving members hands-on experience in all parts of robotics.",
      titleColor: "text-sage-sigma",
  },
];
const mechanical: ContentItem[] = [
  {
    title: "Mechanical Team",
    description:
      "The mechanical subteam focuses on designing, building, and assembling the robot’s physical structure. Members learn machining, prototyping, and assembling, bringing creative engineering solutions to life using hands-on fabrication and precision tools.",
    titleColor: "text-sage-light",
  },
];

const software: ContentItem[] = [
  {
    title: "Software Team",
    description:
      "The software subteam programs the robot’s control systems, autonomous functions, and vision tracking. Students gain experience in Java, path planning, and real-time debugging to ensure the robot performs seamlessly during competition.",
    titleColor: "text-sage-light",
  },
];

const design: ContentItem[] = [
  {
    title: "Design Team",
    description:
      "The design subteam is responsible for creating the robot’s 3D models using CAD software. Members focus on translating mechanical concepts into precise, manufacturable designs",
    titleColor: "text-sage-light",
  },
];

const electrical: ContentItem[] = [
  {
    title: "Electrical Team",
    description:
      "The electrical subteam is responsible for wiring, power management, and ensuring safe, reliable electrical connections. Members learn to read schematics, manage circuits, and integrate sensors and controllers into the robot’s system.",
    titleColor: "text-sage-light",
  },
];

const business: ContentItem[] = [
  {
    title: "Business Team",
    description:
      "The business subteam focuses on finance and outreach. They manage budgeting, maintain partnerships, and handle communications that support the team’s sustainability and community presence.",
    titleColor: "text-sage-light",
  },
];

export default function Home() {
  
    return (
      <main className={`bg-black`}>
        <div className="relative">
          <section
            id="home"
            className="sticky top-0 z-0 h-screen w-full flex items-center justify-start px-6 md:px-12 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url(/about1.jpg)",}}/>
  
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
  
            {/* Foreground content */}
            <div className="relative z-10 text-left">
              <h1 className="text-white font-extrabold text-5xl sm:text-7xl md:text-8xl leading-none">
                About Our Team
              </h1>
              <h2 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl mt-2 leading-none">
                From Sage Hill School
              </h2>
            </div>
  
            {/* Optional bottom fade to smooth the cover */}
            <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-black/80" />
          </section>
  
          {/* First section slides up and covers hero */}
          <div className="relative z-10 bg-black mt-3">
            <div className="h-1" />
            <NormalLayout content={ourteam} />
            {/* about general */}
            <ImageDivider
            images={["/id1.jpg","/id2.jpg","/id3.jpg","/id4.jpg","/id5.jpg",]}
            height={220}
            duration={22}    // slower or faster scroll
            reverse={false}/>
            {/* Subteams */}
            <NormalLayout content={mechanical} />
            <NormalLayout content={software} />
            <NormalLayout content={design}/>
            <NormalLayout content={electrical}/>
            <NormalLayout content={business} />
            <ImageDivider
            images={["/2id1.jpg","/2id2.jpg","/2id3.jpg","/2id4.jpg","/2id5.jpg",]}
            height={220}
            duration={22}    // slower or faster scroll
            reverse={true}/>
            {/* Our Mentors */}
            {/* Team memnbers */}
            <ContactForm />
          </div>
        </div>
      </main>
    );
  }
  