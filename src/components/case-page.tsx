"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { ProjectFlow } from "@/components/project-flow";
import { getAllProjects, getProjectBySlug, type ProjectSlug } from "../../content/projects";

const labels = {
  es: {
    back: "Volver a proyectos", type: "Tipo", focus: "Enfoque", overview: "En contexto",
    problem: "El problema", built: "Qué construí", architecture: "Cómo funciona",
    decisions: "Decisiones técnicas", tradeoff: "Límites del prototipo",
    demonstrates: "Qué demuestra", improvements: "Siguiente iteración", technology: "Tecnología",
    repository: "Ver código en GitHub", development: "Desarrollo asistido por IA para prototipado e implementación; arquitectura y decisiones técnicas revisadas iterativamente.",
    previous: "Proyecto anterior", next: "Siguiente proyecto", all: "Volver a proyectos", prototype: "Prototipo personal",
  },
  en: {
    back: "Back to projects", type: "Type", focus: "Focus", overview: "In context",
    problem: "The problem", built: "What I built", architecture: "How it works",
    decisions: "Technical decisions", tradeoff: "Prototype limits",
    demonstrates: "What it demonstrates", improvements: "Next iteration", technology: "Technology",
    repository: "View code on GitHub", development: "AI-assisted prototyping and implementation; architecture and technical decisions reviewed iteratively.",
    previous: "Previous project", next: "Next project", all: "Back to projects", prototype: "Personal prototype",
  },
} as const;

export function CasePage({ slug }: { slug: ProjectSlug }) {
  const { language } = useLanguage();
  const copy = labels[language];
  const projects = getAllProjects();
  const project = getProjectBySlug(slug);
  if (!project) return null;
  const item = project.caseStudy[language];
  const position = projects.findIndex((entry) => entry.slug === slug);
  const previous = position > 0 ? projects[position - 1] : null;
  const next = position < projects.length - 1 ? projects[position + 1] : null;

  return (
    <main id="content" tabIndex={-1} className={`case-page case-page--${project.visual.caseStudy} content-wrap`}>
      <Link className="case-back" href="/#projects"><span aria-hidden="true">←</span> {copy.back}</Link>

      <article>
        <header className="case-hero">
          <p className="eyebrow">{copy.prototype} <span aria-hidden="true">·</span> {project.category[language]}</p>
          <h1>{project.title}</h1>
          <p className="case-hero-lead">{item.thesis}</p>
          <a className="button button-primary case-github" href={project.links.repository} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <p className="case-hero-stack">{project.technologies.slice(0, 4).join(" · ")}</p>
        </header>

        <section className="case-overview" aria-labelledby="case-overview-title">
          <div>
            <p className="eyebrow">01 / {copy.overview}</p>
            <h2 id="case-overview-title">{copy.overview}</h2>
            <p>{item.context}</p>
          </div>
          <dl>
            <div><dt>{copy.type}</dt><dd>{copy.prototype}</dd></div>
            <div><dt>{copy.focus}</dt><dd>{project.category[language]}</dd></div>
          </dl>
        </section>

        <section className="case-section" aria-labelledby="case-problem-title">
          <div className="case-section-heading"><p className="eyebrow">02 / {copy.problem}</p><h2 id="case-problem-title">{copy.problem}</h2></div>
          <p className="case-reading">{item.problem}</p>
        </section>

        <section className="case-section" aria-labelledby="case-built-title">
          <div className="case-section-heading"><p className="eyebrow">03 / {copy.built}</p><h2 id="case-built-title">{copy.built}</h2></div>
          <ol className="case-built-list">
            {item.built.map((entry, index) => <li key={entry}><span>{String(index + 1).padStart(2, "0")}</span><p>{entry}</p></li>)}
          </ol>
        </section>

        <section className="case-architecture" aria-labelledby="case-architecture-title">
          <div className="case-section-heading"><p className="eyebrow">04 / {copy.architecture}</p><h2 id="case-architecture-title">{copy.architecture}</h2></div>
          <ProjectFlow kind={project.visual.caseStudy} steps={item.flow} label={copy.architecture} />
        </section>

        <section className="case-section" aria-labelledby="case-decisions-title">
          <div className="case-section-heading"><p className="eyebrow">05 / {copy.decisions}</p><h2 id="case-decisions-title">{copy.decisions}</h2></div>
          <ol className="case-decision-list">
            {item.decisions.map((decision, index) => <li key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{decision.title}</h3><p>{decision.detail}</p></li>)}
          </ol>
        </section>

        <section className="case-section" aria-labelledby="case-tradeoff-title">
          <div className="case-section-heading"><p className="eyebrow">06 / {copy.tradeoff}</p><h2 id="case-tradeoff-title">{copy.tradeoff}</h2></div>
          <p className="case-reading">{item.tradeoff}</p>
        </section>

        <section className="case-section" aria-labelledby="case-demonstrates-title">
          <div className="case-section-heading"><p className="eyebrow">07 / {copy.demonstrates}</p><h2 id="case-demonstrates-title">{copy.demonstrates}</h2></div>
          <ul className="case-plain-list">{item.demonstrates.map((entry) => <li key={entry}>{entry}</li>)}</ul>
        </section>

        <section className="case-section" aria-labelledby="case-improvements-title">
          <div className="case-section-heading"><p className="eyebrow">08 / {copy.improvements}</p><h2 id="case-improvements-title">{copy.improvements}</h2></div>
          <ul className="case-plain-list">{item.improvements.map((entry) => <li key={entry}>{entry}</li>)}</ul>
        </section>

        <section className="case-section case-technology" aria-labelledby="case-technology-title">
          <div className="case-section-heading"><p className="eyebrow">09 / {copy.technology}</p><h2 id="case-technology-title">{copy.technology}</h2></div>
          <p className="case-reading">{project.technologies.join(" · ")}</p>
        </section>

        <footer className="case-end">
          <p className="case-development-note">{copy.development}</p>
          <a className="case-repository-link" href={project.links.repository} target="_blank" rel="noopener noreferrer">{copy.repository} <span aria-hidden="true">↗</span></a>
          <nav className="case-pagination" aria-label={language === "es" ? "Navegación entre proyectos" : "Project navigation"}>
            {previous ? <Link href={`/projects/${previous.slug}`}><span>{copy.previous}</span><strong>← {previous.title}</strong></Link> : <span />}
            <Link href="/#projects" className="case-pagination-all"><span aria-hidden="true">←</span> {copy.all}</Link>
            {next ? <Link href={`/projects/${next.slug}`}><span>{copy.next}</span><strong>{next.title} →</strong></Link> : <span />}
          </nav>
        </footer>
      </article>
    </main>
  );
}
