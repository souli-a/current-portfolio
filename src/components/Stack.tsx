import '../styles/app.css';
import '../styles/app-light.css';
import '../styles/app-dark.css';
import usePreferencesStore from '../stores/preferencesStore';
import { TitleClassName, TextClassName } from '../types/types';

type Stacks = {
  name: string;
  symbol: string;
};

const Stack = () => {
  const { theme } = usePreferencesStore();

  const titleClassName: TitleClassName = `title title-${theme}`;
  const textClassName: TextClassName = `text text-${theme}`;

  const stacks: Stacks[] = [
    {
      name: 'React',
      symbol: '┌',
    },
    {
      name: 'TypeScript',
      symbol: '├',
    },
    {
      name: 'JavaScript',
      symbol: '├',
    },
    {
      name: 'HTML',
      symbol: '├',
    },
    {
      name: 'CSS',
      symbol: '└',
    },
  ];

  return (
    <section className="stack">
      <h1 className={titleClassName}>0.3</h1>
      <div className="stack-elements">
        {stacks.map((stack, index) => (
          <div key={index}>
            <span className={textClassName}>{stack.symbol}&nbsp;</span>
            <span className={textClassName}>{stack.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
