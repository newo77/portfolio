import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGithub,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

function Skills() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#skills");
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

  const data = [
    {
      icon: <FaHtml5></FaHtml5>,
      value: "HTML5",
    },
    {
      icon: <FaCss3Alt></FaCss3Alt>,
      value: "CSS3",
    },
    {
      icon: <SiJavascript></SiJavascript>,
      value: "Javascript",
    },
    {
      icon: <FaReact></FaReact>,
      value: "ReactJs",
    },
    {
      icon: <FaPhp></FaPhp>,
      value: "PHP",
    },
    {
      icon: <FaNodeJs></FaNodeJs>,
      value: "Node.js",
    },
    {
      icon: <FaGithub></FaGithub>,
      value: "GitLab",
    },
    {
      icon: <SiMysql></SiMysql>,
      value: "MySql",
    },
    {
      icon: <FaVuejs></FaVuejs>,
      value: "Vue.js",
    },
    {
      icon: <FaBootstrap></FaBootstrap>,
      value: "Bootstrap",
    },
  ];

  return (
    <section
      id="skills"
      className={`container_section_skills ${
        isActive ? "fade-in active" : "fade-in"
      }`}
    >
      <h1 className="title_skills">Skills</h1>
      <div className="container_icon_skills">
        {data.map((item, index) => (
          <div className="icons_skills" key={index}>
            <div className="">{item.icon}</div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
