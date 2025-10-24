import React from "react";
import html from "./skills_images/html.png";
import css from "./skills_images/css-3.png";
import js from "./skills_images/js.png";
import react from './skills_images/library.png'
import git from "./skills_images/social.png";
import github from "./skills_images/github-sign.png";
import bootstrap from "./skills_images/bootstrap.png";
import python from "./skills_images/python.png";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React.js", icon: react },
  { name: "Git", icon: git },
  { name: "GitHub", icon: github },
  { name: "Bootstrap", icon: bootstrap },
  { name: "Python", icon: python },
];

function Skills() {
  return (
    <section className="skills-section">
      <h2>SKILLS</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} />
            <label>{skill.name}</label>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
