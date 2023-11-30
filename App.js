import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import NoPage from './NoPage';

function App() {
  const [hardSkills, setHardSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [cart, setCart] = useState([]);
  const [allSkillsAdded, setAllSkillsAdded] = useState(false);

  const addToHardSkills = (item) => {
    setHardSkills([...hardSkills, item]);
    checkAllSkillsAdded();
  };

  const addToSoftSkills = (item) => {
    setSoftSkills([...softSkills, item]);
    checkAllSkillsAdded();
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    checkAllSkillsAdded();
  };

  const checkAllSkillsAdded = () => {
    const totalSkills = 30;

    if (hardSkills.length + softSkills.length + cart.length === totalSkills) {
      setAllSkillsAdded(true);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills allSkillsAdded={allSkillsAdded} cart={cart} addToCart={addToCart} addToHardSkills={addToHardSkills} addToSoftSkills={addToSoftSkills} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
