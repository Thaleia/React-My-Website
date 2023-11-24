import React from 'react';
import { projects } from '../data/data.js';
import "./projects.css";


const ButtonProjects = ({ project }) => (
  <button onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}>
    Click for Project
  </button>
);

const Project = ({ project }) => (
  <li className="project" key={project.id}>
    <h2>{project.title}</h2>
    <img src={project.image} alt={project.title} />
    <p>{project.description}</p>
    <ButtonProjects project={project} />
    <h5>Technologies used: {project.subtitle}</h5>
  </li>
);

const Projects = () => (
  <div className="projects-container">
    <h1>Projects</h1>
    <ul className="projects-list">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  </div>
);

export default Projects;

