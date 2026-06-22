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
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {copy.focusAreas.map((area) => (
          <div key={area} className="soft-card rounded-xl p-4">
            <h3 className="text-sm font-bold text-primary">{area}</h3>
            <p className="mt-2 text-xs leading-5 text-tertiary">{copy.cardCopy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
