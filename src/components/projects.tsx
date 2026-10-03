"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";
import { siteContent } from "@/data/site";
import { getFeaturedProjects } from "../../content/projects";
import type { HomeVisualKind } from "../../content/projects/types";

function ProjectDiagram({ kind, labels }: { kind: HomeVisualKind; labels: string[] }) {
  if (kind === "commerce") {
    return (
      <div className="selected-work-diagram diagram-commerce" aria-hidden="true">
        {labels.map((label) => <span className="diagram-node" key={label}>{label}</span>)}
      </div>
    );
  }

  if (kind === "health") {
    return (
      <div className="selected-work-diagram diagram-health" aria-hidden="true">
        <div className="diagram-health-sources">
          {labels.slice(0, 3).map((label) => <span className="diagram-node" key={label}>{label}</span>)}
        </div>
        <svg className="diagram-health-connections" viewBox="0 0 100 30" preserveAspectRatio="none" focusable="false" aria-hidden="true">
          <path d="M16 0 L50 30 M50 0 L50 30 M84 0 L50 30" />
        </svg>
        <span className="diagram-node diagram-core">{labels[3]}</span>
        <span className="diagram-stem" />
        <span className="diagram-node diagram-result">{labels[4]}</span>
      </div>
    );
  }

  return (
    <div className="selected-work-diagram diagram-agent" aria-hidden="true">
      <span className="diagram-node diagram-person">{labels[0]}</span>
      <span className="diagram-stem" />
      <span className="diagram-node diagram-core">{labels[1]}</span>
      <div className="diagram-agent-branches">
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" focusable="false" aria-hidden="true">
          <path d="M50 0 L25 30 M50 0 L75 30" />
        </svg>
        <span className="diagram-node">{labels[2]}</span>
        <span className="diagram-node">{labels[3]}</span>
      </div>
    </div>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const copy = siteContent[language].projects;

  return (
    <section id="projects" className="section-shell projects-section">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="selected-work-list">
        {getFeaturedProjects().map((project, index) => {
          const { slug } = project;
          const homeVisual = project.visual.home;
          if (!homeVisual) return null;
          return (
            <article className={`selected-work selected-work-${slug}`} key={slug} aria-labelledby={`selected-${slug}`}>
              <div className="selected-work-visual" role="img" aria-label={homeVisual.description[language]}>
                <span className="selected-work-visual-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <ProjectDiagram kind={homeVisual.kind} labels={homeVisual.labels[language]} />
              </div>

              <div className="selected-work-content">
                <h3 id={`selected-${slug}`}>{project.title}</h3>
                <p className="selected-work-summary">{project.summary[language]}</p>
                <p className="selected-work-category">{project.category[language]}</p>
                <a className="selected-work-link" href={`/projects/${slug}`}>
                  {copy.viewProject} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
