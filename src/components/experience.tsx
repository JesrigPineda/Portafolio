"use client";

import { useEffect, useRef } from "react";
import { experience, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  const { language } = useLanguage();
  const copy = siteContent[language].experience;
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const entries = Array.from(panel.querySelectorAll<HTMLElement>(".experience-entry"));
    const motionLayout = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let observer: IntersectionObserver | undefined;

    const configure = () => {
      observer?.disconnect();
      entries.forEach((entry) => entry.removeAttribute("data-active"));
      if (!motionLayout.matches) return;

      const visible = new Set<HTMLElement>();
      observer = new IntersectionObserver((changes) => {
        changes.forEach(({ target, isIntersecting }) => {
          const entry = target as HTMLElement;
          if (isIntersecting) visible.add(entry);
          else visible.delete(entry);
        });

        const center = window.innerHeight / 2;
        const active = [...visible].sort((a, b) => {
          const aRect = a.getBoundingClientRect();
          const bRect = b.getBoundingClientRect();
          return Math.abs((aRect.top + aRect.bottom) / 2 - center) - Math.abs((bRect.top + bRect.bottom) / 2 - center);
        })[0];
        entries.forEach((entry) => {
          if (entry === active) entry.dataset.active = "true";
          else entry.removeAttribute("data-active");
        });
      }, { rootMargin: "-25% 0px -25% 0px", threshold: 0 });
      entries.forEach((entry) => observer?.observe(entry));
    };

    configure();
    motionLayout.addEventListener("change", configure);
    return () => {
      observer?.disconnect();
      motionLayout.removeEventListener("change", configure);
    };
  }, []);

  return (
    <section id="experience" className="section-shell experience-section" aria-labelledby="experience-title">
      <div className="experience-panel" ref={panelRef}>
        <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} id="experience-title" />

        <div className="experience-list">
          {experience[language].map((item) => (
            <article key={`${item.company}-${item.role}`} className="experience-entry">
              <p className="experience-period">{item.period}</p>
              <div className="experience-content">
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-contribution">{item.homeSummary}</p>
                {item.homeHighlights && (
                  <ul className="experience-highlights">
                    {item.homeHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
