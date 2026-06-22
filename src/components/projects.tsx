"use client";

import Image from "next/image";
import { projects, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";
import commerceImage from "@/img/projects/commerce-ops-webhook-bridge.webp";
import safepawsImage from "@/img/projects/safepaws.webp";
import turiImage from "@/img/projects/turi.webp";
import waterwatchImage from "@/img/projects/waterwatch.webp";

const projectImages = {
  commerce: commerceImage,
  safepaws: safepawsImage,
  turi: turiImage,
  waterwatch: waterwatchImage,
};

export function Projects() {
  const { language } = useLanguage();
  const copy = siteContent[language].projects;
  const projectItems = projects[language];
  const [featuredProject, ...secondaryProjects] = projectItems;

  return (
    <section id="projects" className="section-shell">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="projects-showcase mt-8">
        {featuredProject ? (
          <article className="project-card project-card--featured soft-card group" key={featuredProject.title}>
            <div className="project-media project-media--featured">
              <Image
                src={projectImages[featuredProject.image]}
                alt={featuredProject.imageAlt}
                className="project-image"
                sizes="(min-width: 900px) 760px, calc(100vw - 32px)"
                priority
              />
            </div>

            <div className="project-content">
              <div className="flex flex-wrap items-center gap-2">
                <p className="eyebrow">{copy.cardLabel}</p>
                <span className={`project-status project-status--${featuredProject.status}`}>
                  {copy.status[featuredProject.status]}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-normal text-primary sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">{featuredProject.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.stack.slice(0, 7).map((item) => (
                  <span key={item} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.href}
                className="project-link mt-6 inline-flex text-sm font-medium text-primary"
                target="_blank"
                rel="noreferrer"
              >
                {copy.github} <span aria-hidden="true" className="ml-2">-&gt;</span>
              </a>
            </div>
          </article>
        ) : null}

        <div className="projects-grid">
          {secondaryProjects.map((project) => (
            <article key={project.title} className="project-card soft-card group">
              <div className="project-media">
                <Image
                  src={projectImages[project.image]}
                  alt={project.imageAlt}
                  className="project-image"
                  sizes="(min-width: 900px) 360px, calc(100vw - 32px)"
                />
              </div>

              <div className="project-content">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="eyebrow">{copy.cardLabel}</p>
                  <span className={`project-status project-status--${project.status}`}>
                    {copy.status[project.status]}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-normal text-primary">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="project-link mt-5 inline-flex text-sm font-medium text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.github} <span aria-hidden="true" className="ml-2">-&gt;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
