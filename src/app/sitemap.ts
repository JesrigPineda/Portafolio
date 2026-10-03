import type { MetadataRoute } from "next";
import { getAllProjects } from "../../content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://jesrig.dev/" },
    ...getAllProjects().map((project) => ({ url: `https://jesrig.dev/projects/${project.slug}` })),
    { url: "https://jesrig.dev/about" },
  ];
}
