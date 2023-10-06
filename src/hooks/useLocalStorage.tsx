import { useEffect } from 'react';
import { Language, Theme } from '../types/preferencesTypes';

interface UseLocalStorageProps {
  setter: (state: any) => void;
  localStorageItemName: 'language' | 'theme';
  state: Language | Theme;
}

const useLocalStorage = ({
  setter,
  localStorageItemName,
  state,
}: UseLocalStorageProps) => {
  useEffect(() => {
    const localStorageValue = localStorage.getItem(
      `${localStorageItemName}`
    ) as Language | Theme;

    const browserTheme = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? 'light'
      : 'dark';

    const browserLanguage =
      navigator.language === 'fr' || navigator.language === 'fr-FR'
        ? 'french'
        : 'english';

    if (state && state !== localStorageValue) {
      localStorage.setItem(`${localStorageItemName}`, state);
    }

    if (!state && localStorageValue) {
      setter(localStorageValue);
    }

    if (localStorageItemName === 'theme' && !localStorageValue && !state) {
      setter(browserTheme);
      localStorage.setItem(`${localStorageItemName}`, browserTheme);
    }

    if (localStorageItemName === 'language' && !localStorageValue && !state) {
      setter(browserLanguage);
      localStorage.setItem(`${localStorageItemName}`, browserLanguage);
    }
  }, [state]);

  return null;
};

export default useLocalStorage;
