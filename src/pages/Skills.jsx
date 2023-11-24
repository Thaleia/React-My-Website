// Skills.js
import React, { useState } from 'react';
import { hardSkills, softSkills } from '../data/data.js';
import "./skills.css";
import Shopping from './Shopping';

const Skills = () => {
  const [cart, setCart] = useState([]);
  const [skills, setSkills] = useState([...hardSkills, ...softSkills]); // Initial skills list

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

  const removeFromCart = (index) => {
    const removedSkill = cart[index];
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);

    const updatedSkills = [...skills];
  const skillIndex = updatedSkills.findIndex(skill => skill.id === removedSkill.id);

  if (skillIndex !== -1) {
    updatedSkills[skillIndex] = removedSkill;
    setSkills(updatedSkills);
  }
  };

  const completePurchase = () => {
    setSkills([...hardSkills, ...softSkills]);
  };

  return (
    <div className='skills-container'>
      <div className='skills'>
        <h1>Hard Skills</h1>
        <div id="hard-skills" className='hard-skills'>
          <ul>
            {skills.filter(skill => hardSkills.includes(skill)).map(hardSkill => (
              <li key={hardSkill.id}>
                <div>
                  <p>{hardSkill.name}</p>
                  <span>{hardSkill.image}</span>
                  <br />
                  <button className="shoppingCart" onClick={() => addToCart(hardSkill)}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
  
        <h1>Soft Skills</h1>
        <div id="soft-skills" className='soft-skills'>
          <ul>
            {skills.filter(skill => softSkills.includes(skill)).map(softSkill => (
              <li key={softSkill.id}>
                <div>
                  <p>{softSkill.name}</p>
                  <span>{softSkill.image}</span>
                  <br />
                  <button className="shoppingCart" onClick={() => addToCart(softSkill)}>
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      {cart.length > 0 && (
        <div className='shopping'>
          <Shopping 
            cart={cart} 
            removeFromCart={removeFromCart} 
            completePurchase={completePurchase} 
            skills={skills} 
            setSkills={setSkills}
          />
        </div>
      )}
    </div>
  );
};

export default Skills;
