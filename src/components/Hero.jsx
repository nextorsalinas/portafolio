import React from 'react';
import './Hero.css';
import { Mail, Code, User, BarChart, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container animate-fade-in">
        <div className="hero-content delay-100">
          <h2 className="hero-greeting">Hola, soy</h2>
          <h1 className="hero-name gradient-text">Nestor Salinas</h1>
          <h3 className="hero-title">Desarrollador de Aplicaciones y Soluciones IA</h3>
          
          <p className="hero-bio glass delay-200">
            Me apasiona construir puentes entre los datos complejos y las personas. 
            Me enfoco en diseñar <strong>Agentes de IA</strong>, automatizar flujos de trabajo en la nube 
            y construir interfaces intuitivas que transforman la forma en que interactuamos con la información.
          </p>
          
          <div className="hero-social delay-300">
            <a href="https://github.com/nextorsalinas" target="_blank" rel="noreferrer" className="social-btn glass hover-lift">
              <Code size={20} />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nextorsalinas/" target="_blank" rel="noreferrer" className="social-btn glass hover-lift">
              <User size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://public.tableau.com/app/profile/nestor.salinas2531/vizzes" target="_blank" rel="noreferrer" className="social-btn glass hover-lift">
              <BarChart size={20} />
              <span>Tableau</span>
            </a>
            <a href="mailto:nextor.salinas@gmail.com" className="social-btn primary-btn hover-lift">
              <Mail size={20} />
              <span>Contáctame</span>
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator delay-300">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
