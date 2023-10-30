import { useEffect, useState } from 'react';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import About from '../components/About';
import Contact from '../components/Contact';
import Switch from '../components/Switch';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import '../styles/portfolio.css';

const Portfolio = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const { theme } = usePreferencesStore();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const portfolioContainerClassName =
    theme === 'light'
      ? 'portfolio-container portfolio-container-light'
      : 'portfolio-container portfolio-container-dark';

  return (
    <main className={portfolioContainerClassName}>
      <Projects />
      <Switch />
      {windowWidth > 600 ? (
        <>
          <div className="section-stack-about">
            <Stack />
            <About />
          </div>
          <Contact />
        </>
      ) : (
        <div className="section-stack-about">
          <Stack />
          <About />
          <Contact />
        </div>
      )}
    </main>
  );
};

export default Portfolio;
