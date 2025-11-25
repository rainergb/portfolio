"use client";
import { HeroSection } from "./sections/hero";
import { Carousel } from "./sections/carousel";
import { AboutMe } from "./sections/about-me";
import GradualBlur from "@/components/ui/bg-blur";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Carousel />
      <AboutMe
        title="ABOUT"
        subtitle="Passion, Creativity, and Code"
        avatarUrl="/avatar.png"
        name="Rainer Drummond"
        jobTitle="Designer and Frontend Engineer"
        handle="Rainer Drummond"
        status="Online"
        contactText="Contact"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        onContactClick={() => console.log("Contact clicked")}
      />
      <GradualBlur
        preset="page-footer"
        strength={1}
        divCount={5}
        curve="ease-out"
      />
    </main>
  );
}
