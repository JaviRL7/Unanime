
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Locale = 'es' | 'en';

type LocaleState = {
    locale: Locale;
    toggleLocale: () => void;
    setLocale: (locale: Locale) => void;
};

export const useLocale = create<LocaleState>()(
    persist(
        (set, get) => ({
            locale: 'es',
            toggleLocale: () => set({ locale: get().locale === 'es' ? 'en' : 'es' }),
            setLocale: (locale: Locale) => set({ locale }),
        }),
        {
            name: 'locale'
        }
    )
);
