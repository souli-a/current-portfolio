import Noise from '../components/Noise';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import OtherProjects from '../components/OtherProjects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import { FullPageClassName } from '../types/classNameThemeTypes';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/pages/portfolio.css';

const Portfolio = () => {
  const { theme, language } = usePreferencesStore();

  const fullPageClassName: FullPageClassName =
    theme === 'light'
      ? 'full-page full-page-light'
      : 'full-page full-page-dark';

  useDocumentTitle({
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
          <OtherProjects />
          <Stack />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
