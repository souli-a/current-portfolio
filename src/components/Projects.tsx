import { usePreferencesStore } from '../stores/usePreferencesStore';
import '../styles/projects.css';

const projects = [
  {
    id: 1,
    title: 'Application : gestion des tâches',
    stack: 'React · TypeScript · JavaScript · HTML · CSS',
    url: 'https://souli-a-todo-app.vercel.app',
  },
  {
    id: 2,
    title: 'Portfolio : photographe',
    stack: 'TypeScript · JavaScript · HTML · CSS · GSAP',
    url: 'https://souli-a-portfolio-photographer.vercel.app',
  },
  {
    id: 3,
    title: `Application : heure et date d'une ville`,
    stack: 'React · TypeScript · JavaScript · HTML · CSS',
    url: 'https://souli-a-city-time-app.vercel.app',
  },
  {
    id: 4,
    title: `Application : gestion des tâches (back-end shutdown)`,
    stack: 'React · JavaScript · HTML · CSS',
    url: 'https://app-listify.vercel.app',
  },
  {
    id: 5,
    title: `D’autres projets disponible sur mon GitHub`,
    stack: '',
    url: 'https://github.com/souli-a',
  },
];

const Projects = () => {
  const { theme } = usePreferencesStore();

  const projectLinkClassName =
    theme === 'light'
      ? 'project-link project-link-light'
      : 'project-link project-link-dark';

  return (
    <section className="projects">
      <h1 className="title">PROJETS</h1>
      <div className="all-projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className={projectLinkClassName}
              href={project.url}
            >
              {project.title}
            </a>
            <span className="project-stack">{project.stack}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
