import React from 'react';
import './App.css';

const certificateData = [
  {
    title: 'Cisco Virtual Internship Certificate',
    url: 'https://muthuprabhu2003.github.io/certificates/Cicso_certificate.pdf',
  },
  {
    title: 'Tata Forage - Data Visualization Certificate',
    url: 'https://muthuprabhu2003.github.io/certificates/Forage-Data_Visualisation.pdf',
  },
  {
    title: 'HTML Certification - Great Learning',
    url: 'https://muthuprabhu2003.github.io/certificates/HTML_Certification.pdf',
  },
  {
    title: 'Cisco Virtual Internship Letter',
    url: 'https://muthuprabhu2003.github.io/certificates/Cisco_letter.pdf',
  },
  {
    title: 'Infosys Cybersecurity Certification',
    url: 'https://muthuprabhu2003.github.io/certificates/Infosys_Cybersecurity.pdf',
  },
  {
    title: 'Novitech Full Stack Internship Certificate',
    url: 'https://muthuprabhu2003.github.io/certificates/Novitech_fullstack.pdf',
  },
  {
    title: 'Shiash Project Completion Certificate',
    url: 'https://muthuprabhu2003.github.io/certificates/Shiash%20_Project_Completeion%20Certificate.pdf',
  },
  {
    title: 'Shiash Internship Completion Certificate',
    url: 'https://muthuprabhu2003.github.io/certificates/Shiash_Internship_Certificate.pdf',
  },
  {
    title: 'Course Completion Certificate - Python ',
    url: 'https://github.io/Muthuprabhu2003/certificates/blob/main/python.pdf',
  }
];

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates__container">
        {certificateData.map((cert, index) => (
          <div key={index} className="certificate__card">
            <h3>{cert.title}</h3>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Certificates;
