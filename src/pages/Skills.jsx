

import React, { useState } from 'react';
import { hardSkills, softSkills } from '../data/data.js';
import "./skills.css";
import Shopping from './Shopping';
import CongratulationsModal from './CongratulationsModal';
import './congratulationsModal.css';
import './app.css';

const SkillItem = ({ skill, addToCart }) => (
  <li key={skill.id}>
    <div>
      <p>{skill.name}</p>
      <span>{skill.image}</span>
      <br />
      <button className="shoppingCartButton" onClick={() => addToCart(skill)}>
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>
    </div>
  </li>
);

const SkillsList = ({ skills, filterSkills, addToCart }) => (
  <ul>
    {skills.filter(skill => filterSkills.includes(skill)).map(skill => (
      <SkillItem key={skill.id} skill={skill} addToCart={addToCart} />
    ))}
  </ul>
);

const Skills = () => {
  const [cart, setCart] = useState([]);
  const [skills, setSkills] = useState([...hardSkills, ...softSkills]); // Initial skills list
  const [showCongratulations, setShowCongratulations] = useState(false);

  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
      setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== item.id));
    }
  };

  const completePurchase = () => {
    setCart([]);
    setSkills([...hardSkills, ...softSkills]);
    setShowCongratulations(true);
  };

  const closeCongratulations = () => {
    setShowCongratulations(false);
  };

  return (
    <div className='skills-container universalBackground'>
      <div className={`skills ${cart.length === 30 ? 'skills-hidden' : ''}`}>
        <h1 className='threeD'>Hard Skills</h1>
        <div id="hard-skills" className='hard-skills'>
          <SkillsList skills={skills} filterSkills={hardSkills} addToCart={addToCart} />
        </div>

        <h1 className='threeD'>Soft Skills</h1>
        <div id="soft-skills" className='soft-skills'>
          <SkillsList skills={skills} filterSkills={softSkills} addToCart={addToCart} />
        </div>
      </div>

      {cart.length > 0 && (
        <div className='shopping'>
          <Shopping
            cart={cart}
            completePurchase={completePurchase}
            skills={skills}
            setSkills={setSkills}
          />
        </div>
      )}

      {/* CongratulationsModal is rendered conditionally based on the showCongratulations state */}
      {showCongratulations && <CongratulationsModal onClose={closeCongratulations} />}
    </div>
  );
};

export default Skills;
