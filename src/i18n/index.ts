import { useLocale } from "@/store/use-locale";
import { es } from "./es";
import { en } from "./en";
import type { Dictionary } from "./types";
import type { Locale } from "@/store/use-locale";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function useTranslation() {
  const locale = useLocale((s) => s.locale);
  return { t: dictionaries[locale], locale };
}

export type { Dictionary };
