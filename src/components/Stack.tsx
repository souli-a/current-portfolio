import '../styles/stack.css';

const stack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'];

const Projects = () => {
  return (
    <section className="stack">
      <h1 className="title">STACK</h1>
      <div className="stacks">
        {stack.map((techno, index) => (
          <span key={index}>{techno}</span>
        ))}
      </div>
    </section>
  );
};

export default Projects;
