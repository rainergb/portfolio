import { HeroSection } from "./sections/hero";
import { Carousel } from "./sections/carousel";
import GradualBlur from "@/components/ui/bg-blur";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Carousel />
      <GradualBlur
        preset="page-footer"
        strength={1}
        divCount={5}
        curve="ease-out"
      />
    </main>
  );
}
