"use client";

import { experience, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  const { language } = useLanguage();
  const copy = siteContent[language].experience;

  return (
    <section id="experience" className="section-shell experience-section" aria-labelledby="experience-title">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} id="experience-title" />

      <div className="experience-list">
        {experience[language].map((item) => (
          <article key={`${item.company}-${item.role}`} className="experience-entry motion-reveal">
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
    </section>
  );
}
