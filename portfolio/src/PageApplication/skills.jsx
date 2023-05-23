import React from "react";
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
    <div id="skills" className="container_section_skills">
      <h1 className="title_skills">Skills</h1>
      <div className="container_icon_skills">
        {data.map((item, index) => (
          <div className="icons_skills" key={index}>
            <div className="">{item.icon}</div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
