import '../styles/app.css';
import '../styles/app-light.css';
import '../styles/app-dark.css';
import Noise from '../components/Noise';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Stack from '../components/Stack';
import Contact from '../components/Contact';
import Theme from '../components/Theme';

const Portfolio = () => {
  return (
    <>
      <Noise />
      <Theme />
      <main className="container">
        <Header />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
    </>
  );
};

export default Portfolio;
