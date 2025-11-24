"use client";
import { CarouselProps } from "@/types/carousel.types";
import DotGrid from "@/components/ui/dot-bg";
import TiltedCard from "@/components/TiltedCard";
import { useLanguage } from "@/contexts/LanguageContext";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { CarouselControls } from "@/components/carousel/CarouselControls";
import { ProjectInfo } from "@/components/carousel/ProjectInfo";
import { getPortfolioData } from "@/mocks/projects";

export function Carousel({}: CarouselProps) {
  const { t } = useLanguage();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps"
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setTimeout(onSelect, 0);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const portfolioData = getPortfolioData(t);

  return (
    <section className="relative bg-background flex items-center justify-center py-20 transition-colors duration-300 overflow-hidden">
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
      <div className="relative z-10 w-full">
        <div className="relative w-full">
          <h2 className="absolute left-10 top-6 h-full flex items-center justify-end pt-40 text-3xl md:text-3xl font-bold whitespace-nowrap [writing-mode:vertical-lr] rotate-180 z-0 pointer-events-none select-none text-foreground/20">
            {t("carousel.title")}
          </h2>

          <div className="w-full relative z-10">
            <div className="w-full">
              <CarouselControls
                canScrollPrev={canScrollPrev}
                canScrollNext={canScrollNext}
                onPrev={scrollPrev}
                onNext={scrollNext}
              />
              <div
                className="overflow-hidden w-full pl-4 md:pl-26"
                ref={emblaRef}
              >
                <div className="flex gap-6">
                  {portfolioData.map((project, index) => {
                    const isActive = index === 0 && hoveredIndex === null;
                    const isHovered = index === hoveredIndex;
                    return (
                      <div
                        key={project.id}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`shrink-0 w-80 transition-all duration-900 ease-out cursor-pointer group ${
                          isActive || isHovered
                            ? "scale-105 z-20"
                            : "scale-90 z-0"
                        }`}
                      >
                        <div
                          className={`transition-all duration-700 ease-out ${
                            isActive || isHovered
                              ? "drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                              : ""
                          }`}
                        >
                          <TiltedCard
                            imageSrc={project.imageSrc}
                            altText={project.altText || project.name}
                            captionText={project.name}
                            containerHeight={
                              isActive || isHovered ? "340px" : "320px"
                            }
                            containerWidth="100%"
                            imageHeight={
                              isActive || isHovered ? "340px" : "320px"
                            }
                            imageWidth="320px"
                            scaleOnHover={1.02}
                            rotateAmplitude={10}
                            showMobileWarning={false}
                            showTooltip={false}
                          />
                        </div>
                        <div
                          className={`transition-opacity duration-700 ease-out ${
                            isActive || isHovered ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <ProjectInfo
                            title={project.title}
                            name={project.name}
                            softSkills={project.softSkills}
                            hardSkills={project.hardSkills}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
