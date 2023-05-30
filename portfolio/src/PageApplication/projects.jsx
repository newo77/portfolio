import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="container_section_project">
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
                <a className="link_card_text" href="https://github.com/newo77/restaurant_ecf">Restaurant 🍲 </a>
                <p className="description_card_text">Restaurant offers an efficient reservation system combined with role-based login, enhancing the dining experience. With a user-friendly interface, customers can easily book their tables while the staff members can manage orders, track inventory, and provide personalized service based on assigned roles."</p>
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
                <a className="link_card_text" href="https://lecollectif21.com">
                  Le collectif 21(wordpress) 🌳
                </a>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="image_project" src="/pictures/ecoit.jpg" alt="ecoit_project" />
            <div className="card_overlay">
              <p className="card_text">
                <a className="link_card_text" href="https://github.com/newo77/Projet_ecf">Ecoit 📚</a>
              </p>
            </div>
          </div>
          <div className="card">
            <img className="image_project" src="/pictures/python.jpg" alt="" />
            <div className="card_overlay">
              <p className="card_text">
                <a className="link_card_text" href="https://github.com/newo77/first_game">
                  Game using python library 🎮
                </a>
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
