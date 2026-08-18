"use client";

import { links, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Contact() {
  const { language } = useLanguage();
  const copy = siteContent[language].contact;

  return (
    <section id="contact" className="section-shell contact-section">
      <p className="eyebrow">{copy.eyebrow}</p>
      <h2>{copy.title}</h2>
      <p>{copy.copy}</p>
      <div className="contact-actions">
        <a href={links.linkedin} target="_blank" rel="noreferrer" className="button button-inverse">
          {copy.linkedin} <span aria-hidden="true">↗</span>
        </a>
        <a href={links.github} target="_blank" rel="noreferrer" className="contact-link">
          {copy.github} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
