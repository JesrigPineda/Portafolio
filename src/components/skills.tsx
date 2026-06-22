"use client";

import { siteContent, skillGroups } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Skills() {
  const { language } = useLanguage();
  const copy = siteContent[language].skills;
  const groups = skillGroups[language];

  return (
    <section id="skills" className="section-shell">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {groups.map((group) => (
          <article key={group.title} className="soft-card rounded-xl p-5">
            <h3 className="text-base font-bold text-primary">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="chip rounded px-2 py-1 text-xs font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
