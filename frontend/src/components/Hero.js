import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mockData';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const roles = personalInfo.roles;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeText = () => {
      const currentRoleText = roles[currentRole];
      
      if (!isDeleting) {
        setDisplayText(currentRoleText.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentRoleText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        setDisplayText(currentRoleText.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const interval = setInterval(typeText, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [currentRole]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-line">Hello, I'm</span>
            </div>
            
            <h1 className="hero-name">
              {personalInfo.name}
            </h1>
            
            <div className="hero-role">
              <span className="role-prefix">I'm a </span>
              <span className="role-text">
                {displayText}
                <span className="cursor">|</span>
              </span>
            </div>
            
            <p className="hero-bio">
              {personalInfo.bio}
            </p>
            
            <div className="hero-actions">
              <button 
                onClick={scrollToProjects}
                className="primary-button ripple"
              >
                View My Work
                <ArrowRight size={18} />
              </button>
              
              <button 
                onClick={scrollToAbout}
                className="secondary-button"
              >
                About Me
              </button>
            </div>
            
            <div className="hero-social">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link magnetic"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link magnetic"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link magnetic"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="hero-image floating">
            <div className="image-container morphing">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="profile-image"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <button 
            onClick={scrollToAbout}
            className="scroll-button neon-glow"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;