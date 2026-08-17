"use client";

import { useEffect, useState } from "react";

type RotatingRoleProps = {
  roles: readonly string[];
  compact?: boolean;
};

export function RotatingRole({ roles, compact = false }: RotatingRoleProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleRole = roles[activeIndex % roles.length];

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || roles.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [roles]);

  return (
    <span
      className={`rotating-role ${compact ? "rotating-role--compact" : ""}`}
      aria-label={roles.join(", ")}
    >
      <span key={visibleRole} className="rotating-role__text" aria-hidden="true">
        {visibleRole}
      </span>
    </span>
  );
}
