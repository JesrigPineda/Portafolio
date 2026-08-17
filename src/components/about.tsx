"use client";

import { siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function About() {
  const { language } = useLanguage();
  const copy = siteContent[language].about;

  return (
    <section id="about" className="section-shell">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <p className="section-copy mt-5">{copy.copy}</p>
      <div className="about-process mt-8 grid gap-3 sm:grid-cols-3">
        {copy.focusAreas.map((area) => (
          <article key={area.step} className="about-step soft-card rounded-xl p-5">
            <span className="about-step__number" aria-hidden="true">{area.step}</span>
            <h3 className="mt-6 text-base font-bold text-primary">{area.title}</h3>
            <p className="mt-3 text-sm leading-6 text-secondary">{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
