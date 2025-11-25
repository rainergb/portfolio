import { AboutTextProps } from "@/types/about.types";

export function AboutText({ content }: AboutTextProps) {
  return (
    <div className="space-y-4">
      <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
        {content}
      </p>
    </div>
  );
}
