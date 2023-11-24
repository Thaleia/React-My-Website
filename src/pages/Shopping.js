// Shopping.js

import React from 'react';
import "./skills.css";

const Shopping = ({ cart, removeFromCart, completePurchase, skills, setSkills }) => {
  const handleRemoveFromCart = (index, skillType) => {
    removeFromCart(index, skillType);
    scrollToSkillSection(skillType);
  };

  const scrollToSkillSection = (skillType) => {
    const skillSection = document.getElementById(`${skillType}-skills`);
    if (skillSection) {
      skillSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className='cart-item'>
            <div>
              <p>{item.name}</p>
              <span>{item.image}</span>
              <br />
              <button className="remove" onClick={() => handleRemoveFromCart(index, item.type)}>
                <span className="material-symbols-outlined">remove_shopping_cart</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="complete-purchase" onClick={completePurchase}>
        Complete Purchase
      </button>
    </div>
  );
};

export default Shopping;
