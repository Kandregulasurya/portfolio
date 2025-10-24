
import React from "react";
import '../App.css';
import html from "../certificate_img/html.png";
import css3 from "../certificate_img/css.png";
import js from "../certificate_img/js.png";
import web from "../certificate_img/web development.png";
import python from "../certificate_img/py-basics.png";

const certificates = [
  {
    title: "HTML5",
    platform: "Infosys Springboard",
    year: "2024",
    image: html,
    link: "https://drive.google.com/file/d/1kf5o2mZThNnb7a0AgSV2cYSmQtXEEOrZ/view?usp=drivesdk",
  },
  {
    title: "CSS3",
    platform: "Infosys Springboard",
    year: "2024",
    image: css3,
    link: "https://drive.google.com/file/d/1ud6-DYvcpjOplxUBtBeiNa5HgfeqX1Mq/view?usp=drivesdk",
  },
  {
    title: "JAVASCRIPT",
    platform: "Infosys Springboard",
    year: "2024",
    image: js,
    link: "https://drive.google.com/file/d/1TnedZdLCnDk4NEEYFRtbqicgOgrNWXRM/view?usp=drivesdk",
  },
  {
    title: "REACT.JS",
    platform: "Infosys Springboard",
    year: "2025",
    image: "https://via.placeholder.com/300x200",
    link: "https://www.udemy.com/certificate-link",
  },
  {
    title: "Python for Beginners",
    platform: "HackerRank",
    year: "2025",
    image: python,
    link: "https://drive.google.com/file/d/1yHHr9JaJB-HAQi6Mj6f0bgzmkWzVarnU/view?usp=drivesdk",
  },
  {
    title: "Web Development",
    platform: "Excelr",
    year: "2024",
    image: web,
    link: "https://drive.google.com/file/d/1PZjkucxRUPTzCmwT_ijHuhF46sbebg89/view?usp=drivesdk",
  }
];

function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <div class="certificates-block">
      <h2>🎓 Certifications</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} />
            <h3>{cert.title}</h3>
            <p>{cert.platform} • {cert.year}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Certificates;
