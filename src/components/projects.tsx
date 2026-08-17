"use client";

import { projects, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

type ProjectVisualKind = "commerce" | "approval" | "monitor" | "agent";

function ProjectVisual({
  kind,
  language,
}: {
  kind: ProjectVisualKind;
  language: "es" | "en";
}) {
  if (kind === "commerce") {
    return (
      <div className="project-system project-system--commerce" aria-hidden="true">
        <div className="project-system__topline">
          <span>shopify.orders/create</span>
          <span className="project-system__live">verified</span>
        </div>
        <div className="project-flow">
          <span>Webhook</span><i />
          <span>HMAC</span><i />
          <span>SalesOrder</span><i />
          <span>Firestore</span>
        </div>
        <div className="project-system__footer">
          <span>idempotency_key</span>
          <strong>evt_01HQ92</strong>
        </div>
      </div>
    );
  }

  if (kind === "approval") {
    return (
      <div className="project-system project-system--approval" aria-hidden="true">
        <div className="project-system__topline">
          <span>REQ-1042</span>
          <span className="project-system__live">in review</span>
        </div>
        <div className="approval-route">
          <span className="approval-route__done">Request</span>
          <i />
          <span className="approval-route__active">Manager</span>
          <i />
          <span>Finance</span>
        </div>
        <div className="project-system__footer">
          <span>audit events</span>
          <strong>04</strong>
        </div>
      </div>
    );
  }

  if (kind === "monitor") {
    return (
      <div className="project-system project-system--monitor" aria-hidden="true">
        <div className="project-system__topline">
          <span>endpoint health</span>
          <span>last 15 min</span>
        </div>
        <div className="monitor-list">
          <div><span>shopify-webhook</span><i /><strong>184 ms</strong></div>
          <div><span>crm-sync</span><i /><strong>231 ms</strong></div>
          <div className="monitor-list__incident"><span>billing-api</span><i /><strong>incident</strong></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-system project-system--agent" aria-hidden="true">
      <div className="project-system__topline">
        <span>local lead agent</span>
        <span className="project-system__live">ollama</span>
      </div>
      <div className="agent-thread">
        <p>
          {language === "es"
            ? "Necesito automatizar mi seguimiento comercial."
            : "I need to automate my sales follow-up."}
        </p>
        <p>{`{ "intent": "qualified", "handoff": true }`}</p>
      </div>
      <div className="project-system__footer">
        <span>memory + tools</span>
        <strong>traceable</strong>
      </div>
    </div>
  );
}

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
          <article className="project-card project-card--featured soft-card" key={featuredProject.title}>
            <div className="project-media project-media--featured">
              <ProjectVisual kind={featuredProject.visual} language={language} />
            </div>

            <div className="project-content">
              <div className="flex flex-wrap items-center gap-2">
                <p className="eyebrow">{copy.cardLabel}</p>
                <span className={`project-status project-status--${featuredProject.status}`}>
                  {copy.status[featuredProject.status]}
                </span>
                <span className="project-year">{featuredProject.year}</span>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-normal text-primary sm:text-3xl">
                {featuredProject.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-secondary">{featuredProject.summary}</p>
              <p className="project-role mt-4">{featuredProject.role}</p>

              <div className="case-study-grid mt-7">
                <div>
                  <p className="case-study-label">{copy.problemLabel}</p>
                  <p>{featuredProject.problem}</p>
                </div>
                <div>
                  <p className="case-study-label">{copy.solutionLabel}</p>
                  <p>{featuredProject.solution}</p>
                </div>
                <div>
                  <p className="case-study-label">{copy.outcomeLabel}</p>
                  <p>{featuredProject.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={featuredProject.href}
                className="project-link mt-7 inline-flex text-sm font-semibold text-primary"
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
            <article key={project.title} className="project-card soft-card">
              <div className="project-media">
                <ProjectVisual kind={project.visual} language={language} />
              </div>

              <div className="project-content">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="eyebrow">{copy.projectLabel}</p>
                  <span className={`project-status project-status--${project.status}`}>
                    {copy.status[project.status]}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold tracking-normal text-primary">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{project.summary}</p>
                <p className="project-role mt-4">{project.role}</p>

                <div className="project-story mt-5">
                  <p><strong>{copy.problemLabel}:</strong> {project.problem}</p>
                  <p><strong>{copy.solutionLabel}:</strong> {project.solution}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span key={item} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  className="project-link mt-6 inline-flex text-sm font-semibold text-primary"
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
