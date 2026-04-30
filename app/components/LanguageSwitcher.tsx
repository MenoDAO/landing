"use client";

import { useEffect, useState } from "react";
import i18n, { type Locale } from "../lib/i18n";

const LOCALE_STORAGE_KEY = "menodao_preferred_language";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({
  className = "",
}: LanguageSwitcherProps) {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "sw") {
      setCurrentLocale(stored);
      i18n.changeLanguage(stored);
    } else {
      // Detect from browser
      const nav = navigator.language;
      const detected: Locale = nav.startsWith("sw") ? "sw" : "en";
      setCurrentLocale(detected);
      i18n.changeLanguage(detected);
    }
  }, []);

  const handleChange = (locale: Locale) => {
    setCurrentLocale(locale);
    i18n.changeLanguage(locale);
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  };

  return (
    <select
      value={currentLocale}
      onChange={(e) => handleChange(e.target.value as Locale)}
      className={`text-sm bg-transparent border rounded px-2 py-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 ${className}`}
      aria-label="Select language"
    >
      <option value="en" className="text-gray-900">
        English
      </option>
      <option value="sw" className="text-gray-900">
        Kiswahili
      </option>
    </select>
  );
}
