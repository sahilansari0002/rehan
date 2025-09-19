import React from 'react';
import { Code, Server, Smartphone, Palette, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';

const Services = () => {
  const iconMap = {
    'Code': Code,
    'Server': Server,
    'Smartphone': Smartphone,
    'Palette': Palette
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-shimmer">What I Do</h2>
          <p className="section-subtitle">
            I offer comprehensive development services to help bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            
            return (
              <div 
                key={service.id} 
                className="service-card hover-card card-3d ripple"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-3d-inner">
                  <div className="service-icon">
                    <IconComponent size={32} />
                  </div>
                  
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    
                    <div className="service-features">
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="service-feature">
                            <ArrowRight size={14} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="service-hover-effect"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="services-cta neon-glow">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Let's work together to create something amazing. I'm here to help you build your next digital solution.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="cta-button ripple"
            >
              Get In Touch
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;