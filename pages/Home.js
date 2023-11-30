import React from 'react'
import "./home.css"
import Typewriter from "typewriter-effect";
import tv from './images/tv.png';


const Home = () => {
  return (
    <div className='home'>
      <img src={tv} alt='Thaleia Vavanou'></img>
        <h1>Thaleia Vavanou!</h1>
        <h2>
          <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Full Stack Developer")
                        .pauseFor(500)
                        .deleteAll()
                        .typeString("Frontend Developer")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Full Stack Developer")
                        .start();
                }}
            />
            </h2>
      <p>Hello! I'm a solution-driven, ambitious, and adaptable developer with true passion for creating extraordinary web products and
services! I thrive by learning new technologies and successfully collaborating to deliver measurable business growth.  My mission is to create apps for a holistic and fun brand experience which turns your customers into fans!</p>
    <button>Buy Skills</button>
    </div>
  )
}

export default Home;

