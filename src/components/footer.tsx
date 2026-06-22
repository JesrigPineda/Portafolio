"use client";

import { siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="flex flex-col gap-2 border-t border-[var(--line)] py-8 text-sm text-tertiary sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Jesrig Pineda.</p>
      <p>{siteContent[language].footer}</p>
    </footer>
  );
}
