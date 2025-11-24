import { ProjectInfoProps } from "@/types/carousel.types";

export function ProjectInfo({ title, name, badges }: ProjectInfoProps) {
  return (
    <div className="mt-8 space-y-2 pb-5">
      <h3 className="text-2xl md:text-3xl font-bold leading-tight text-foreground max-w-md">
        {title}
      </h3>
      <p className="text-sm font-bold tracking-widest text-foreground/50 uppercase">
        {name}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider border border-foreground/20 rounded-full hover:border-foreground/50 hover:bg-foreground/5 transition-all cursor-default"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
