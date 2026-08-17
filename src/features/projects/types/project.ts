export type ProjectStatus = 'released' | 'in-development' | 'cancelled';
export type ProjectCategory = 'professional' | 'personal';
export type MarqueeVariant = 'grid' | 'stripes' | 'dots' | 'rings' | 'blocks' | 'diagonal';

export type MarqueeArt = {
  variant: MarqueeVariant;
  label?: string;
  imageUrl?: string;
};

export type ProjectMediaItem =
  | { kind: 'pattern'; variant: MarqueeVariant; label?: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; source: 'local'; alt?: string }
  | { kind: 'video'; src: string; source: 'youtube'; alt?: string };

export type ProjectSection = {
  heading: string;
  body: string;
};

export type Project = {
  id: string;
  title: string;
  company: string;
  category: ProjectCategory;
  summary: string;
  role: string;
  year: string;
  status: ProjectStatus;
  marquee: MarqueeArt;
  media?: ProjectMediaItem[];
  copyrightNotice?: string;
  skills?: string[];
  sections: ProjectSection[];
  links?: {
    label: string;
    href: string;
  }[];
};
