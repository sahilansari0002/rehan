import React from 'react';
import { User, MapPin, Calendar, Award, Download, ExternalLink } from 'lucide-react';
import { personalInfo, experience } from '../data/mockData';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, experience, and what drives my passion for development
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-info">
            <div className="about-text">
              <h3 className="about-heading">Who I Am</h3>
              <p className="about-description">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions 
                that make a difference. I love the challenge of turning complex problems into simple, beautiful, 
                and intuitive designs.
              </p>
              <p className="about-description">
                My journey in tech started with curiosity and has evolved into a deep commitment to crafting 
                exceptional user experiences through clean, efficient code. I believe in continuous learning 
                and staying updated with the latest technologies and best practices.
              </p>
              
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="about-details">
              <h3 className="about-heading">Quick Facts</h3>
              <div className="detail-list">
                <div className="detail-item">
                  <User size={18} />
                  <span>Full-Stack Developer</span>
                </div>
                <div className="detail-item">
                  <MapPin size={18} />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="detail-item">
                  <Calendar size={18} />
                  <span>Available for projects</span>
                </div>
                <div className="detail-item">
                  <Award size={18} />
                  <span>Bachelor's in Computer Science</span>
                </div>
              </div>
              
              <div className="about-actions">
                <a
                  href={personalInfo.resume}
                  download
                  className="primary-button"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  <ExternalLink size={16} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h3 className="about-heading">Professional Experience</h3>
            <div className="experience-timeline">
              {experience.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < experience.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4 className="timeline-title">{exp.title}</h4>
                      <span className="timeline-duration">{exp.duration}</span>
                    </div>
                    
                    <div className="timeline-meta">
                      <span className="timeline-company">{exp.company}</span>
                      <span className="timeline-location">{exp.location}</span>
                      <span className="timeline-type">{exp.type}</span>
                    </div>
                    
                    <p className="timeline-description">{exp.description}</p>
                    
                    <div className="timeline-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;