"use client";

import { useEffect } from "react";

export function ScrollExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-shell"));
    const timelineEntries = Array.from(document.querySelectorAll<HTMLElement>(".experience-entry"));

    const updateProgress = () => {
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--scroll-progress", `${Math.min(progress, 1) * 100}%`);
      root.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");

            if (entry.target.id === "experience") {
              timelineEntries.forEach((timelineEntry) => timelineEntry.classList.add("section-visible"));
            }
          }
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => observer.observe(section));
    timelineEntries.forEach((entry) => observer.observe(entry));
    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span />
    </div>
  );
}
