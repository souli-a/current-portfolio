import { useEffect } from 'react';
import { Language } from '../types/preferencesTypes';

interface UseThemeWithHtmlProps {
  language: Language;
  englishTitle: string;
  frenchTitle: string;
}

const useThemeWithHtml = ({
  language,
  frenchTitle,
  englishTitle,
}: UseThemeWithHtmlProps) => {
  useEffect(() => {
    document.title = language === 'english' ? englishTitle : frenchTitle;
  }, [language]);

  return null;
};

export default useThemeWithHtml;
