import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Homepage() {
  return (
    <div id="home" className="container_homepage_title">
      <h1 className="homepage_title">
        Hi,
        <br />
        I'm <b className="red_title"> OWEN</b>
        <br />
        FULL - STACK DEVELOPPER
      </h1>
      <button className="btn_contact_homepage">CONTACT</button>
      <div className="Logo_icon_bootstrap">
        <a
          target="blank"
          className="link_logo"
          href="https://www.linkedin.com/in/owen-dayes-31ba01223/"
        >
          <FaLinkedin className="logo_scale" />
        </a>
        <a target="blank" className="link_logo" href="/">
          <FaInstagram className="logo_scale" />
        </a>
        <a
          target="blank"
          className="link_logo"
          href="https://github.com/newo77"
        >
          <FaGithub className="logo_scale" />
        </a>
      </div>
    </div>
  );
}

export default Homepage;
