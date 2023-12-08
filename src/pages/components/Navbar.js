import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="universalFont navbar">
      <div  className="middle">
       <Link className="logo" to="/" onClick={closeNavbar}><h4>Thaleia Vavanou</h4></Link>
      </div>
      <div className="middle">
      <nav className="middle" ref={navRef}>
        <Link className="nav-a" to="/" onClick={closeNavbar}>Home</Link>
        <Link className="nav-a" to="/about" onClick={closeNavbar}>About</Link>
        <Link className="nav-a" to="/projects" onClick={closeNavbar}>Projects</Link>
        <Link className="nav-a" to="/skills" onClick={closeNavbar}>Skills</Link>
        <Link className="nav-a" to="/contact" onClick={closeNavbar}>Contact</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      </div>
    </header>
  );
}

export default Navbar;
