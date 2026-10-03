"use client";

import { siteContent, skillGroups } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Skills() {
  const { language } = useLanguage();
  const copy = siteContent[language].about;

  return (
    <section id="about" className="section-shell about-section" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="about-title" className="section-title">{copy.title}</h2>
        <p className="section-copy">{copy.copy}</p>
      </div>

      <section className="stack-column" id="skills" aria-labelledby="stack-title">
        <h3 id="stack-title">{copy.stack}</h3>
        <dl className="stack-list">
          {skillGroups[language].map((group) => (
            <div key={group.title} className="stack-row">
              <dt>{group.title}</dt>
              <dd>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </section>
  );
}
