import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CarouselControlsProps } from "@/types/carousel.types";

export function CarouselControls({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  return (
    <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between px-4 z-20 pointer-events-none">
      <button
        onClick={onPrev}
        disabled={!canScrollPrev}
        aria-label="Previous"
        className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 ${
          !canScrollPrev ? "opacity-0 cursor-not-allowed" : "opacity-100"
        }`}
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next"
        className={`pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm text-white hover:bg-white/10 hover:scale-110 transition-all duration-200 ${
          !canScrollNext ? "opacity-0 cursor-not-allowed" : "opacity-100"
        }`}
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
