export type Locale = (typeof locales)[number];

export const locales = ["en", "cs"] as const;
export const defaultLocale: Locale = "en";