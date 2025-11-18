export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  logo: {
    src: string;
    alt: string;
  };
  links?: NavLink[];
  languageSelector?: boolean;
}

export interface NavbarState {
  isScrolled: boolean;
}
