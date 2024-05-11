// import { useGlobalContext } from "./context";
import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";

let skillsIcons = [
  { name: "Redux", icon: <TbBrandRedux /> },
  { name: "REACT", icon: <FaReact /> },
  { name: "JAVASCRIPT", icon: <IoLogoJavascript /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "GIT & GITHUB", icon: <FaGithub /> },
];

const Skills = () => {
  // const { closeSidebar } = useGlobalContext();
  // DISPLAY SKILLS

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">&lt; Skills &#47;&#62;</h2>
      <div className="container">
        <div className="skills-content">
          {skillsIcons.map((skill) => {
            console.log(skill);
            return (
              <div className="skills-box line-swaping">
                <span
                  className="iconify"
                  data-icon="${skill.icon}"
                  data-width="30">
                  {skill.icon}
                </span>
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
