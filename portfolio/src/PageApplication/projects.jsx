import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="container_section_project">
      <h1 className="title_project">Projects</h1>
      <div className="flex_container">
        <div className="container_project">
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
          <img
            className="image_project"
            src="https://s2.dmcdn.net/v/2ahT31FcUS0pQ9KU_/x1080"
            alt=""
          />
        </div>
      </div>
      <div className="container_download">
        <a className="download_file" href="/downloads/cv_dev_fullstack.pdf" download>
          <div className="wrapper_btn">
            <FaCloudDownloadAlt className="svg_download"></FaCloudDownloadAlt> Download CV
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
