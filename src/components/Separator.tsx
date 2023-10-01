import usePreferencesStore from '../stores/preferencesStore';
import { SeparatorClassName } from '../types/types';

const Separator = () => {
  const { theme } = usePreferencesStore();

  const separatorClassName: SeparatorClassName = `separator separator-${theme}`;

  return <hr className={separatorClassName} />;
};

export default Separator;
