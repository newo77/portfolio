import React, { useEffect, useState } from "react";

function About() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
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
    <>
      <section
        id="about"
        className={`container_section_about ${
          isActive ? "fade-in active" : "fade-in"
        }`}
      >
        <h1 className="title_about">About</h1>
        <div className="container_section_grid">
          <img
            className="image_about"
            src="/downloads/about.jpg"
            alt="about"
          />
          <div className="border"></div>
          <span className="container_span_about">
            <h2 className="under_title_about">Hello</h2>
            <p>
              My name is Owen Dayes, a young full-stack web and mobile developer
              passionate about coding since childhood. I excel in using diverse
              technologies to create innovative digital experiences. From HTML,
              CSS, and JavaScript to frameworks like React and Vuejs, I
              constantly push technological boundaries. I thrive on challenges
              and continually learn new skills. My attention to detail ensures
              visually appealing and user-friendly products. I actively engage
              with the tech community, attend conferences, and participate in
              coding competitions. With a love for animals and a passion for
              video games, I aspire to turn my passion into a fulfilling career.
              I also have a deep interest in traveling and exploring new
              cultures.
            </p>
          </span>
        </div>
      </section>
    </>
  );
}

export default About;
