import React, { useRef, useEffect, useState } from 'react';
import { Code, Server, Database, Palette, Wrench, Zap } from 'lucide-react';
import { skills } from '../data/mockData';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef(null);

  const categoryIcons = {
    'Frontend': Code,
    'Backend': Server,
    'Database': Database,
    'Tools & DevOps': Wrench,
    'Design': Palette,
    'Other': Zap
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.getAttribute('data-skill');
            setVisibleSkills(prev => new Set([...prev, skillId]));
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillBars = skillsRef.current?.querySelectorAll('.skill-item');
    skillBars?.forEach(bar => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return 'expert';
    if (level >= 80) return 'advanced';
    if (level >= 70) return 'intermediate';
    return 'beginner';
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-content" ref={skillsRef}>
          {skills.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category.category] || Code;
            
            return (
              <div key={category.category} className="skill-category">
                <div className="category-header">
                  <div className="category-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                </div>
                
                <div className="skills-list">
                  {category.items.map((skill, skillIndex) => {
                    const skillId = `${categoryIndex}-${skillIndex}`;
                    const isVisible = visibleSkills.has(skillId);
                    
                    return (
                      <div
                        key={skill.name}
                        className="skill-item"
                        data-skill={skillId}
                      >
                        <div className="skill-header">
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-experience">{skill.years} years</span>
                          </div>
                          <div className="skill-level">
                            <span className="skill-percentage">{skill.level}%</span>
                            <span className={`skill-badge ${getSkillColor(skill.level)}`}>
                              {getSkillColor(skill.level)}
                            </span>
                          </div>
                        </div>
                        
                        <div className="skill-bar">
                          <div className="skill-track">
                            <div
                              className={`skill-progress ${getSkillColor(skill.level)}`}
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transition: 'width 1.5s ease-in-out 0.2s'
                              }}
                            >
                              <div className="skill-shine"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-number">15+</div>
              <div className="summary-label">Technologies</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">5+</div>
              <div className="summary-label">Years Experience</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">50+</div>
              <div className="summary-label">Projects Built</div>
            </div>
            <div className="summary-item">
              <div className="summary-number">100%</div>
              <div className="summary-label">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;