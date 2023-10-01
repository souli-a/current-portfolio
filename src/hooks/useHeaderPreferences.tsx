import { useEffect } from 'react';
import usePreferencesStore from '../stores/preferencesStore';

const useHeaderPreferences = () => {
  const { language, setLanguage } = usePreferencesStore();

  useEffect(() => {
    let storedLanguage = localStorage.getItem('language') as
      | 'french'
      | 'english';

    if (!storedLanguage) {
      storedLanguage =
        navigator.language === 'fr-FR' || navigator.language === 'fr'
          ? 'french'
          : 'english';
      localStorage.setItem('language', storedLanguage);
    }

    setLanguage(storedLanguage);
  }, [setLanguage]);

  const toggleLanguage = () => {
    const newLanguage = language === 'english' ? 'french' : 'english';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return { language, toggleLanguage };
};

export default useHeaderPreferences;
