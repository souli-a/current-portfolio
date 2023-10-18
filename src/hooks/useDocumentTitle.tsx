import { useEffect } from 'react';
import { Language } from '../types/preferencesTypes';

interface UseDocumentTitleProps {
  language: Language;
  englishTitle: string;
  frenchTitle: string;
}

const useDocumentTitle = ({
  language,
  frenchTitle,
  englishTitle,
}: UseDocumentTitleProps) => {
  useEffect(() => {
    document.title = language === 'english' ? englishTitle : frenchTitle;
  }, [language]);

  return null;
};

export default useDocumentTitle;
