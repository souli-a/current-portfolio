import { usePreferencesStore } from '../stores/usePreferencesStore';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/switch.css';

const Switch = () => {
  const { theme, setTheme } = usePreferencesStore();

  useLocalStorage({
    setter: setTheme,
    localStorageItemName: 'theme',
    state: theme,
  });

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const iconLight = (
    <svg
      width="38"
      height="160"
      viewBox="0 0 38 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99998 157.945L4.62463 154.654M35.9448 157.945L33.4786 154.693M1.99999 124C1.99999 124 3.70517 126.211 4.44163 127.157M35.9448 124C35.0401 125.134 34.5329 125.77 33.6282 126.905"
        stroke="#9FEF00"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.4289 126.019L13.7537 126.019M21.8164 121.181L15.3662 121.181M18.5913 150.207C25.0414 150.207 28.3439 147.063 28.2665 142.144C28.2294 139.747 27.4602 138.113 25.8477 136.5C24.2351 134.888 23.4289 134.082 23.4289 130.857L13.7537 130.857C13.7537 134.082 12.9474 134.888 11.3349 136.5C9.72239 138.113 8.95322 139.747 8.91613 142.144C8.83873 147.063 12.1412 150.207 18.5913 150.207Z"
        stroke="#1D1D1D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 0C16.6667 38 18.5 116.5 18.5 121.5"
        stroke="#1D1D1D"
        strokeWidth="2"
      />
    </svg>
  );

  const iconDark = (
    <svg
      width="23"
      height="152"
      viewBox="0 0 23 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4306 125.958L6.75545 125.958M14.8181 121.121L8.36798 121.12M11.593 150.146C18.0431 150.146 21.3456 147.002 21.2682 142.083C21.2311 139.686 20.4619 138.052 18.8494 136.44C17.2369 134.827 16.4306 134.021 16.4306 130.796L6.75545 130.796C6.75545 134.021 5.94919 134.827 4.33666 136.44C2.72413 138.052 1.95496 139.686 1.91787 142.083C1.84047 147.002 5.14292 150.146 11.593 150.146Z"
        stroke="#1D1D1D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00003 0C9.66669 38 11.5 116.5 11.5 121.5"
        stroke="#1D1D1D"
        strokeWidth="2"
      />
    </svg>
  );

  const switchButtonClassName =
    theme === 'light' ? 'switch switch-light' : 'switch switch-dark';

  return (
    <button className={switchButtonClassName} onClick={toggleTheme}>
      {theme === 'light' ? iconLight : iconDark}
    </button>
  );
};

export default Switch;
