import React from 'react';
import { Link } from 'react-router-dom'; 
import './home.css';
import TypewriterComponent from './components/TypewriterComponent';


const Home = () => {
  
  return (
    <div className='home'>
      <div className="expanding-container">
          <img className="himg" src={require('./images/box2.jpeg')} alt="Box 2" />
      </div>
      <div className='text-wrapper'>
        <h1 className='hH1'>
          I craft websites to transform visitors into customers <br />
          and ultimately into fans!
        </h1>
        <h2 className='typewriter'>
          <Link to="/skills" style={{ textDecoration: 'none' }}>
            <TypewriterComponent />
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Home;



