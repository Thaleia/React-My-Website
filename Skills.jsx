
import React from 'react';
import { hardSkills } from '../data/data.js';
import "./skills.css";

const Skills = () => {
  return (
    <div className='skills'>
      <ul>
        {hardSkills.map((hardSkill) => (
          <li key={hardSkill.id}>
            <div>{hardSkill.name}</div>
            <img key={hardSkill.id} src={hardSkill.image} alt={hardSkill.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
