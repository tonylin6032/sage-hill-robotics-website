import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sage Hill Robotics",
  description: "FRC Team 5835 – Sage Hill School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased bg-black`}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
