export type ProjectMetric = { label: string; value: string; detail?: string };

export type GalleryImage = {
  src: string;
  title: string;
  group?: string;
};

export type ProjectVideo = {
  src: string;
  title: string;
};

export type ProjectSection = {
  title: string;
  body: string;
  bullets?: string[];
};

export type Project = {
  slug: string;
  order: number;
  featured: boolean;
  name: string;
  tagline: string;
  category: string;
  categoryGroup: "Product" | "Marketing" | "Brand" | "Process";
  role: string;
  timeline: string;
  tools: string[];
  problem: string;
  summary: string;
  metrics: ProjectMetric[];
  highlights: string[];
  process: ProjectSection[];
  outcomes: ProjectSection[];
  deliverables: string[];
  proves: string;
  coverImage: string;
  gallery: GalleryImage[];
  videos?: ProjectVideo[];
  accent: string;
  accentMuted: string;
};
