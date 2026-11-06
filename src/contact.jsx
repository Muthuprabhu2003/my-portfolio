import React from 'react';
import './App.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact__container">
        <form
          action="mailto:muthuprabhu2003mp@gmail.com"
          method="POST"
          className="contact__form"
        >
          <input type="text" name="name" placeholder="Your Name" className="contact__input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact__input" required />
          <textarea name="message" placeholder="Your Message" className="contact__input" rows="5" required></textarea>
          <button type="submit" className="button">🚀 Send Message</button>
        </form>

        <div className="contact__info">
          <a href="mailto:muthuprabhu2003mp@gmail.com" className="contact__info-card" target="_blank" rel="noopener noreferrer">
            <i className='bx bx-envelope'></i>
            muthuprabhu2003mp@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/muthu-prabhu" className="contact__info-card" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
            LinkedIn
          </a>
          <a href="https://github.com/Muthuprabhu2003" className="contact__info-card" target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
