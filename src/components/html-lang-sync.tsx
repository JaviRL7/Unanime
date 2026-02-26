"use client";

import { useEffect } from "react";
import { useLocale } from "@/store/use-locale";

/**
 * Syncs the <html lang="..."> attribute with the current locale.
 * Render once in the root layout.
 */
export function HtmlLangSync() {
  const locale = useLocale((s) => s.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
