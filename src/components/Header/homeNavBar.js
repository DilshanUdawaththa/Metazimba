import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <div className="main_nav_links">
        <nav className={toggle ? "navbar expanded" : "navbar"}>
          <h2 className="logo">Metazimba</h2>
          <div className="toggle-icon" onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
          <ul className="links">
            <li className="active">HOME</li>
            <li><Link to="about_us">ABOUT US</Link></li>
            <li><Link to="contact_us">CONTACT US</Link></li>
            <li><Link to="services">SERVICES</Link></li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default HomeNavBar;
