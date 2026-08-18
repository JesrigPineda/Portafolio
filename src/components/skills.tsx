"use client";

import { siteContent, skillGroups } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Skills() {
  const { language } = useLanguage();
  const copy = siteContent[language].about;

  return (
    <section id="about" className="section-shell about-section">
      <div className="about-copy">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title">{copy.title}</h2>
        <p className="section-copy">{copy.copy}</p>
        <ul className="principles-list" aria-label={language === "es" ? "Principios de trabajo" : "Working principles"}>
          {copy.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>

      <div className="stack-list" id="skills">
        {skillGroups[language].map((group) => (
          <article key={group.title} className="stack-row">
            <h3>{group.title}</h3>
            <p>{group.items.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
