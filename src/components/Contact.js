import React from "react";
import '../App.css';

function Contact() {
  const scriptURL = 'Your Google App Script URL';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        alert("Thank you! Form is submitted");
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-block">
        <h1>Contact Me</h1>
        <p>
          Have a project in mind or just want to say hi?  
          I’d love to connect! Fill out the form below 👇
        </p>

        <div className="contact-container" id="contact">
          <form
            className="contact-form"
            method="post"
            name="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <input type="text" placeholder="Your Name" name="Name" required />
              <input type="text" placeholder="Your Number" name="Number" required />
              <input type="email" placeholder="Your Email" name="Email" required />
            </div>

            <textarea placeholder="Your Message" rows="5" name="Message" required></textarea>

            <button type="submit" id="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p><strong>Email:</strong> suryakandregula2003@gmail.com</p>
            <p><strong>Phone:</strong> +91 6281929437</p>
            <p><strong>Location:</strong> Anakapalle, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
