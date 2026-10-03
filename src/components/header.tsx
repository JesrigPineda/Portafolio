"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import jesrigAvatar from "@/img/Jesrig.jpg";
import { navItems, siteContent } from "@/data/site";
import { useLanguage } from "@/components/language-provider";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const { language, theme, toggleLanguage, toggleTheme } = useLanguage();
  const items = navItems[language];
  const copy = siteContent[language].header;
  const homeHref = (href: string) => (href.startsWith("/") || isHome ? href : `/${href}`);

  useEffect(() => {
    if (!isHome) return;

    const sections = ["#home", ...items.map((item) => item.href)]
      .filter((hash) => hash.startsWith("#"))
      .map((hash) => document.getElementById(hash.slice(1)))
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
  }, [isHome, items]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        if (mobileNavRef.current?.contains(document.activeElement)) {
          menuButtonRef.current?.focus();
        }
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <a href="#content" className="skip-link">
        {copy.skip}
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label={language === "es" ? "Navegación principal" : "Main navigation"}>
          <a href={homeHref("#home")} className="brand" aria-label={`${copy.home} — Jesrig Pineda`} onClick={() => setIsOpen(false)}>
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
                href={homeHref(item.href)}
                className={isHome && activeHash === item.href ? "nav-link is-active" : "nav-link"}
                aria-current={isHome && activeHash === item.href ? "location" : undefined}
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
              ref={menuButtonRef}
              aria-label={isOpen ? copy.close : copy.menu}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              <span aria-hidden="true">{isOpen ? copy.close : copy.menu}</span>
              <span className={isOpen ? "menu-icon is-open" : "menu-icon"} aria-hidden="true">
                <i />
                <i />
              </span>
            </button>
          </div>
        </nav>

        <div
          id="mobile-navigation"
          ref={mobileNavRef}
          className={isOpen ? "mobile-nav is-open" : "mobile-nav"}
          inert={!isOpen}
        >
          <div className="mobile-nav-inner">
            {items.map((item) => (
              <a
                key={item.href}
                href={homeHref(item.href)}
                className={isHome && activeHash === item.href ? "mobile-nav-link is-active" : "mobile-nav-link"}
                aria-current={isHome && activeHash === item.href ? "location" : undefined}
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
