import { create } from 'zustand';
import { Theme, Language } from '../types/preferencesTypes';

type PreferencesStore = {
  theme: Theme;
  language: Language;

  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'english' | 'french') => void;
};

const usePreferencesStore = create<PreferencesStore>((set) => ({
  theme: '',
  language: '',

  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));

export { usePreferencesStore, type Theme, type Language };
