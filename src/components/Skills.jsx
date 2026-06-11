import React from 'react';
import './Skills.css';
import { Database, Brain, BarChart, Cloud, Code, Terminal, Server } from 'lucide-react';

const Skills = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <h2 className="section-title">Habilidades & Expertise</h2>
        
        <div className="bento-grid">
          {/* AI & Automation Block */}
          <div className="bento-item bento-large glass hover-lift delay-100">
            <div className="bento-icon"><Brain size={32} /></div>
            <h3>IA Aplicada & Agentes</h3>
            <p>Implementación de herramientas basadas en LLMs para automatización y consulta de información.</p>
            <div className="bento-tags">
              <span>LLMs</span>
              <span>Gemini SDK / CLI</span>
              <span>RAG Systems</span>
            </div>
          </div>

          {/* Cloud Block */}
          <div className="bento-item glass hover-lift delay-200">
            <div className="bento-icon"><Cloud size={32} /></div>
            <h3>Cloud Infrastructure</h3>
            <p>Despliegue y configuración de servidores, Compute Engine y Cloud Run.</p>
            <div className="bento-tags">
              <span>Google Cloud</span>
              <span>Redes</span>
            </div>
          </div>

          {/* Data & Analytics Block */}
          <div className="bento-item bento-tall glass hover-lift delay-300">
            <div className="bento-icon"><Database size={32} /></div>
            <h3>Datos & Analytics</h3>
            <p>ETL, integración y limpieza de datos (Excel, Google Sheets, MySQL). Data storytelling orientado al negocio.</p>
            <div className="bento-tags">
              <span>SQL</span>
              <span>Python (pandas)</span>
              <span>BigQuery</span>
            </div>
          </div>

          {/* Visualization Block */}
          <div className="bento-item glass hover-lift delay-100">
            <div className="bento-icon"><BarChart size={32} /></div>
            <h3>Visualización</h3>
            <p>Creación de dashboards ejecutivos y operativos orientados a la toma de decisiones.</p>
            <div className="bento-tags">
              <span>Tableau Desktop</span>
            </div>
          </div>

          {/* Development Block */}
          <div className="bento-item glass hover-lift delay-200">
            <div className="bento-icon"><Code size={32} /></div>
            <h3>Desarrollo Web</h3>
            <p>Creación de interfaces y aplicaciones robustas para el consumo de soluciones IA.</p>
            <div className="bento-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Vanilla JS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
