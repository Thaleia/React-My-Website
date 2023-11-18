
import React from 'react';
import { hardSkills } from '../data/data.js';
import { softSkills } from '../data/data.js';
import "./skills.css";

const Skills = () => {
  return (
    <div className='skills'>
      <h1>Hard skills</h1>
      <div>
        <ul>
          {hardSkills.map((hardSkill) => (
            <li key={hardSkill.id}>
              <div>
                <p>{hardSkill.name}</p>
               <span>{hardSkill.image}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h1>Soft skills</h1>
      <div>
        <ul>
          {softSkills.map((softSkill) => (
            <li key={softSkill.id}>
              <div>
                <p>{softSkill.name}</p>
               <span>{softSkill.image}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
