import { ProjectInfoProps } from "@/types/carousel.types";
import { Badge } from "./Badge";

export function ProjectInfo({
  title,
  name,
  softSkills,
  hardSkills
}: ProjectInfoProps) {
  return (
    <div className="mt-8 space-y-2 pb-5">
      <h3 className="text-xl md:text-2xl font-bold leading-tight text-foreground max-w-md">
        {title}
      </h3>
      <p className="text-sm font-bold tracking-widest text-foreground/50 uppercase">
        {name}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {softSkills.map((skill, index) => (
          <Badge key={`soft-${index}`} label={skill} variant="soft" />
        ))}
        {hardSkills.map((skill, index) => (
          <Badge key={`hard-${index}`} label={skill} variant="hard" />
        ))}
      </div>
    </div>
  );
}
