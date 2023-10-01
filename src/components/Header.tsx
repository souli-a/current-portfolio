import Separator from './Separator';
import useHeaderPreferences from '../hooks/useHeaderPreferences';
import usePreferencesStore from '../stores/preferencesStore';
import { TitleClassName, ButtonClassName } from '../types/classNameThemeTypes';

const Header = () => {
  const { language, toggleLanguage } = useHeaderPreferences();

  const { theme, setTheme } = usePreferencesStore();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const titleClassName: TitleClassName = `title title-${theme}`;
  const buttonClassName: ButtonClassName = `button button-${theme}`;

  const languageButtonLanguage =
    language === 'french'
      ? 'English'
      : language === 'english'
      ? 'Français'
      : null;

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
