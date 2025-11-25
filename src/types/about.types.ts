export interface AboutTitleProps {
  title: string;
  subtitle: string;
}

export interface AboutTextProps {
  content: string;
}

export interface AboutContentProps {
  avatarUrl: string;
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  textContent: string;
  onContactClick?: () => void;
}

export interface AboutMeProps {
  title: string;
  subtitle: string;
  avatarUrl: string;
  name: string;
  jobTitle: string;
  handle: string;
  status: string;
  contactText: string;
  description: string;
  onContactClick?: () => void;
}
