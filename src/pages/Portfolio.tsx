import Noise from '../components/Noise';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import { FullPageClassName } from '../types/classNameThemeTypes';
import useThemeWithHtml from '../hooks/useDocumentTitle';
import '../styles/app.css';
import '../styles/app-light.css';
import '../styles/app-dark.css';

const Portfolio = () => {
  const { theme, language } = usePreferencesStore();

  const fullPageClassName: FullPageClassName =
    theme === 'light'
      ? 'full-page full-page-light'
      : 'full-page full-page-dark';

  useThemeWithHtml({
    language: language,
    frenchTitle: 'Soulimane - Développeur',
    englishTitle: 'Soulimane - Developer',
  });

  return (
    <>
      <Noise />
      <div className={fullPageClassName}>
        <div className="container">
          <Header />
          <About />
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
