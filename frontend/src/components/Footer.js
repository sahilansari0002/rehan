import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Footer Main */}
          <div className="footer-main">
            <div className="footer-info">
              <div className="footer-logo">
                <span className="logo-text">{personalInfo.name}</span>
              </div>
              <p className="footer-description">
                Full-stack developer passionate about creating beautiful, 
                functional digital experiences that make a difference.
              </p>
              <div className="footer-social">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-list">
                  <li>
                    <button 
                      onClick={() => scrollToSection('hero')}
                      className="footer-link"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('about')}
                      className="footer-link"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('services')}
                      className="footer-link"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('projects')}
                      className="footer-link"
                    >
                      Projects
                    </button>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Services</h4>
                <ul className="footer-list">
                  <li><span className="footer-text">Frontend Development</span></li>
                  <li><span className="footer-text">Backend Development</span></li>
                  <li><span className="footer-text">Mobile Development</span></li>
                  <li><span className="footer-text">UI/UX Design</span></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Contact</h4>
                <ul className="footer-list">
                  <li>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="footer-link"
                    >
                      {personalInfo.email}
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="footer-link"
                    >
                      {personalInfo.phone}
                    </a>
                  </li>
                  <li><span className="footer-text">{personalInfo.location}</span></li>
                  <li>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="footer-link"
                    >
                      Get In Touch
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} {personalInfo.name}. Made with{' '}
                <Heart size={14} className="heart-icon" /> using React & modern technologies.
              </p>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;