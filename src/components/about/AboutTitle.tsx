import { AboutTitleProps } from "@/types/about.types";

export function AboutTitle({ title, subtitle }: AboutTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold tracking-widest text-foreground/50 uppercase mb-4">
        {title}
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-foreground">
        {subtitle}
      </h3>
    </div>
  );
}
