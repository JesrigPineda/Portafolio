"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import jesrigAvatar from "@/img/Jesrig.jpg";
import { navItems, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const { language, theme, toggleLanguage, toggleTheme } = useLanguage();
  const items = navItems[language];
  const copy = siteContent[language].header;

  useEffect(() => {
    const sections = ["#home", ...items.map((item) => item.href)]
      .map((hash) => document.querySelector<HTMLElement>(hash))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -62%", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <a href="#content" className="skip-link">
        {copy.skip}
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          <a href="#home" className="brand" aria-label={copy.home} onClick={() => setIsOpen(false)}>
            <Image
              src={jesrigAvatar}
              alt=""
              className="brand-avatar"
              sizes="32px"
              priority
            />
            <span>Jesrig Pineda</span>
          </a>

          <div className="desktop-nav">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHash === item.href ? "nav-link is-active" : "nav-link"}
                aria-current={activeHash === item.href ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button type="button" className="control-button language-button" onClick={toggleLanguage}>
              <span aria-hidden="true">{language === "es" ? "EN" : "ES"}</span>
              <span className="sr-only">
                {language === "es" ? "Switch to English" : "Cambiar a español"}
              </span>
            </button>
            <button
              type="button"
              className="control-button theme-button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? copy.themeLight : copy.themeDark}
            >
              <span className="theme-glyph" aria-hidden="true">
                {theme === "dark" ? "☼" : "◐"}
              </span>
            </button>
            <button
              type="button"
              className="menu-button"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span>{isOpen ? copy.close : copy.menu}</span>
              <span className={isOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </nav>

        <div id="mobile-navigation" className={isOpen ? "mobile-nav is-open" : "mobile-nav"}>
          <div className="mobile-nav-inner">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeHash === item.href ? "mobile-nav-link is-active" : "mobile-nav-link"}
                aria-current={activeHash === item.href ? "location" : undefined}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
