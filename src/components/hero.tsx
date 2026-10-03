"use client";

import { links, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { language } = useLanguage();
  const copy = siteContent[language].hero;

  return (
    <section id="home" className="hero-section section-shell section-visible" aria-labelledby="hero-title">
      <p className="hero-role">{copy.role}</p>
      <h1 id="hero-title" className="hero-title">{copy.headline}</h1>
      <p className="hero-copy">{copy.subheadline}</p>

      <div className="hero-actions">
        <a href="#projects" className="button button-primary">
          {copy.projects}
        </a>
        <a
          href={links.linkedin}
          className="button button-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.linkedin}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
