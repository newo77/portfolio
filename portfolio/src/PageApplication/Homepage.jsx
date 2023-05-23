import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Homepage() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "FULL-STACK DEVELOPER",
    "WEB DESIGNER",
    "LOGO DESIGNER",
    "UI/UX DESIGNER",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <div id="home" className="container_homepage_title">
      <div className="container_section_presentation">
        <h1 className="homepage_title">
          Hi,
          <br />
          I'm <b className="red_title">OWEN</b>
          <br />
          <div className="title_wrapper">
            {titles.map((title, index) => (
              <span
                key={index}
                className={`title_item ${index === titleIndex ? "active" : ""}`}
              >
                {title}
              </span>
            ))}
          </div>
        </h1>
        <button className="btn_contact_homepage">CONTACT</button>
        <div className="Logo_icon_bootstrap">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link_logo"
            href="https://www.linkedin.com/in/owen-dayes-31ba01223/"
          >
            <FaLinkedin className="logo_scale" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link_logo"
            href="/"
          >
            <FaInstagram className="logo_scale" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link_logo"
            href="https://github.com/newo77"
          >
            <FaGithub className="logo_scale" />
          </a>
        </div>
      </div>
      <div className="hexagon_container">
        <div className="hexagon_rotate">
          <div className="hexagon_inner">
            <div className="image_wrapper">
              <img
                className="image_presentation"
                src="https://www.fredzone.org/wp-content/uploads/2022/04/Nezuko-Demon-Slayer-1200x900.webp"
                alt="nezukooo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
