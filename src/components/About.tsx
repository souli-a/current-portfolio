import { useEffect, useState } from 'react';
import '../styles/about.css';

const informationsAbove600px = [
  `Je m'appelle Soulimane`,
  `J'habite près de Paris`,
  'Je suis développeur front-end',
];

const informationsUnder600px = ['Soulimane', 'Paris', 'Front-end'];

const About = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <section className="about">
      <h1 className="title">À PROPOS</h1>
      <div className="informations">
        {windowWidth > 600
          ? informationsAbove600px.map((info, index) => (
              <span key={index}>{info}</span>
            ))
          : informationsUnder600px.map((info, index) => (
              <span key={index}>{info}</span>
            ))}
      </div>
    </section>
  );
};

export default About;
