// Shopping.js

import React from 'react';
import SkillsMessages from './SkillsMessages';
import './skills.css';

const Shopping = ({ cart, completePurchase, addToCart }) => {
  const numSkills = cart.length;

  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      <SkillsMessages numSkills={numSkills} />
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index} className='cart-item'>
                <div>
                  <p>{item.name}</p>
                  <span>{item.image}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="complete-purchase" onClick={completePurchase}>
            Complete Purchase
          </button>
        </>
      
    </div>
  );
};

export default Shopping;
