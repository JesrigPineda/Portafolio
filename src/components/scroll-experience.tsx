"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollExperience() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".motion-reveal, .motion-card, .motion-contact, .motion-flow"));
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
      } else if ("IntersectionObserver" in window) {
        const visible = targets.filter((target) => {
          const bounds = target.getBoundingClientRect();
          return bounds.bottom > 0 && bounds.top < window.innerHeight * 0.92;
        });
        visible.forEach((target) => target.classList.add("is-revealed"));
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.01 });
        targets.filter((target) => !target.classList.contains("is-revealed")).forEach((target) => observer?.observe(target));
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
