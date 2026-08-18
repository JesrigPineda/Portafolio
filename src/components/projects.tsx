"use client";

import type { CSSProperties } from "react";
import { projects, siteContent, type Project } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

function ArchitectureFlow({ steps, label }: { steps: string[]; label: string }) {
  return (
    <div className="architecture-block">
      <p className="project-label">{label}</p>
      <ol className="architecture-flow" aria-label={label}>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { language } = useLanguage();
  const copy = siteContent[language].projects;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={index === 0 ? "project-card project-card-featured" : "project-card"}
      style={{ "--card-delay": `${index * 70}ms` } as CSSProperties & Record<"--card-delay", string>}
    >
      <div className="project-topline">
        <span className="project-number">{number}</span>
        {project.status ? <span className="project-status">{copy.status[project.status]}</span> : null}
      </div>

      <div className="project-main">
        <div className="project-heading">
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
        </div>

        <div className="project-details">
          <div>
            <p className="project-label">{copy.solution}</p>
            <p className="project-solution">{project.solution}</p>
          </div>

          {project.architecture?.length ? (
            <ArchitectureFlow steps={project.architecture} label={copy.architecture} />
          ) : null}

          {project.impact ? (
            <div>
              <p className="project-label">{copy.impact}</p>
              <p className="project-solution">{project.impact}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="project-footer">
        <div className="project-stack">
          <span className="project-label">{copy.stack}</span>
          <p>{project.stack.join(" · ")}</p>
        </div>

        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            {copy.github} <span aria-hidden="true">↗</span>
          </a>
          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              {copy.demo} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const copy = siteContent[language].projects;

  return (
    <section id="projects" className="section-shell projects-section">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="projects-list">
        {projects[language].map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
