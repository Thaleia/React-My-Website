import React from 'react';
import "./about.css";
import { MdOutlineAccessTime } from "react-icons/md";import { FaCheckDouble } from "react-icons/fa";

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
        <h2 className='ap aph2'>Hard Skills</h2>
        <p className='ap'>My technical expertise includes frontend technologies such as Javascript, HTML5, CSS3, and popular frameworks and libraries like JQuery and React.<br />On the backend, I have experience with server-side programming languages like Python and Node.js.</p>
      </section>

      <div className='aimg2'>
        <div className='atext'>
          <span className='aborder trans'>
           A problem-solver with a can-do attitude!
          </span>
        </div>
      </div>

      <section className='section section-light'>
        <h2 className='ap aph2 aSoftSkills'>Soft Skills</h2>
        <p className='ap'>A self-learner who lives and breathes coding that reads the manual again and again! Uses coding as a  gateway to creating innovative solutions that have a tangible impact on people's lives. This passion drives me to continuously learn new technologies, and explore avenues to stay at the forefront of emerging technologies and best practices.</p>
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
      <h2 className='ap aph2'>Talent Acquisition Hiring</h2>
        <p className='ap'>Let's turn this monologue into an interview dialogue and discover how my skills can contribute to your company's success journey!<br />I am really looking forward to hearing from you!<br />Contact Thaleia <FaCheckDouble /></p>
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

