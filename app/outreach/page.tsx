import ContentLayout from "@/app/components/StickyLayout";
import ContactForm from "../components/ContactCard";
import FlowLayout from "../components/ocomponent";
import type { ContentItem } from "@/app/components/StickyLayout";


function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/outreachhero.jpg" // change to your image path
        alt="Outreach Hero"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
          Outreach & Impact
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Inspiring the next generation through STEM, mentorship, and collaboration.
        </p>
      </div>
    </section>
  );
}


const outreach: ContentItem[] = [
  {
    title: "Intellikits",
    titleColor: "text-sage-sigma",
    description:
      "A student-led nonprofit that makes stem kits for underserved kids throughout the country. We partnered with them in outreach to more schools, distribution, and kit designing. We have already distributed 1000 units of intellikits throughout southern california by partnering with nonprofit organizations like Active Discovery OC, catalyst kids, boys and girl club, and more.",
      imageSide: "right",
      images: [
      { src: "/o2.jpg", caption: "Teaching robotics fundamentals" },
      
    ],
  },
  {
    title: "Middle School Robotics Mentoring",
    titleColor: "text-sage-sigma",
    description:
      "We collaborate with Tustin Memorial Middle School to support students participating in the VEX IQ Robotics program. Our team volunteers weekly, providing mentorship in mechanical design, coding, and the core principles of physics and engineering. Beyond technical guidance, we also emphasize teamwork, problem-solving, and effective communication to help students develop both their skills and confidence.",
    imageSide: "left",
    images: [
      { src: "/o1.jpg", caption: "Workshop at local elementary school", size: "half" },
    ],
  },
  {
    title: "Youth Engineers Initiative",
    titleColor: "text-yei-blue",
    description:
      "Youth Engineers Initiative (YEI) is a student-led organization founded and run by Sage Hill Robotics dedicated to promoting hands-on engineering education. Through workshops, design challenges, and community outreach, YEI empowers students to explore real-world problem-solving, creativity, and collaboration while developing practical STEM skills that inspire future innovators. YEI does regular workshops at multiple middle schools in Anaheim, partnering with the Anaheim Family YMCA",
    imageSide: "right",
    images: [{ src: "/o3.jpeg", caption: "Collaborating with local mentors" }],
  },
];

export default function Outreach() {
  return (
    <div>
      <HeroSection />
      <FlowLayout content={outreach} />
      <ContactForm />
    </div>
  );
}