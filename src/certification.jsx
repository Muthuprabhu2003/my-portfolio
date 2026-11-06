import React from 'react';
import './App.css';

const certificateData = [
  {
    title: 'Cisco Virtual Internship Certificate',
    issuer: 'Cisco',
    icon: '🌐',
    url: 'https://muthuprabhu2003.github.io/certificates/Cicso_certificate.pdf',
  },
  {
    title: 'Cisco Virtual Internship Letter',
    issuer: 'Cisco',
    icon: '🌐',
    url: 'https://muthuprabhu2003.github.io/certificates/Cisco_letter.pdf',
  },
  {
    title: 'Network Basics in CISCO',
    issuer: 'Cisco NetAcad',
    icon: '🔌',
    url: 'https://www.netacad.com/certificates/?issuanceId=683b178d-6334-4ad9-945e-6b084f31fc12',
  },
  {
    title: 'TATA Forage – Data Visualization',
    issuer: 'Forage / TATA',
    icon: '📊',
    url: 'https://muthuprabhu2003.github.io/certificates/Forage-Data_Visualisation.pdf',
  },
  {
    title: 'HTML Certification',
    issuer: 'Great Learning',
    icon: '🌍',
    url: 'https://muthuprabhu2003.github.io/certificates/HTML_Certification.pdf',
  },
  {
    title: 'Infosys Cybersecurity Certification',
    issuer: 'Infosys Springboard',
    icon: '🔐',
    url: 'https://muthuprabhu2003.github.io/certificates/Infosys_Cybersecurity.pdf',
  },
  {
    title: 'Python Course Completion',
    issuer: 'Online Learning',
    icon: '🐍',
    url: 'https://muthuprabhu2003.github.io/certificates/python.pdf',
  },
  {
    title: 'Novitech Full Stack Internship',
    issuer: 'Novitech',
    icon: '💻',
    url: 'https://muthuprabhu2003.github.io/certificates/Novitech_fullstack.pdf',
  },
  {
    title: 'Shiash Internship Completion',
    issuer: 'SHIASH Info Pvt. Ltd.',
    icon: '🏢',
    url: 'https://muthuprabhu2003.github.io/certificates/Shiash_Internship_Certificate.pdf',
  },
  {
    title: 'Shiash Project Completion',
    issuer: 'SHIASH Info Pvt. Ltd.',
    icon: '🏆',
    url: 'https://muthuprabhu2003.github.io/certificates/Shiash%20_Project_Completeion%20Certificate.pdf',
  },
  {
    title: 'Signal Processing Onramp',
    issuer: 'MATLAB / MathWorks',
    icon: '📡',
    url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f4a7f683-008d-4f5b-9ae1-27650f540c97&',
  },
  {
    title: 'Simulink Onramp',
    issuer: 'MATLAB / MathWorks',
    icon: '⚙️',
    url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=f56311cf-7700-48db-8b79-f3dc9c1263dd&',
  },
];

const Certificates = () => {
  return (
    <section className="certificates section" id="certificates">
      <h2 className="section-title">Certifications</h2>
      <div className="certificates__container">
        {certificateData.map((cert, index) => (
          <div key={index} className="certificate__card">
            <div className="certificate__icon">{cert.icon}</div>
            <h3>{cert.title}</h3>
            <p className="certificate__issuer">{cert.issuer}</p>
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
