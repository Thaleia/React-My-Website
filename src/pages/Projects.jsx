// Projects.js

import React from 'react';
import { projects } from '../data/data.js';
import "./projects.css";
import "./skills.css";



const ButtonProjects = ({ project }) => (
  <button className='pButton universalFont' onClick={() => window.open(project.link, '_blank', 'noopener noreferrer')}>
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
    <h5>Technologies used: {project.subtitle}</h5>
    <ButtonProjects project={project} />
  </li>
);

const Projects = () => (
  <div className='universalBackgroundSub universalFont' style={{paddingBlockStart: '0.1px'}}>
  <h1 className='threeD hH1 pH1'>Projects</h1>
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

