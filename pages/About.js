import React from 'react'
import "./about.css"


const About = () => {
  return (
    <div className='about'>

      <div className='aimg1'>
        <div className='atext'>
          <span className='aborder'>
            who i am
          </span>
        </div>
      </div>

      <section className='section section-dark'>
        <h2>Hard Skills</h2>
        <p className='ap'>My technical expertise includes frontend technologies such as Javascript, HTML5, CSS3, and popular frameworks and libraries like JQuery and React. On the backend, I have experience with server-side programming languages like Python and Node.js.</p>
      </section>

      <div className='aimg2'>
        <div className='atext'>
          <span className='aborder trans'>
           yes, I am up for it!
          </span>
        </div>
      </div>

      <section className='section section-light'>
        <h2>Soft SKills</h2>
        <p className='ap'>A self-learner who lives and breathes coding, who uses it as a  gateway to creating innovative solutions that have a tangible impact on people's lives. This passion drives me to continuously learn new technologies and explore avenues to stay at the forefront of emerging technologies and best practices.</p>
        <p className='ap'>My mission is to create solutions that provide a holistic and enjoyable brand experience, ultimately turning customers into fans. To achieve this, I leverage my leadership skills, strong commercial awareness, as well as my excellent teamwork, and effective communication skills.</p>
      </section>

      <div className='aimg3'>
        <div className='atext'>
          <span className='aborder trans'>
            a great asset
          </span>
        </div>
      </div>

      <section className='section section-dark'>
        <h2>Talent Acquisition Complete</h2>
        <p className='ap'>I truly thank you for taking the time to consider my application! I hope you turn this cover letter monologue into an interview dialogue, and discover how my skills can contribute to the company's success journey! I am really looking forward to the possibility of joining your team!</p>
      </section>

      <div className='aimg1'>
        <div className='atext'>
          <span className='aborder'>
            an invaluable team player
          </span>
        </div>
      </div>

    </div>
  )
}

export default About;

