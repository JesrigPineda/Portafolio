import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePage } from "@/components/case-page";
import { JsonLd } from "@/components/json-ld";
import { getAllProjects, getProjectBySlug, type ProjectSlug } from "../../../../content/projects";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { robots: { index: false, follow: true }, alternates: { canonical: null } };
  const description = project.caseStudy.es.thesis;
  const image = { url: `/projects/${slug}/opengraph-image`, width: 1200, height: 630, alt: `${project.title} — Prototipo personal de Jesrig Pineda` };
  return {
    title: project.title,
    description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.title} | Jesrig Pineda`,
      description,
      url: `/projects/${slug}`,
      type: "article",
      siteName: "Jesrig Pineda",
      locale: "es_MX",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Jesrig Pineda`,
      description,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <>
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": `https://jesrig.dev/projects/${slug}#source`,
      name: project.title,
      description: project.caseStudy.es.thesis,
      genre: "Prototipo personal",
      url: `https://jesrig.dev/projects/${slug}`,
      author: { "@type": "Person", "@id": "https://jesrig.dev/#person", name: "Jesrig Pineda", url: "https://jesrig.dev/" },
      codeRepository: project.links.repository,
      programmingLanguage: project.technologies.filter((technology) => ["TypeScript", "JavaScript"].includes(technology)),
    }} />
    <CasePage slug={slug as ProjectSlug} />
  </>;
}
