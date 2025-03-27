import React from 'react';
import '../styles/styles.css';
import linkedInIcon from '../assets/LinkedIn-icon.svg';
import gitHubIcon from '../assets/Github-icon.svg';
import emailIcon from '../assets/email-icon.svg'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/KoganTheDev" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub" />
        </a>
        <span>|</span>
        <a href="https://www.linkedin.com/in/yuval-kogan" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
        <span>|</span>
        <a href="mailto:Yuval-Kogan@outlook.co.il" rel="noopener noreferrer">
          <img src={emailIcon} alt="Email" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;