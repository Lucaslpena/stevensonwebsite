import { create } from "zustand";
import copy from "@/copy";
export const LANGUAGES = ["EUS", "ESP", "ENG"];
export const useLanguageStore = create((set) => ({
  lang: LANGUAGES[0],
  setLanguage: (langIndex) => set((state) => ({ lang: LANGUAGES[langIndex] })),
}));
