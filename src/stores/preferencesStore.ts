import { create } from 'zustand';

type PreferencesStore = {
  theme: 'light' | 'dark';
  language: 'french' | 'english';

  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'french' | 'english') => void;
};

const usePreferencesStore = create<PreferencesStore>((set) => ({
  theme: 'light',
  language: 'french',

  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
}));

export default usePreferencesStore;
