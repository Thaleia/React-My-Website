import React from 'react';
import './home.css';
import TypewriterComponent from './TypewriterComponent';
import './test.css';
const Home = () => {
  return (
    <div className='home'>
      <h1>Thaleia Vavanou!</h1>
      <h2>
        <TypewriterComponent />
      </h2>
      <p>I create websites that turn your customers into fans!</p>
      <button>Buy Skills</button>
      <div className="parallax-container">
        <img className="parallax-image" src={require('./images/box2.jpeg')} alt="Box 2" />
      </div>
    </div>
  );
};

export default Home;
