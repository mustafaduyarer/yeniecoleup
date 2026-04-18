"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  languageLabels,
  supportedLanguages,
  translations,
  type LanguageCode,
  type SiteTranslations,
} from "./translations";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
  t: SiteTranslations;
  languageOptions: Array<{ code: LanguageCode; label: string }>;
};

const storageKey = "site-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolveInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = window.localStorage.getItem(storageKey);
  if (stored && supportedLanguages.includes(stored as LanguageCode)) {
    return stored as LanguageCode;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("tr")) return "tr";
  if (browserLanguage.startsWith("es")) return "es";
  if (browserLanguage.startsWith("fr")) return "fr";
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>("en");

  useEffect(() => {
    setLanguage(resolveInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
      languageOptions: supportedLanguages.map((code) => ({
        code,
        label: languageLabels[code],
      })),
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
