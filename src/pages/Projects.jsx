import { projects } from '../data/data.js';
import React from 'react';
import "./projects.css";

const Project = ({ project }) => (
  <li className="project" key={project.id}>
    <img src={project.image} alt={project.title} />
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </div>
  </li>
);

const ButtonProjects = () => {
  return (
    <>
      {projects.map((project) => (
        <a key={project.id} href={project.link}>
          <button onClick={() => window.open(project.link, '_blank')}>
            Click for Project
          </button>
        </a>
      ))}
    </>
  );
};

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <ul className="projects-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
      <ButtonProjects />
    </div>
  );
};

export default Projects;

// or the above code can be written as below: 
/*
import React from 'react';
import { projects } from './data/data.js';

const Project = ({ id, title, image, description, link }) => (
  <li className="project" key={id}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Website
      </a>
    </div>
  </li>
);

const ButtonProjects = () => (
  <>
    {projects.map(({ id, link }) => (
      <a key={id} href={link}>
        <button onClick={() => window.open(link, '_blank')}>
          Click for Project
        </button>
      </a>
    ))}
  </>
);

const Projects = () => (
  <div className="projects-container">
    <h1>Projects</h1>
    <ul className="projects-list">
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </ul>
    <ButtonProjects />
  </div>
);

export default Projects;
*/
