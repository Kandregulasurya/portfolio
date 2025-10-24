import React from "react";

const projects = [
  {
    title: "Rock-Paper-Scissor Game",
    description:
      "A fun and interactive game built with HTML, CSS & JavaScript. Play against the computer with real-time scores and responsive design, showcasing DOM manipulation and frontend logic skills.",
    github: "https://github.com/Kandregulasurya/rock-paper-scissor-Game", 
    live: "https://kandregulasurya.github.io/rock-paper-scissor-Game/",   
  },
  {
    title: "TO-DO List",
    description:
      "A user-friendly task manager built with HTML, CSS & JavaScript. Add, edit, complete, and delete tasks with real-time updates, showcasing DOM manipulation and frontend logic skills.",
    github: "https://github.com/Kandregulasurya/To-Do-list",
    live: "https://kandregulasurya.github.io/To-Do-list/",
  },
  {
    title: "Text-To-Speak",
    description:
      "A web app built with JavaScript & Web Speech API that converts text into real-time speech. Users can adjust voice, speed, and pitch, showcasing interactive frontend skills.",
    github: "https://github.com/Kandregulasurya/text_to_voice-conveter",
    live: "https://kandregulasurya.github.io/text_to_voice-conveter/",
  },
  {
    title: "QR Code Generator",
    description:
      "A web app built with HTML, CSS & JavaScript that generates custom QR codes from text or URLs, allowing instant preview and download, showcasing frontend and interactive skills.",
    github: "https://github.com/Kandregulasurya/qr-generator",
    live: "https://kandregulasurya.github.io/qr-generator/",
  },
  {
    title: "Temperature Converter",
    description:
      "A web app built with HTML, CSS & JavaScript that converts temperatures between Celsius, Fahrenheit, and Kelvin instantly, showcasing interactive frontend skills.",
    github: "https://github.com/Kandregulasurya/Temperature-converter-",
    live: "https://kandregulasurya.github.io/Temperature-converter-/",
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <div class="project-block" id="projects">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <button>Github Link</button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button>Project Live Link</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Projects;
