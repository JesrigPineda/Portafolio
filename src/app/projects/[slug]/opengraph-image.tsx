import { ImageResponse } from "next/og";
import { SocialImage } from "@/components/social-image";
import { getAllProjects, getProjectBySlug } from "../../../../content/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Prototipo personal de Jesrig Pineda";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return new Response("Not found", { status: 404 });
  return new ImageResponse(<SocialImage title={project.title} eyebrow="PROTOTIPO PERSONAL" description={project.category.es} />, size);
}
