import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container_navbar">
      <div className="navbar_children">
        <ul className="container_list_menu">
          <li
            className={`list_menu ${activeSection === "home" ? "active" : ""}`}
          >
            <a className="link_navbar" href="#home">
              Home
            </a>
          </li>
          <li
            className={`list_menu ${activeSection === "about" ? "active" : ""}`}
          >
            <a className="link_navbar" href="#about">
              About
            </a>
          </li>
          <li
            className={`list_menu ${
              activeSection === "skills" ? "active" : ""
            }`}
          >
            <a className="link_navbar" href="#skills">
              Skills
            </a>
          </li>
          <li
            className={`list_menu ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            <a className="link_navbar" href="#projects">
              Projects
            </a>
          </li>
          <li
            className={`list_menu ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <a className="link_navbar" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
