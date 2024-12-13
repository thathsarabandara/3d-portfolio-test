import React from 'react';
import NavBtn from '../BtnComponent/NavBtn';
import './NavBar.css';

function NavBar() {
  return (
    <div className="side-buttons-container">
      <NavBtn text="Home" to="/" />
      <NavBtn text="Education" iconClass="fa-solid fa-graduation-cap" to="/education" />
      <NavBtn text="Certifications" iconClass="fa-solid fa-certificate" to="/certifications" />
      <NavBtn text="Skills" iconClass="fa-solid fa-brain" to="/skills" />
      <NavBtn text="Projects" iconClass="fa-solid fa-briefcase" to="/projects" />
      <NavBtn text="Contact" iconClass="fa-solid fa-phone" to="/contact" />
      <NavBtn text="Controls" iconClass="fa-solid fa-gear" to="/controls" />
    </div>
  );
}

export default NavBar;
