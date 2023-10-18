import { usePreferencesStore } from '../stores/usePreferencesStore';
import {
  TitleClassName,
  LinkClassName,
  TextClassName,
} from '../types/classNameThemeTypes';
import '../styles/components/contact.css';

const Contact = () => {
  const { theme } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const linkClassName: LinkClassName = `link link-${theme}`;
  const textClassName: TextClassName = `text text-${theme}`;

  const contacts = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/soulimane-abd/',
      symbol: '┌',
    },
    {
      name: 'Mail',
      link: 'mailto:soulimane.a@protonmail.com',
      symbol: '├',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/souli-a',
      symbol: '└',
    },
  ];

  return (
    <section className="contact">
      <h1 className={titleClassName}>─── 0.4 ───</h1>
      <div className="contact-elements">
        {contacts.map((contact, index) => (
          <div key={index}>
            <span className={textClassName}>{contact.symbol} </span>
            <a
              href={contact.link}
              target="_blank"
              rel="noreferrer noopener"
              className={linkClassName}
            >
              {contact.name}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
