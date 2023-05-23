import React, { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container_navbar">
      <div className="navbar_children">
        <ul className="container_list_menu">
          <li
            className={`list_menu ${activeSection === "home" ? "active" : ""}`}
            onClick={() => handleSectionClick("home")}
          >
            <a  className="link_navbar
            " href="#home"> Home</a>
          </li>
          <li
            className={`list_menu ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleSectionClick("about")}
          >
            <a  className="link_navbar
            " href="#about"> About</a>
          </li>
          <li
            className={`list_menu ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => handleSectionClick("skills")}
          >
            <a  className="link_navbar
            "href="#skills"> Skills</a>
          </li>
          <li
            className={`list_menu ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleSectionClick("projects")}
          >
            <a  className="link_navbar
            "href="#projects"> Projects</a>
          </li>
          <li
            className={`list_menu ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleSectionClick("contact")}
          >
            <a  className="link_navbar
            "href="#contact"> Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
