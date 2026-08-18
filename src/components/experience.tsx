"use client";

import type { CSSProperties } from "react";
import { experience, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  const { language } = useLanguage();
  const copy = siteContent[language].experience;

  return (
    <section id="experience" className="section-shell experience-section">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="experience-list">
        {experience[language].map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="experience-entry"
            style={{ "--entry-delay": `${index * 70}ms` } as CSSProperties & Record<"--entry-delay", string>}
          >
            <p className="experience-period">{item.period}</p>
            <div className="experience-content">
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
