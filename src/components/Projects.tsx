import '../styles/app.css';
import '../styles/app-light.css';
import '../styles/app-dark.css';
import Separator from './Separator';
import usePreferencesStore from '../stores/preferencesStore';
import { TitleClassName, TextClassName, LinkClassName } from '../types/types';

type Projects = {
  id: number;
  symbol: string;
  description: string;
  repoURL: string;
  liveURL: string;
};

const Projects = () => {
  const { theme, language } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const textClassName: TextClassName = `text text-${theme}`;
  const linkClassName: LinkClassName = `link link-${theme}`;

  const projects: Projects[] = [
    {
      id: 1,
      symbol: '┌',
      description:
        language === 'french'
          ? `Un portfolio pour les développeurs fait avec React, Typescript, HTML, Sass et Vite.`
          : `A portfolio for developers made with React, Typescript, HTML, Sass and Vite.`,
      repoURL: 'https://github.com/souli-a/portfolio',
      liveURL: 'https://souli-a-template-1.vercel.app',
    },
    {
      id: 2,
      symbol: '├',
      description:
        language === 'french'
          ? `Un portfolio pour les photographes fait avec Typescript, HTML, CSS, GSAP et Vite.`
          : `A portfolio for photographers made with Typescript, HTML, CSS, GSAP and Vite.`,
      repoURL: 'https://github.com/souli-a/portfolio-photographer',
      liveURL: 'https://souli-a-template-2.vercel.app',
    },
    {
      id: 3,
      symbol: '├',
      description:
        language === 'french'
          ? `Ce portfolio, fait avec React, Typescript, HTML, CSS et Vite.`
          : `This portfolio, made with React, Typescript, HTML, CSS and Vite.`,
      repoURL: 'https://github.com/souli-a/current-portfolio',
      liveURL: 'https://soulimane.vercel.app',
    },
    {
      id: 4,
      symbol: '└',
      description:
        language === 'french'
          ? `Français. Lorem ipsum dolor sit amet consectetur.`
          : `English. Lorem ipsum dolor sit amet consectetur.`,
      repoURL: 'https://github.com',
      liveURL: 'https://vercel.com',
    },
  ];

  return (
    <section className="projects">
      <h1 className={titleClassName}>0.2</h1>
      <div className="projects-elements">
        {projects.map((project) => (
          <div key={project.id} className={`project project-${project.id}`}>
            <div className="project-informations">
              <span className={textClassName}>{project.symbol}</span>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.liveURL}
                className={linkClassName}
              >
                Live
              </a>
              <Separator />
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={project.repoURL}
                className={linkClassName}
              >
                Repo
              </a>
              <Separator />
            </div>
            <p className={textClassName}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
