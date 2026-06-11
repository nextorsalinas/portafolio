import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        
        <div className="timeline">
          <div className="timeline-item glass hover-lift animate-fade-in delay-100">
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>Soporte de Plataformas & Atención a Usuarios</h3>
                <span className="timeline-date">2024 – Actual</span>
              </div>
              <h4 className="timeline-company">Psicocomercial · Área de Transformación Digital</h4>
              
              <ul className="timeline-tasks">
                <li>Desarrollo de dashboards en <strong>Tableau</strong>.</li>
                <li>Integración y limpieza de datos desde Excel, Google Sheets y bases MySQL usando <strong>Python (pandas)</strong> y Colab.</li>
                <li>Prototipado de asistente de datos en lenguaje natural conectado a BigQuery con generación automática de SQL mediante <strong>LLMs</strong>.</li>
                <li><strong>Capacitación Técnica:</strong> Formación de usuarios finales en el uso de plataformas.</li>
                <li><strong>Soporte y Atención:</strong> Gestión de requerimientos y resolución de incidencias técnicas en plataformas digitales.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
