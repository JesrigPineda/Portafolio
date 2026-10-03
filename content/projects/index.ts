import { commerceOps } from "./commerce-ops";
import { healthMonitor } from "./health-monitor";
import { originaLeadAgent } from "./origina-lead-agent";
import type { Project } from "./types";

export type { Project, ProjectSlug } from "./types";

const projects: Project[] = [commerceOps, healthMonitor, originaLeadAgent];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featuredOrder !== undefined)
    .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
