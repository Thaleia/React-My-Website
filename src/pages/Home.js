import React from 'react';
import './home.css';
import TypewriterComponent from './TypewriterComponent';
// import './test.css';
import SkillsSlider from './SkillsSlider'
const Home = () => {
  
  return (
    <div className='home'>
      {/* <h1>Thaleia Vavanou!</h1> */}
    
      <h1 className='hH1'>I create websites that turn your customers into fans!</h1>
      {/* <button>Buy Skills</button> */}
      <div className="expanding-container">
          <img className="himg" src={require('./images/box2.jpeg')} alt="Box 2" />
        </div>

      <div className='animation-box'>

        <div className="floating-image">
          <img className="himg" src={require('./images/HelloThere.jpeg')} alt="Hello There" />
        </div>

        <div className="strong-hover-shake-image">
          <img className="himg" src={require('./images/givingFlowers.jpeg')} alt="Hello There" />
        </div>

        <div className="vertical-shake">
          <img className="himg" src={require('./images/pimg111.jpeg')} alt="Hello There" />
        </div>

        <div className="box">
          <img className="himg" src={require('./images/aimg1.jpeg')} alt="Hero" />
        </div>

        <div className="skills-box">
        <SkillsSlider />
        </div>
      </div>
      <h2>
        <TypewriterComponent />
      </h2>
    </div>
  );
};

export default Home;
