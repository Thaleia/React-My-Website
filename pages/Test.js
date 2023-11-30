// import React, { useState } from 'react';
// import { hardSkills, softSkills } from '../data/data.js';
// import "./skills.css";
// import Shopping from './Shopping';

// const SkillItem = ({ skill, addToCart }) => (
//   <li key={skill.id}>
//     <div>
//       <p>{skill.name}</p>
//       <span>{skill.image}</span>
//       <br />
//       <button className="shoppingCart" onClick={() => addToCart(skill)}>
//         <span className="material-symbols-outlined">shopping_cart</span>
//       </button>
//     </div>
//   </li>
// );

// const SkillsList = ({ skills, filterSkills, addToCart }) => (
//   <ul>
//     {skills.filter(skill => filterSkills.includes(skill)).map(skill => (
//       <SkillItem key={skill.id} skill={skill} addToCart={addToCart} />
//     ))}
//   </ul>
// );

// const Skills = () => {
//   const [cart, setCart] = useState([]);
//   const [skills, setSkills] = useState([...hardSkills, ...softSkills]); // Initial skills list

//   const addToCart = (item) => {
//     const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

//     if (existingItemIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[existingItemIndex].quantity += 1;
//       setCart(updatedCart);
//     } else {
//       setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
//       setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== item.id));
//     }
//   };
  
//   const completePurchase = () => {
//     setCart([]);
//     setSkills([...hardSkills, ...softSkills]);
//   };

//   return (
//     <div className='skills-container'>
//       <div className='skills'>
//         <h1>Hard Skills</h1>
//         <div id="hard-skills" className='hard-skills'>
//           <SkillsList skills={skills} filterSkills={hardSkills} addToCart={addToCart} />
//         </div>

//         <h1>Soft Skills</h1>
//         <div id="soft-skills" className='soft-skills'>
//           <SkillsList skills={skills} filterSkills={softSkills} addToCart={addToCart} />
//         </div>
//       </div>

//       {cart.length > 0 && (
//         <div className='shopping'>
//           <Shopping
//             cart={cart}
//             completePurchase={completePurchase}
//             skills={skills}
//             setSkills={setSkills}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Skills;

// import React from 'react';
// import "./skills.css";

// const Shopping = ({ cart, completePurchase }) => {
  
//   return (
//     <div className='shopping-cart'>
//       <h1>Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your shopping cart is empty.</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index} className='cart-item'>
//                 <div>
//                   <p>{item.name}</p>
//                   <span>{item.image}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <button className="complete-purchase" onClick={completePurchase}>
//             Complete Purchase
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Shopping;
