"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/data/site";

type Theme = "light" | "dark";

type LanguageContextValue = {
  language: Language;
  theme: Theme;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = "jesrig-language";
const themeStorageKey = "jesrig-theme";

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  return storedLanguage === "en" || storedLanguage === "es" ? storedLanguage : "es";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem(themeStorageKey);

  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");
  const [theme, setTheme] = useState<Theme>("light");
  const [hasLoadedPreferences, setHasLoadedPreferences] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLanguage(getStoredLanguage());
      setTheme(getStoredTheme());
      setHasLoadedPreferences(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasLoadedPreferences) {
      return;
    }

    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [hasLoadedPreferences, language]);

  useEffect(() => {
    if (!hasLoadedPreferences) {
      return;
    }

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [hasLoadedPreferences, theme]);

  const value = useMemo(
    () => ({
      language,
      theme,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "es" ? "en" : "es")),
      toggleTheme: () => setTheme((current) => (current === "light" ? "dark" : "light")),
    }),
    [language, theme],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
