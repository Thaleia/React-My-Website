// SkillsSlider.js
import React from 'react';
import { hardSkills, softSkills } from '../../data/data.js';
import './SkillsSlider.css';

const SkillsSlider = () => {
  return (
    <div>
      <h1 className='pulsing-h1'>Explore skills</h1>
      <div className="skills-slider">
        {hardSkills.map(skill => (
          <div key={skill.id} className="skill-item">
            {/* <div className="skill-image">{skill.image}</div> */}
            <div className="skill-name pulsing-element">{skill.name}</div>

          </div>
        ))}
      </div>
      <div className="skills-slider">
        {softSkills.map(skill => (
          <div key={skill.id} className="skill-item">
            {/* <div className="skill-image">{skill.image}</div> */}
            <div className="skill-name pulsing-element">{skill.name}</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
