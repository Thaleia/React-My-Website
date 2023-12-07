import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(4000)
          .typeString('Full Stack Developer')
          .pauseFor(1000)
          .deleteAll()
          .typeString('Frontend Developer')
          .pauseFor(1000)
          .deleteAll()
          .typeString('Discover Projects')
          .pauseFor(1000)
          .deleteAll()
          .typeString('Explore Skills')
          .start();
      }}
    />
  );
};

export default TypewriterComponent;
