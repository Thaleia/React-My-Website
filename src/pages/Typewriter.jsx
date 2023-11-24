import Typewriter from "typewriter-effect";

import React from 'react'

const Typewriter = () => {
  return (
    <div>
      <Typewriter
 onInit={(typewriter) => {
     typewriter
         .typeString("Full Stack Developer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Frontend Developer")
         .deleteAll()
         .pauseFor(1000)
         .typeString("Full Stack Developer")
         .start();
 }}
/>
    </div>
  )
}

export default Typewriter
