import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="icon_footer">
        <a
          target="blank"
          className="link_logo_footer"
          href="https://www.linkedin.com/in/owen-dayes-31ba01223/"
        >
          <FaLinkedin className="logo_scale" />
        </a>
        <a
          target="blank"
          className="link_logo_footer"
          href="https://www.instagram.com/_newo_/"
        >
          <FaInstagram className="logo_scale" />
        </a>
        <a
          target="blank"
          className="link_logo_footer"
          href="https://github.com/newo77"
        >
          <FaGithub className="logo_scale" />
        </a>
      </div>
      <p className="informations_contact">
        Dayesowendev@gmail.com - 07 72 29 32 55
      </p>
      <div className="copyright_footer">
        <FaCopyright></FaCopyright> <b>2023</b> copyright all right reserved
      </div>
    </div>
  );
}

export default Footer;
