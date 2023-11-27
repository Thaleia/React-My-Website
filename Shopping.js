// Shopping.js

import React from 'react';
import "./skills.css";

const Shopping = ({ cart, completePurchase }) => {
  
  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
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
      )}
    </div>
  );
};

export default Shopping;