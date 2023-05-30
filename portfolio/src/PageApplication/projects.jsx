import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Projects() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#projects");
      const position = aboutSection.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      id="projects"
      className={`container_section_project ${
        isActive ? "fade-in active" : "fade-in"
      }`}
    >
      <h1 className="title_project">Projects</h1>
      <div className="flex_container">
        <div className="container_project">
          <div className="card">
            <img
              className="image_project"
              src="/pictures/restaurant.webp"
              alt="restaurant_project"
            />
            <div className="card_overlay">
              <p className="card_text">
                <a
                  className="link_card_text"
                  target="blank"
                  href="https://github.com/newo77/restaurant_ecf"
                >
                  Restaurant 🍲{" "}
                </a>
                <p className="description_card_text">
                  Restaurant offers an efficient reservation system combined
                  with role-based login, enhancing the dining experience. With a
                  user-friendly interface, customers can easily book their
                  tables while the staff members can manage orders, track
                  inventory, and provide personalized service based on assigned
                  roles."
                </p>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="image_project"
              src="/pictures/lecollectif.png"
              alt="lecollectif21_project"
            />
            <div className="card_overlay">
              <p className="card_text">
                <a
                  className="link_card_text"
                  target="blank"
                  href="https://lecollectif21.com"
                >
                  Le collectif 21(wordpress) 🌳
                </a>
                <p className="description_card_text">
                  LeCollectif21 is a showcase website that offers a range of
                  training programs focused on health and management. It caters
                  to individuals looking to enhance their knowledge and skills
                  in these areas. The site showcases various courses and
                  workshops designed to empower individuals with valuable
                  insights and practical tools.
                </p>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="image_project"
              src="/pictures/ecoit.jpg"
              alt="ecoit_project"
            />
            <div className="card_overlay">
              <p className="card_text">
                <a
                  className="link_card_text"
                  target="blank"
                  href="https://github.com/newo77/Projet_ecf"
                >
                  Ecoit 📚
                </a>
                <p className="description_card_text">
                  EcoIT is an online platform that specializes in providing
                  personalized training and education services. The website
                  offers a comprehensive range of courses accessible through a
                  user-friendly platform built on PHP Symfony. Students can
                  enjoy the benefits of a seamless learning experience with the
                  site's sophisticated login system. (project personnal).
                </p>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="image_project" src="/pictures/python.jpg" alt="" />
            <div className="card_overlay">
              <p className="card_text">
                <a
                  className="link_card_text"
                  target="blank"
                  href="https://github.com/newo77/first_game"
                >
                  Game using python library 🎮
                </a>
                <p className="description_card_text">
                  This Python game, developed using the Pygame library,
                  simulates a third-person shooter experience. With its
                  immersive graphics and smooth gameplay mechanics, it provides
                  an engaging gaming experience.
                </p>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="image_project"
              src="/pictures/indev.jpg"
              alt="in dev"
            />
            <div className="card_overlay">
              <p className="card_text">in dev 😊</p>
            </div>
          </div>
          <div className="card">
            <img
              className="image_project"
              src="/pictures/indev.jpg"
              alt="in dev"
            />
            <div className="card_overlay">
              <p className="card_text">in dev 😊</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container_download">
        <a
          className="download_file"
          href="/downloads/cv_dev_fullstack.pdf"
          download
        >
          <div className="wrapper_btn">
            <FaCloudDownloadAlt className="svg_download"></FaCloudDownloadAlt>
            Download CV
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
