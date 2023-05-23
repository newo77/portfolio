import React from "react";

function About() {
  return (
    <>
      <div id="about" className="container_section_about">
        <h1 className="title_about">About</h1>
        <div className="container_section_grid">
          <img
            className="image_about"
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Poulet_de_chair.jpg"
            alt=""
          />
          <div className="border"></div>
          <span className="container_span_about">
            <h2>Hello</h2>
            <p>
              My name is Owen Dayes, a young full-stack web and mobile developer
              passionate about coding since childhood. I excel in using diverse
              technologies to create innovative digital experiences. From HTML,
              CSS, and JavaScript to frameworks like React and Vuejs, I
              constantly push technological boundaries. I thrive on challenges
              and continually learn new skills. My attention to detail ensures
              visually appealing and user-friendly products. I actively engage
              with the tech community, attend conferences, and participate in
              coding competitions. I'm Owen Dayes, a dedicated developer eager
              to make a positive impact through my expertise and love for
              coding.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
