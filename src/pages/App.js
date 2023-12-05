// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import NoPage from './NoPage';
import Navbar from './components/Navbar';
import Skills from './Skills'; 
import FooterPlain from "./components/FooterPlain.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Layout />
              <FooterPlain />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} /> {/* Updated Skills component */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;