"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section-shell"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const updateScroll = () => {
      frame = 0;
      root.classList.toggle("is-scrolled", window.scrollY > 12);
      if (!preference.matches) {
        const scrollable = root.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
        root.style.setProperty("--scroll-progress", String(Math.min(Math.max(progress, 0), 1)));
      }
    };
    const scheduleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };
    const configureMotion = () => {
      observer?.disconnect();
      if (preference.matches) {
        root.classList.remove("motion-ready");
        root.style.removeProperty("--scroll-progress");
        sections.forEach((section) => section.classList.add("section-visible"));
      } else {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("section-visible");
              observer?.unobserve(entry.target);
            }
          });
        }, { rootMargin: "0px 0px -10%", threshold: 0.08 });
        sections.forEach((section) => observer?.observe(section));
        root.classList.add("motion-ready");
      }
      scheduleScroll();
    };

    configureMotion();
    preference.addEventListener("change", configureMotion);
    window.addEventListener("scroll", scheduleScroll, { passive: true });
    window.addEventListener("resize", scheduleScroll);

    return () => {
      observer?.disconnect();
      window.cancelAnimationFrame(frame);
      root.classList.remove("motion-ready");
      preference.removeEventListener("change", configureMotion);
      window.removeEventListener("scroll", scheduleScroll);
      window.removeEventListener("resize", scheduleScroll);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
