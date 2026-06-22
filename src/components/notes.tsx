"use client";

import { articles, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import { SectionHeader } from "@/components/section-header";

export function Notes() {
  const { language } = useLanguage();
  const copy = siteContent[language].notes;
  const articleItems = articles[language];

  return (
    <section id="notes" className="section-shell">
      <SectionHeader eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <div className="mt-8 grid gap-3">
        {articleItems.map((article) => {
          const cardContent = (
            <>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-quaternary">{article.date}</p>
                <h3 className="mt-2 text-lg font-bold text-primary">{article.title}</h3>
                <p className="mt-3 text-sm leading-6 text-secondary">{article.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="chip rounded px-2 py-1 text-[0.7rem] font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="surface-glass mt-5 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold text-tertiary">
                {article.url ? "Hashnode" : copy.cta}
              </span>
            </>
          );

          return article.url ? (
            <a
              key={article.title}
              href={article.url}
              className="soft-card group rounded-xl p-5"
              target="_blank"
              rel="noreferrer"
            >
              {cardContent}
            </a>
          ) : (
            <article key={article.title} className="soft-card rounded-xl p-5">
              {cardContent}
            </article>
          );
        })}
      </div>
    </section>
  );
}
