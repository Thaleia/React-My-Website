const ButtonProjects = ({ project }) => (
    <button onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}>
      Click for Project
    </button>
  );

  const ButtonProjects = ({ project }) => (
    <a key={project.id} href={project.link}>
      <button onClick={() => window.open(project.link, '_blank', "noopener noreferrer")}>
        Click for Project
      </button>
    </a>
  );