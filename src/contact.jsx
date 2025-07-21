import React from 'react';
import './App.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container bd-grid">
        <form
          action="mailto:muthuprabhu2003mp@gmail.com"
          method="POST"
          className="contact__form"
        >
          <input type="text" name="name" placeholder="Your Name" className="contact__input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact__input" required />
          <textarea name="message" placeholder="Your Message" className="contact__input" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>

        <div className="contact__info">
          <p>
            <i className='bx bx-envelope'></i>
            <a href="mailto:muthuprabhu2003mp@gmail.com" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </p>
          <p>
            <i className='bx bxl-linkedin'></i>
            <a href="https://www.linkedin.com/in/muthu-prabhu" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p>
            <i className='bx bxl-github'></i>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
