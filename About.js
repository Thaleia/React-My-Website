import React from 'react'
import "./about.css"
import tv from './images/tv.png';


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

      <section className='section section-light'>
        <h2>Section one</h2>
        <p>My technical expertise includes frontend technologies such as Javascript, HTML5, CSS3, and popular frameworks and libraries like JQuery and React. On the backend, I have experience with server-side programming languages like Python and Node.js.</p>
      </section>

      <div className='aimg2'>
        <div className='atext'>
          <span className='aborder trans'>
           Image two text
          </span>
        </div>
      </div>

      <section className='section section-dark'>
        <h2>Section two</h2>
        <p>    A self-learner who lives and breathes coding, who uses it as a  gateway to creating innovative solutions that have a tangible impact on people's lives. This passion drives me to continuously learn new technologies and explore avenues to stay at the forefront of emerging technologies and best practices.</p>
        <p>My mission is to create solutions that provide a holistic and enjoyable brand experience, ultimately turning customers into fans. To achieve this, I leverage my leadership skills, strong commercial awareness, as well as my excellent teamwork, and effective communication skills.</p>
      </section>

      <div className='aimg3'>
        <div className='atext'>
          <span className='aborder trans'>
            Image three text
          </span>
        </div>
      </div>

      <section className='section section-dark'>
        <h2>Section Three</h2>
        <p>I truly thank you for taking the time to consider my application! I hope you turn this cover letter monologue into an interview dialogue, and discover how my skills can contribute to the company's success journey! I am really looking forward to the possibility of joining your team!</p>
      </section>

      <div className='aimg1'>
        <div className='atext'>
          <span className='aborder'>
            what i stand for
          </span>
        </div>
      </div>

    </div>
  )
}

export default About;

