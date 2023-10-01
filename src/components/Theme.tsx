import usePreferencesStore from '../stores/preferencesStore';
import { useEffect } from 'react';

interface Theme {
  icon: string;
  selectionBackgroundColor: string;
  selectionColor: string;
  beforeColor: string;
  bodyClassesToAdd: string[];
  bodyClassesToRemove: string[];
}

interface Themes {
  light: Theme;
  dark: Theme;
}

const themes: Themes = {
  light: {
    icon: '/images/icon-light-mode.png',
    selectionBackgroundColor: 'var(--black-light-mode)',
    selectionColor: 'var(--white-light-mode)',
    beforeColor: 'var(--black-light-mode)',
    bodyClassesToAdd: ['full-page', 'full-page-light'],
    bodyClassesToRemove: ['full-page-dark'],
  },
  dark: {
    icon: '/images/icon-dark-mode.png',
    selectionBackgroundColor: 'var(--white-dark-mode)',
    selectionColor: 'var(--black-dark-mode)',
    beforeColor: 'var(--white-dark-mode)',
    bodyClassesToAdd: ['full-page', 'full-page-dark'],
    bodyClassesToRemove: ['full-page-light'],
  },
};

const Theme = () => {
  const { theme, language } = usePreferencesStore();

  const root = document.documentElement;

  useEffect(() => {
    const currentTheme =
      theme === 'dark'
        ? themes['dark']
        : theme === 'light'
        ? themes['light']
        : themes['light'];

    if (currentTheme) {
      const iconLink = document.head.querySelector(
        'link[rel~="icon"]'
      ) as HTMLLinkElement;
      if (iconLink) {
        iconLink.href = currentTheme.icon;
      }
    }

    root.style.setProperty(
      '--selection-background-color',
      currentTheme.selectionBackgroundColor
    );
    root.style.setProperty('--selection-color', currentTheme.selectionColor);
    root.style.setProperty('--before-color', currentTheme.beforeColor);

    document.body.classList.remove(...currentTheme.bodyClassesToRemove);
    document.body.classList.add(...currentTheme.bodyClassesToAdd);
  }, [root.style, theme]);

  useEffect(() => {
    const languageStorage = localStorage.getItem('language');
    const frenchTitle = 'Soulimane — Développeur front-end';
    const englishTitle = 'Soulimane — Front-end developer';

    const defaultTitle =
      navigator.language === 'fr-FR' || navigator.language === 'fr'
        ? frenchTitle
        : englishTitle;

    document.title =
      languageStorage === 'french'
        ? frenchTitle
        : languageStorage === 'english'
        ? englishTitle
        : defaultTitle;
  }, [language]);

  return null;
};

export default Theme;
