import manifest from "./asset-manifest.json";
import type { GalleryImage, Project, ProjectVideo } from "./types";
import { projectDefinitions } from "./definitions";

type ManifestEntry = { file: string; title: string };
type ManifestMap = Record<string, ManifestEntry | ManifestEntry[]>;

export type ProjectListItem = Omit<Project, "gallery" | "videos">;

function normalizeEntries(entry: ManifestEntry | ManifestEntry[] | undefined): ManifestEntry[] {
  if (!entry) return [];
  return Array.isArray(entry) ? entry : [entry];
}

export function humanizeTitle(raw: string): string {
  return raw
    .replace(/[-_#]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function assetPath(folder: string, file: string): string {
  return `/work-assets/${folder}/${file.replace(/\\/g, "/")}`;
}

function buildGallery(folder: string, entries: ManifestEntry[]): GalleryImage[] {
  return entries
    .filter((e) => !/\.(webm|mp4)$/i.test(e.file))
    .map((e) => ({
      src: assetPath(folder, e.file),
      title: humanizeTitle(e.title),
      group: e.file.includes("/") ? humanizeTitle(e.file.split("/")[0]) : undefined,
    }));
}

const videoExtensions = [".webm", ".mp4"];

function buildVideos(folder: string, extra?: ProjectVideo[]): ProjectVideo[] {
  const entries = normalizeEntries((manifest as ManifestMap)[folder]);
  const fromFolder = entries
    .filter((e) => videoExtensions.some((ext) => e.file.toLowerCase().endsWith(ext)))
    .map((e) => ({
      src: assetPath(folder, e.file),
      title: humanizeTitle(e.title),
    }));
  const merged = [...fromFolder, ...(extra ?? [])];
  const seen = new Set<string>();
  return merged.filter((v) => {
    if (seen.has(v.src)) return false;
    seen.add(v.src);
    return true;
  });
}

function resolveCover(folder: string, entries: ManifestEntry[], coverFile?: string): string {
  if (coverFile != null) return assetPath(folder, coverFile);
  const firstImage = entries.find((e) => !/\.(webm|mp4)$/i.test(e.file));
  return firstImage ? assetPath(folder, firstImage.file) : "/images/placeholder.svg";
}

function buildListItem(def: (typeof projectDefinitions)[number]): ProjectListItem {
  const entries = normalizeEntries((manifest as ManifestMap)[def.assetFolder]);
  return {
    ...def,
    coverImage: resolveCover(def.assetFolder, entries, def.coverFile),
  };
}

function buildFullProject(def: (typeof projectDefinitions)[number]): Project {
  const entries = normalizeEntries((manifest as ManifestMap)[def.assetFolder]);
  return {
    ...def,
    coverImage: resolveCover(def.assetFolder, entries, def.coverFile),
    gallery: buildGallery(def.assetFolder, entries),
    videos: buildVideos(def.assetFolder, def.extraVideos),
  };
}

const projectList: ProjectListItem[] = projectDefinitions.map(buildListItem);

export function getProject(slug: string): Project | undefined {
  const def = projectDefinitions.find((p) => p.slug === slug);
  if (!def) return undefined;
  return buildFullProject(def);
}

export function getSortedProjects(): ProjectListItem[] {
  return [...projectList].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): ProjectListItem[] {
  return getSortedProjects().filter((p) => p.featured);
}

export function getHomeProjects(limit = 3): ProjectListItem[] {
  return getFeaturedProjects().slice(0, limit);
}

export function getProjectsByGroup(): Record<string, ProjectListItem[]> {
  const groups: Record<string, ProjectListItem[]> = {};
  for (const p of projectList) {
    if (!groups[p.categoryGroup]) groups[p.categoryGroup] = [];
    groups[p.categoryGroup].push(p);
  }
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) => a.order - b.order);
  }
  return groups;
}

export function getAllProjectSlugs(): string[] {
  return projectDefinitions.map((p) => p.slug);
}

/** @deprecated Use getAllProjectSlugs or getSortedProjects */
export const projects: ProjectListItem[] = projectList;

export type { Project, GalleryImage, ProjectVideo } from "./types";
