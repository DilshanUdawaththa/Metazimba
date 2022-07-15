import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className="main_nav_links main_header_links">
        <nav className={toggle ? "navbar expanded" : "navbar_header"}>
          <h2 className="logo">Metazimba</h2>
          <div className="toggle-icon" onClick={handleToggle}>
            {toggle ? <FaTimes /> : <FaBars />}
          </div>
          <ul className="links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about_us">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact_us">CONTACT US</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
