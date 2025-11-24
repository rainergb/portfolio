'use client';
import { CarouselProps, Skill } from '@/types/carousel.types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import DotGrid from "@/components/ui/dot-bg";
import TiltedCard from '@/components/TiltedCard';
import { useLanguage } from '@/contexts/LanguageContext';

export function Carousel({ }: CarouselProps) {
  const { t } = useLanguage();

  const portfolioData: Skill[] = [
    { 
      id: '1', 
      name: t('carousel.project1.name'),
      title: t('carousel.project1.title'),
      badges: t('carousel.project1.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project1.name')
    },
    { 
      id: '2', 
      name: t('carousel.project2.name'),
      title: t('carousel.project2.title'),
      badges: t('carousel.project2.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project2.name')
    },
    { 
      id: '3', 
      name: t('carousel.project3.name'),
      title: t('carousel.project3.title'),
      badges: t('carousel.project3.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project3.name')
    },
    { 
      id: '4', 
      name: t('carousel.project4.name'),
      title: t('carousel.project4.title'),
      badges: t('carousel.project4.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project4.name')
    },
    { 
      id: '5', 
      name: t('carousel.project5.name'),
      title: t('carousel.project5.title'),
      badges: t('carousel.project5.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project5.name')
    },
    { 
      id: '6', 
      name: t('carousel.project6.name'),
      title: t('carousel.project6.title'),
      badges: t('carousel.project6.badges').split(','),
      imageSrc: '/images.jpg', 
      altText: t('carousel.project5.name')
    },
  ];

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
      <div className="relative z-10 w-full overflow-hidden">
        <div className="flex items-start gap-12">
          <h2 className="text-3xl md:text-3xl font-bold whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
            {t('carousel.title')}
          </h2>

          <div className="flex-1 flex items-center gap-6">
            <button
              className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors duration-300 shrink-0"
              aria-label="Previous"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="flex gap-6">
                {portfolioData.map((project) => (
                  <div key={project.id} className="shrink-0 w-80">
                    <TiltedCard
                      imageSrc={project.imageSrc}
                      altText={project.altText || project.name}
                      captionText={project.name}
                      containerHeight="400px"
                      containerWidth="100%"
                      imageHeight="400px"
                      imageWidth="320px"
                      scaleOnHover={1.05}
                      rotateAmplitude={10}
                      showMobileWarning={false}
                      showTooltip={false}
                    />
                    <div className="mt-6 space-y-4">
                      <h3 className="text-xl font-normal leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm font-bold tracking-wider text-foreground/60">
                        {project.name}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.badges.map((badge, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium border border-foreground/20 rounded-full"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center transition-colors duration-300 shrink-0"
              aria-label="Next"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
