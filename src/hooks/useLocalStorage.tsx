import { useEffect } from 'react';
import { Theme } from '../stores/usePreferencesStore';

interface UseLocalStorageProps {
  setter: (state: any) => void;
  localStorageItemName: 'theme';
  state: Theme;
}

const useLocalStorage = ({
  setter,
  localStorageItemName,
  state,
}: UseLocalStorageProps) => {
  useEffect(() => {
    const localStorageValue = localStorage.getItem(
      `${localStorageItemName}`
    ) as Theme;

    const browserTheme = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? 'light'
      : 'dark';

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
  }, [state]);

  return null;
};

export default useLocalStorage;
