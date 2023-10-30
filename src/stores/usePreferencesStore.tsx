import { create } from 'zustand';

type Theme = '' | 'light' | 'dark';

type PreferencesStore = {
  theme: Theme;

  setTheme: (theme: 'light' | 'dark') => void;
};

const usePreferencesStore = create<PreferencesStore>((set) => ({
  theme: '',

  setTheme: (theme) => set({ theme }),
}));

export { usePreferencesStore, type Theme };
