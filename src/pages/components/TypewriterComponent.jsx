import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterComponent = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Full Stack Developer')
          .pauseFor(500)
          .deleteAll()
          .typeString('Frontend Developer')
          .pauseFor(2000)
          .deleteAll()
          .typeString('Full Stack Developer')
          .start();
      }}
    />
  );
};

export default TypewriterComponent;
