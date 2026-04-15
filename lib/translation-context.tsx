"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Language, Translations, translations } from "./translations";

interface TranslationContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextValue | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Persist in sessionStorage so the preference survives soft navigations
    if (typeof window !== "undefined") {
      sessionStorage.setItem("byalance_lang", lang);
    }
  }, []);

  const t = translations[language];

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error("useTranslation must be used inside <TranslationProvider>");
  return ctx;
}
