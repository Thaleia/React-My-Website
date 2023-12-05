import React from 'react';
// import './home.css';
import TypewriterComponent from './components/TypewriterComponent';
import './test.css';


const Home = () => {
  
  return (
    <div className='home'>
      <div className="expanding-container">
          <img className="himg" src={require('./images/box2.jpeg')} alt="Box 2" />
      </div>
      <h1 className='hH1'>
        I craft websites to transform visitors into customers <br />
        and ultimately into fans!
      </h1>
      <h2>
        <TypewriterComponent />
      </h2>
    </div>
  );
};

export default Home;

{/* <div className='animation-box'>

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
          <img className="himg himg2" src={require('./images/aimg1.jpeg')} alt="Hero" />
        </div>

        <div className="skills-box ">
        <SkillsSlider />
        </div>
      </div> */}
