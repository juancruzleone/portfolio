import { ui, defaultLang } from "./ui"

export function getLangFromUrl(url: URL) {
  if (typeof window !== "undefined" && localStorage.getItem("lang")) {
    return localStorage.getItem("lang") as keyof typeof ui
  }
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return key.split(".").reduce((obj, k) => obj && obj[k as keyof typeof obj], ui[lang] as any) || key
  }
}