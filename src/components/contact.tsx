"use client";

import { links, siteContent, type Language } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

const contactLinks: Record<Language, { label: string; href: string }[]> = {
  es: [
    { label: "Contactar en LinkedIn", href: links.linkedin },
    { label: "Ver GitHub", href: links.github },
    { label: "Seguir en X", href: links.x },
  ],
  en: [
    { label: "Contact on LinkedIn", href: links.linkedin },
    { label: "View GitHub", href: links.github },
    { label: "Follow on X", href: links.x },
  ],
};

export function Contact() {
  const { language } = useLanguage();
  const copy = siteContent[language].contact;
  const contactOptions = contactLinks[language];

  return (
    <section id="contact" className="section-shell pb-12">
      <div className="soft-card rounded-xl p-6">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title">{copy.title}</h2>
        <p className="section-copy mt-4">{copy.copy}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {contactOptions.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="button-secondary rounded-md px-4 py-2 text-center text-sm font-semibold"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
