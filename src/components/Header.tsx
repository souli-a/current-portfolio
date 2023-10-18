import Separator from './Separator';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import { TitleClassName, ButtonClassName } from '../types/classNameThemeTypes';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/components/header.css';

const Header = () => {
  const { language, theme, setLanguage, setTheme } = usePreferencesStore();

  useLocalStorage({
    setter: setLanguage,
    localStorageItemName: 'language',
    state: language,
  });

  useLocalStorage({
    setter: setTheme,
    localStorageItemName: 'theme',
    state: theme,
  });

  const titleClassName: TitleClassName = `title title-${theme}`;
  const buttonClassName: ButtonClassName = `button button-${theme}`;

  const languageButtonLanguage = language === 'french' ? 'English' : 'Français';

  const languageButtonTheme =
    theme === 'light' && language === 'french'
      ? 'Sombre'
      : theme === 'light' && language === 'english'
      ? 'Dark'
      : theme === 'dark' && language === 'french'
      ? 'Clair'
      : theme === 'dark' && language === 'english'
      ? 'Light'
      : null;

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const toggleLanguage = () => {
    language === 'french' ? setLanguage('english') : setLanguage('french');
  };

  return (
    <header className="header">
      <h1 className={titleClassName}>Soulimane</h1>
      <div className="header-buttons">
        <button onClick={toggleLanguage} className={buttonClassName}>
          {languageButtonLanguage}
        </button>
        <Separator />
        <button onClick={toggleTheme} className={buttonClassName}>
          {languageButtonTheme}
        </button>
      </div>
    </header>
  );
};

export default Header;
