import React from 'react';
import './Projects.css';
import { Database, Bot, Cloud, Sparkles, Trophy, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Agente de IA para Gestión del Conocimiento (Sistema RAG)",
      icon: <Database size={24} />,
      description: "Agente de Inteligencia Artificial especializado en extraer y consultar automáticamente información oculta en PDFs. Emplea búsqueda semántica para dar respuestas contextualizadas entre miles de páginas.",
      tags: ["RAG", "LLMs", "Semantic Search", "PDF Extraction"],
      links: { github: "https://github.com/nextorsalinas", demo: "#" }
    },
    {
      title: "Asistente Conversacional en Google Cloud",
      icon: <Bot size={24} />,
      description: "Asistente IA que permite a los usuarios consultar bases de datos complejas mediante lenguaje natural. Traduce preguntas a SQL y responde en tiempo real, desplegado de forma segura en Google Cloud.",
      tags: ["Google Cloud", "Conversational AI", "SQL Gen", "Web Deploy"],
      links: { github: "https://github.com/nextorsalinas", demo: "#" }
    },
    {
      title: "Integración Slack y Arquitectura Cloud",
      icon: <Cloud size={24} />,
      description: "Conexión de agentes IA a canales de Slack para consultas automatizadas, mejorando la accesibilidad y optimizando tiempos de respuesta. Despliegue cloud estable y de alto rendimiento.",
      tags: ["Slack API", "Cloud Infrastructure", "Automation"],
      links: { github: "https://github.com/nextorsalinas", demo: "#" }
    },
    {
      title: "Glam - Plataforma de IA para Belleza",
      icon: <Sparkles size={24} />,
      description: "Ecosistema integral de Inteligencia Artificial para el sector de belleza. Arquitectura monorepo integrando Cloudflare MCP para automatizar la recomendación y optimizar la experiencia del usuario.",
      tags: ["React", "Node.js", "AI", "Cloudflare", "Monorepo"],
      links: { github: "https://github.com/nextorsalinas", demo: "#" }
    },
    {
      title: "Quiniela Mundial 2026",
      icon: <Trophy size={24} />,
      description: "App full-stack de predicciones deportivas. Arquitectura de DB híbrida (Firebase / JSON Local), procesamiento de Excel, notificaciones Web Push, y tabla de posiciones en tiempo real.",
      tags: ["Node.js", "Firebase", "Web Push", "Vanilla JS", "Express"],
      links: { github: "https://github.com/nextorsalinas", demo: "#" }
    }
  ];

  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <h2 className="section-title">Proyectos Destacados</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass hover-lift animate-fade-in delay-${(index % 3 + 1) * 100}`}
            >
              <div className="project-icon">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link" aria-label="Ver Código">
                    <Code size={20} />
                  </a>
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link primary-text" aria-label="Ver Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
