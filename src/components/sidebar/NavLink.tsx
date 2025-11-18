'use client';

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

export function NavLink({ href, label, isActive = false }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`relative text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 hover:text-foreground font-aldrich ${
        isActive ? 'text-foreground' : 'text-foreground/50'
      }`}
    >
      {label}
      {isActive && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#02a0ff]" />
      )}
    </a>
  );
}
