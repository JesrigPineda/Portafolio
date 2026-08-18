"use client";

import { links, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { language } = useLanguage();
  const copy = siteContent[language].hero;

  return (
    <section id="home" className="hero-section section-shell section-visible">
      <div className="hero-intro">
        <p className="hero-role">{copy.role}</p>
        <p className="hero-specialization">{copy.specialization}</p>
      </div>

      <h1 className="hero-title">{copy.headline}</h1>
      <p className="hero-copy">{copy.subheadline}</p>

      <div className="hero-actions">
        <a href="#projects" className="button button-primary">
          {copy.projects}
          <span aria-hidden="true">↓</span>
        </a>
        <a
          href={links.cv}
          className="button button-secondary"
          target="_blank"
          rel="noreferrer"
          aria-label={copy.cvLabel}
        >
          {copy.cv}
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="hero-foot">
        <div className="hero-socials" aria-label={language === "es" ? "Perfiles profesionales" : "Professional profiles"}>
          <a href={links.github} target="_blank" rel="noreferrer">
            {copy.github} <span aria-hidden="true">↗</span>
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            {copy.linkedin} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <a href="#projects" className="scroll-cue">
          <span>{copy.scroll}</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
