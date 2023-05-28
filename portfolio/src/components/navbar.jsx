import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

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

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <div className="container_navbar">
      <div className="navbar_children">
        <ul className={`container_list_menu ${isBurgerMenuOpen ? "open" : ""}`}>
          <li className={`list_menu ${activeSection === "home" ? "active" : ""}`} onClick={closeBurgerMenu}>
            <a className="link_navbar" href="#home">
              Home
            </a>
          </li>
          <li className={`list_menu ${activeSection === "about" ? "active" : ""}`} onClick={closeBurgerMenu}>
            <a className="link_navbar" href="#about">
              About
            </a>
          </li>
          <li className={`list_menu ${activeSection === "skills" ? "active" : ""}`} onClick={closeBurgerMenu}>
            <a className="link_navbar" href="#skills">
              Skills
            </a>
          </li>
          <li className={`list_menu ${activeSection === "projects" ? "active" : ""}`} onClick={closeBurgerMenu}>
            <a className="link_navbar" href="#projects">
              Projects
            </a>
          </li>
          <li className={`list_menu ${activeSection === "contact" ? "active" : ""}`} onClick={closeBurgerMenu}>
            <a className="link_navbar" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <button className="burger_button" onClick={toggleBurgerMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
