"use client";

import type { CSSProperties } from "react";
import { experience, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Experience() {
  const { language } = useLanguage();
  const copy = siteContent[language].experience;
  const experienceItems = experience[language];

  return (
    <section id="experience" className="section-shell">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="experience-timeline mt-10">
        {experienceItems.map((item, index) => (
          <article
            key={`${item.company}-${item.role}-${item.period}`}
            className="experience-entry"
            style={{ "--entry-delay": `${index * 90}ms` } as CSSProperties & Record<"--entry-delay", string>}
          >
            <div className="experience-date" aria-label={item.period}>
              <span>{item.period}</span>
            </div>

            <div className="experience-node" aria-hidden="true" />

            <div className="experience-card soft-card">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-primary">{item.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-tertiary">{item.company}</p>
                </div>
                <span className="experience-mobile-date surface-glass w-fit rounded-full px-3 py-1 text-xs font-bold text-tertiary">
                  {item.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-secondary">{item.description}</p>

              {item.highlights?.length ? (
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-secondary">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="experience-highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}

              {item.stack?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((technology) => (
                    <span key={technology} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                      {technology}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
