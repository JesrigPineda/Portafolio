"use client";

import { siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { language } = useLanguage();
  const copy = siteContent[language].hero;

  return (
    <section id="home" className="section-shell hero-section">
      <div>
        <h1 className="text-[clamp(2.85rem,13vw,4.5rem)] font-semibold leading-none tracking-normal text-primary sm:text-7xl">
          {copy.title}
        </h1>
        <p className="mt-4 text-[clamp(1.45rem,7vw,2.25rem)] font-semibold leading-none text-tertiary sm:text-4xl">
          {copy.role}
        </p>

        <p className="mt-10 max-w-3xl text-[clamp(1.85rem,8vw,3rem)] font-semibold leading-tight tracking-normal text-primary sm:mt-12 sm:text-5xl">
          {copy.headline}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-secondary">
          {copy.subheadline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {copy.actions.map((action, index) => (
            <a
              key={action.label}
              href={action.href}
              className={
                index === 0
                  ? "button-primary rounded-full px-5 py-2.5 text-center text-sm font-semibold shadow-sm hover:-translate-y-0.5 hover:shadow-lg"
                  : "button-secondary rounded-full px-5 py-2.5 text-center text-sm font-semibold hover:-translate-y-0.5"
              }
            >
              {action.label}
            </a>
          ))}
        </div>

        <div className="hero-stats" aria-label={language === "es" ? "Resumen profesional" : "Professional summary"}>
          {copy.stats.map((stat) => (
            <div key={stat.value} className="hero-stat">
              <span className="hero-stat__value">{stat.value}</span>
              <span className="hero-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <a href="#about" className="hero-cue mt-14" aria-label={copy.scrollLabel}>
          <span>{copy.scrollLabel}</span>
          <span aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
