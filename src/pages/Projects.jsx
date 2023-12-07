// Projects.js

import React from 'react';
import { projects } from '../data/data.js';
import "./projects.css";


const ButtonProjects = ({ project }) => (
  <button onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}>
    Click for Project
  </button>
);

const Project = ({ project }) => (
  <li className="project">
    <h2>{project.title}</h2>
    <div className='project-img-container'>
    <img src={project.image} alt={project.title} />
    </div>
    <p>{project.description}</p>
    <ButtonProjects project={project} />
    <h5>Technologies used: {project.subtitle}</h5>
  </li>
);

const Projects = () => (
  <div className='universalBackground'>
  <h1 className='threeD' style={{textAlign: 'center'}}>Projects</h1>
  <div className="projects-container">
    <ul className="projects-list">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  </div>
  </div>
);

export default Projects;

