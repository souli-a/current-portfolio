import { usePreferencesStore } from '../stores/usePreferencesStore';
import {
  TitleClassName,
  ParagraphClassName,
} from '../types/classNameThemeTypes';
import '../styles/components/about.css';

const paragraph = {
  french: `J'ai suivi plusieurs cursus dans l'enseignement supérieur sans jamais
être pleinement convaincu. En plein semestre, je tombe sur une vidéo
d'un tutoriel en JavaScript. Je la regarde. J'essaie de coder la même
chose mais je n'y arrive pas. Alors je recommence plusieurs fois et
là... Ça fonctionne. À partir de ce moment-là, je me plonge
complètement dans le code. Aujourd'hui, bientôt deux ans plus tard,
je continue d'apprendre et de m'améliorer chaque jour. Je m'appelle
Soulimane et j'habite près de Paris.`,
  english: `I took several courses in higher education without ever being fully
convinced. In the middle of a semester, I came across a video of a
JavaScript tutorial. I'm watching it. I'm trying to code the same thing but I
can't do it. So I start over several times and then... It works. From
then on, I immersed myself completely in code. Today, almost two
years later, I'm still learning and improving every day. My name is
Soulimane and I live near Paris.`,
};

const About = () => {
  const { theme, language } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const paragraphClassName: ParagraphClassName = `paragraph paragraph-${theme}`;

  const correctParagraphLanguage =
    language === 'french' ? paragraph.french : paragraph.english;

  return (
    <section className="about">
      <h1 className={titleClassName}>─── 0.1 ───</h1>
      <p className={paragraphClassName}>{correctParagraphLanguage}</p>
    </section>
  );
};

export default About;
