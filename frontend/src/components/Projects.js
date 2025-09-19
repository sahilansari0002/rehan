import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Filter, X, Calendar, Users, Clock } from 'lucide-react';
import { projects } from '../data/mockData';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsRef = useRef(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [filteredProjects]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="projects-filter">
          <Filter size={18} />
          <span className="filter-label">Filter by:</span>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" ref={projectsRef}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <button className="project-action-btn">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.shortDescription}</p>
                
                <div className="project-tech-stack">
                  <div className="tech-tags">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                </div>
                
                <div className="project-meta">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="project-modal">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="modal-title">
                    {selectedProject.title}
                  </DialogTitle>
                  <button
                    onClick={closeModal}
                    className="modal-close"
                  >
                    <X size={20} />
                  </button>
                </DialogHeader>
                
                <div className="modal-content">
                  <div className="modal-image">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  </div>
                  
                  <div className="modal-info">
                    <div className="modal-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{selectedProject.year}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className="meta-item">
                        <Users size={16} />
                        <span>{selectedProject.team}</span>
                      </div>
                    </div>
                    
                    <div className="modal-description">
                      <h4>About the Project</h4>
                      <p>{selectedProject.fullDescription}</p>
                    </div>
                    
                    <div className="modal-features">
                      <h4>Key Features</h4>
                      <ul>
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="modal-challenges">
                      <h4>Technical Challenges</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                    
                    <div className="modal-outcome">
                      <h4>Results & Impact</h4>
                      <p>{selectedProject.outcome}</p>
                    </div>
                    
                    <div className="modal-tech">
                      <h4>Technologies Used</h4>
                      <div className="modal-tech-tags">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="modal-tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="modal-actions">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-button primary"
                        >
                          <ExternalLink size={16} />
                          View Live Project
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-button secondary"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;