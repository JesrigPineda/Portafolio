"use client";

import { siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Jesrig Pineda</p>
      <p>{siteContent[language].footer}</p>
    </footer>
  );
}
