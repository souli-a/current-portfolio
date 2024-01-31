import { usePreferencesStore } from '../stores/usePreferencesStore';
import '../styles/contact.css';

const links = [
  {
    id: 1,
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/soulimane-abd',
  },
  {
    id: 2,
    title: 'Mail',
    url: 'mailto:soulimane.abdesslam@gmail.com',
  },
  {
    id: 3,
    title: 'GitHub',
    url: 'https://github.com/souli-a',
  },
];

const Contact = () => {
  const { theme } = usePreferencesStore();

  const linksClassName =
    theme === 'light' ? 'links links-light' : 'links links-dark';

  return (
    <section className="contact">
      <div className="title-section">
        <div className="available-logo" />
        <h1 className="title">DISPONIBLE</h1>
      </div>
      <div className={linksClassName}>
        {links.map((link) => (
          <a
            target="_blank"
            rel="noreferrer noopener"
            key={link.id}
            href={link.url}
          >
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
