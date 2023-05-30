import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Homepage() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = [
    "FULL-STACK DEVELOPER",
    "WEB DESIGNER",
    "LOGO DESIGNER",
    "UI/UX DESIGNER",
    "MOBILE DEVELOPER",
  ];

  const image_pdp = "https://media.licdn.com/dms/image/D4E03AQE6tCS8gQYUAQ/profile-displayphoto-shrink_800_800/0/1682785675401?e=1691020800&v=beta&t=x_m2aBP28Efce4x2mbdmwX-VSnUDpw4qUXtNBgiFCZo"

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    
    <section id="home">
      <div className="container_homepage_title">
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
                  className={`title_item ${
                    index === titleIndex ? "active" : ""
                  }`}
                >
                  {title}
                </span>
              ))}
            </div>
          </h1>
          <button className="btn_contact_homepage">
            <a className="reference_contact" href="#contact">
              CONTACT
            </a>
          </button>
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
              href="https://www.instagram.com/_newo_/"
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

        <img
          className="image_presentation"
          src={image_pdp}
          alt="nezukooo"
        />
      </div>
    </section>
  );
}

export default Homepage;
