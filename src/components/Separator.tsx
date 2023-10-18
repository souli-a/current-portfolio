import { usePreferencesStore } from '../stores/usePreferencesStore';
import { SeparatorClassName } from '../types/classNameThemeTypes';
import '../styles/components/separator.css';

const Separator = () => {
  const { theme } = usePreferencesStore();

  const separatorClassName: SeparatorClassName = `separator separator-${theme}`;

  return <hr className={separatorClassName} />;
};

export default Separator;
