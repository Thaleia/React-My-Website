import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="universalFont">
      <h4>Thaleia Vavanou</h4>
      <nav ref={navRef}>
        <Link className="nav-a" to="/">Home</Link>
        <Link className="nav-a" to="/about">About</Link>
        <Link className="nav-a" to="/projects">Projects</Link>
        <Link className="nav-a" to="/skills">Skills</Link>
        <Link className="nav-a" to="/contact">Contact me</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
