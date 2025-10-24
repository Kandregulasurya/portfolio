
import React from "react";
import './App.css';

const certificates = [
  {
    title: "React Basics",
    platform: "Coursera",
    year: "2025",
    image: "https://via.placeholder.com/300x200",
    link: "https://www.coursera.org/certificate-link",
  },
  {
    title: "Frontend Development",
    platform: "LearnCode Online",
    year: "2024",
    image: "https://via.placeholder.com/300x200",
    link: "https://www.learncodeonline.in/certificate-link",
  },
  {
    title: "Python for Beginners",
    platform: "Udemy",
    year: "2025",
    image: "https://via.placeholder.com/300x200",
    link: "https://www.udemy.com/certificate-link",
  },
];

function Certificates() {
  return (
    <section className="certificates">
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
    </section>
  );
}

export default Certificates;
