"use client";

import { useLocale } from "@/store/use-locale";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className={className}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="font-mono text-xs font-bold">
        {locale === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}

/**
 * Larger locale selector for hero/landing pages.
 * Shows both options with the active one highlighted.
 */
export function LocaleSelector({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`inline-flex items-center rounded-full bg-background/30 backdrop-blur-md ${className ?? ""}`}>
      <button
        onClick={() => setLocale("es")}
        className={`font-mono text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
          locale === "es"
            ? "bg-foreground text-background"
            : "text-foreground/50 hover:text-foreground/80"
        }`}
        aria-label="Español"
      >
        ES
      </button>
      <button
        onClick={() => setLocale("en")}
        className={`font-mono text-sm font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
          locale === "en"
            ? "bg-foreground text-background"
            : "text-foreground/50 hover:text-foreground/80"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
