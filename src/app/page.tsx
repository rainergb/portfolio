import { HeroSection } from "./sections/hero";

export default function Home() {
  return (
    <main>
      <HeroSection
        profileImage={{
          src: "/profile.jpg",
          alt: "Rainer Drummond",
        }}
        greeting="Hey, I'm"
        name="Rainer Drummond"
        title="Developer for Business. Designer for People"
        ctaText="My Services"
        ctaHref="#services"
      />
    </main>
  );
}
