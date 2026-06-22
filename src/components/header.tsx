"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems, siteContent, socialLinks } from "@/data/site";
import { useLanguage } from "@/components/language-provider";
import jesrigAvatar from "@/img/Jesrig.jpg";

function Avatar({ size = "md" }: { size?: "sm" | "md" }) {
  const imageSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <span className={`avatar-frame relative ${imageSize} shrink-0 overflow-hidden rounded-full`}>
      <Image
        src={jesrigAvatar}
        alt="Jesrig profile photo"
        className="h-full w-full rounded-full object-cover object-center"
        sizes={size === "sm" ? "36px" : "44px"}
        priority
      />
    </span>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const { language, theme, toggleLanguage, toggleTheme } = useLanguage();
  const currentNavItems = navItems[language];
  const copy = siteContent[language].header;
  const skipLabel = language === "es" ? "Ir al contenido" : "Skip to content";
  const themeLabel =
    theme === "light"
      ? language === "es"
        ? "Activar modo oscuro"
        : "Activate dark mode"
      : language === "es"
        ? "Activar modo claro"
        : "Activate light mode";

  useEffect(() => {
    const updateActiveSection = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isAtBottom) {
        setActiveHash(currentNavItems[currentNavItems.length - 1].href);
        return;
      }

      const marker = window.scrollY + Math.max(120, window.innerHeight * 0.28);
      const sections = currentNavItems
        .map((item) => {
          const section = document.querySelector<HTMLElement>(item.href);
          return section ? { href: item.href, top: section.offsetTop } : null;
        })
        .filter((section): section is { href: string; top: number } => Boolean(section));

      const activeSection = sections.reduce((active, section) => {
        return section.top <= marker ? section : active;
      }, sections[0]);

      if (activeSection) {
        setActiveHash(activeSection.href);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [currentNavItems]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const languageToggle = (
    <button
      type="button"
      className="surface-glass rounded-full px-3 py-1.5 text-xs font-semibold text-secondary shadow-sm backdrop-blur-xl hover:text-primary"
      aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}
      onClick={toggleLanguage}
    >
      <span className={language === "es" ? "text-primary" : ""}>ES</span>
      <span className="mx-1.5 text-quaternary">/</span>
      <span className={language === "en" ? "text-primary" : ""}>EN</span>
    </button>
  );

  const themeToggle = (
    <button
      type="button"
      className={`theme-switch ${theme === "dark" ? "theme-switch--dark" : ""}`}
      aria-label={themeLabel}
      onClick={toggleTheme}
    >
      <span className="theme-switch__moon" aria-hidden="true" />
      <span className="theme-switch__sun" aria-hidden="true" />
      <span className="theme-switch__knob" aria-hidden="true" />
    </button>
  );

  return (
    <>
      <a href="#content" className="skip-link">
        {skipLabel}
      </a>

      <div className="fixed right-4 top-4 z-[60] hidden items-center gap-2 md:flex">
        {languageToggle}
        {themeToggle}
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:hidden">
        <nav
          className="surface-strong mx-auto flex h-14 w-[min(calc(100%_-_8px),800px)] items-center justify-between rounded-2xl px-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl"
          aria-label="Principal"
        >
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <Avatar size="sm" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-primary">Jesrig</span>
              <span className="block truncate text-xs text-tertiary">{copy.role}</span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="button-secondary rounded-full px-4 py-2 text-xs font-semibold shadow-sm"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? copy.close : copy.menu}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? copy.close : copy.menu}
            </button>
          </div>
        </nav>

        {isOpen ? (
          <div id="mobile-menu" className="surface-strong mx-auto mt-2 max-h-[calc(100svh-5rem)] w-[min(calc(100%_-_8px),800px)] overflow-y-auto rounded-2xl p-2 shadow-[0_18px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl">
            <div className="surface-glass mb-2 flex items-center justify-between gap-3 rounded-xl p-2">
              <span className="px-2 text-xs font-semibold uppercase tracking-[0.1em] text-quaternary">
                {language === "es" ? "Preferencias" : "Preferences"}
              </span>
              <div className="flex items-center gap-2">
                {languageToggle}
                {themeToggle}
              </div>
            </div>

            <nav className="grid gap-1" aria-label="Mobile navigation">
              {currentNavItems.map((item) => {
                const isActive = activeHash === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive ? "nav-link-active" : "nav-link-muted"
                    }`}
                    onClick={() => {
                      setActiveHash(item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        ) : null}
      </header>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[232px] bg-[var(--sidebar)] p-4 md:block">
        <div className="surface-glass flex h-full flex-col rounded-[22px] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-3 rounded-2xl p-2 hover:bg-[color-mix(in_srgb,var(--surface)_58%,transparent)]">
            <Avatar />
            <span className="min-w-0">
              <span className="block truncate text-base font-semibold leading-tight text-primary">Jesrig</span>
              <span className="block truncate text-xs font-medium text-tertiary">{copy.role}</span>
            </span>
          </a>

          <nav className="mt-10 grid gap-1" aria-label="Principal">
            {currentNavItems.map((item) => {
              const isActive = activeHash === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm font-medium ${
                    isActive
                      ? "nav-link-active shadow-sm"
                      : "nav-link-muted"
                  }`}
                  onClick={() => setActiveHash(item.href)}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isActive ? "bg-[var(--accent-foreground)]" : "bg-transparent group-hover:bg-[var(--text-tertiary)]"
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          <div className="mt-auto">
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.12em] text-quaternary">{copy.connect}</p>
            <div className="mt-3 grid gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link-muted rounded-xl px-3 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
