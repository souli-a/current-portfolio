import { useState } from 'react';
import Separator from './Separator';
import { usePreferencesStore } from '../stores/usePreferencesStore';
import {
  TitleClassName,
  TextClassName,
  LinkClassName,
} from '../types/classNameThemeTypes';
import '../styles/components/other-projects.css';

const OtherProjects = () => {
  const [contentActive, setContentActive] = useState(false);
  const { theme, language } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const textClassName: TextClassName = `text text-${theme}`;
  const linkClassName: LinkClassName = `link link-${theme}`;

  const projects = [
    {
      id: 1,
      symbol: '┌',
      description:
        language === 'french'
          ? `Un environnement de bureau personnalisé sous Linux avec une configuration Neovim pour le développement web.`
          : `A customized Linux DE with a Neovim configuration for web development.`,
      repoURL: 'https://github.com/souli-a/dotfiles',
      liveURL:
        'https://raw.githubusercontent.com/souli-a/dotfiles/main/preview.png',
    },
    {
      id: 2,
      symbol: '└',
      description:
        language === 'french'
          ? `Une application de gestion des tâches full-stack faite avec React, Express, MongoDB, Vite et Cypress pour les tests. Application shutdown au niveau du back-end.`
          : `A task management app built with React, Express, MongoDB, Vite and Cypress for testing. Application shutdown at back-end level.`,
      repoURL: 'https://github.com/souli-a/todo-app-archived',
      liveURL: 'https://app-listify.vercel.app',
    },
  ];

  const arrowDownIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -8 24 24"
      width="24"
      fill="currentColor"
    >
      <path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"></path>
    </svg>
  );

  const arrowUpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-5 -7.5 24 24"
      width="24"
      fill="currentColor"
    >
      <path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z"></path>
    </svg>
  );

  return (
    <section className="projects">
      <div
        onClick={() => setContentActive(!contentActive)}
        className="projects-expandable-section"
      >
        <h1 className={titleClassName}>·─ 0.2.1</h1>
        <span>{contentActive ? arrowUpIcon : arrowDownIcon}</span>
      </div>
      {contentActive && (
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
      )}
    </section>
  );
};

export default OtherProjects;
