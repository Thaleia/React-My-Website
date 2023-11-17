import Typewriter from "typewriter-effect";

import React from 'react'

const Typewriter = () => {
  return (
    <div>
      <Typewriter
 onInit={(typewriter) => {
     typewriter
         .typeString("GeeksForGeeks")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Welcomes You")
         .start();
 }}
/>
    </div>
  )
}

export default Typewriter
