import { BadgeProps } from "@/types/carousel.types";

export function Badge({ label, variant }: BadgeProps) {
  const variantStyles = {
    soft: "border-primary text-primary hover:border-primary/80 hover:bg-primary/10",
    hard: "bg-primary text-primary-foreground hover:bg-primary/90",
  };

  return (
    <span
      className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full transition-all cursor-default ${
        variant === "soft" ? "border " + variantStyles.soft : variantStyles.hard
      }`}
    >
      {label}
    </span>
  );
}
