import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">SURYA.DEV</h2>
        <p className="footer-text">
          Passionate Frontend Developer | Building responsive, modern & user-friendly websites.
        </p>

        <div className="social-links">
          <a href="https://github.com/Kandregulasurya" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" title="Github"></i>
          </a>
          <a href="https://www.linkedin.com/in/surya-kandregula?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin" title="Linkedin"></i>
          </a>
          <a href="mailto:suryaprince059@gmail.com?subject=Hello%20Surya&body=Hi%20Surya%2C%0A%0AI%20want%20to%20contact%20you.">
            <i class="fa-solid fa-envelope" title="G-mail"></i>
          </a>
          <a href="https://www.instagram.com/kandregulasurya_59?igsh=MXN3ZTlla3RxNnM5eA==" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram" title="Instagram"></i>
          </a>
          <a href=" https://www.hackerrank.com/profile/suryakandregula2 " target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-hackerrank" title="Hackerrank"></i>
          </a>
          <a href="https://wa.me/916281929437?text=Hello%20Surya%2C%20I%20want%20to%20chat%20with%20you." target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp" title="whatsapp"></i>
          </a>
          <a href="https://x.com/suryaprince_059?t=nlCYW2mvIOcKZuXgMXmsAg&s=09" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-twitter" title="hello"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kandregula Surya. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
