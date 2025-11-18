"use client";

import { ProfileImage } from "@/components/hero/ProfileImage";
import { IntroText } from "@/components/hero/IntroText";
import { HeroTitle } from "@/components/hero/HeroTitle";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import DotGrid from "@/components/ui/dot-bg";
import { FiArrowRight } from "react-icons/fi";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center px-6 py-20 transition-colors duration-300">
      <DotGrid
        dotSize={4}
        gap={32}
        baseColor="#39393f"
        activeColor="#02a0ff"
        proximity={150}
        speedTrigger={100}
        shockRadius={250}
        shockStrength={5}
        className="opacity-[0.5] dark:opacity-50"
      />
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-4 mb-4">
          <ProfileImage src="/profile.jpg" alt={t("hero.name")} />
          <IntroText greeting={t("hero.greeting")} name={t("hero.name")} />
        </div>

        <div className="mb-12">
          <HeroTitle title={t("hero.title")} />
        </div>

        <AnimatedButton
          text={t("hero.cta")}
          href="#services"
          icon={<FiArrowRight />}
          variant="outline"
          delay={0.75}
          className="font-(--font-aldrich)"
        />
      </div>
    </section>
  );
}
