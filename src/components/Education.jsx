import React from 'react';
import './Education.css';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const certs = [
    { title: "Oracle Next Education", provider: "ONE", type: "Certificación" },
    { title: "SQL para Análisis de Datos", provider: "Datos", type: "Curso" },
    { title: "Tableau Desktop", provider: "BI", type: "Certificación" },
    { title: "Python para Análisis de Datos", provider: "Datos", type: "Curso" },
    { title: "Desarrollo de Aplicaciones Web", provider: "Web", type: "Curso" },
    { title: "IA Aplicada y Agentes", provider: "IA", type: "Especialidad" }
  ];

  return (
    <section id="educacion" className="education-section">
      <div className="container">
        <h2 className="section-title">Formación Continua</h2>
        
        <div className="edu-layout">
          <div className="edu-card glass hover-lift animate-fade-in delay-100">
            <div className="edu-header">
              <GraduationCap size={32} className="edu-icon" />
              <h3>Educación Superior</h3>
            </div>
            <div className="edu-content">
              <h4>Lic. Administración de Negocios</h4>
              <p>Formación orientada a la gestión y optimización de recursos, aportando un enfoque estratégico, analítico y de negocio a las soluciones tecnológicas que desarrollo.</p>
            </div>
          </div>

          <div className="certs-card glass hover-lift animate-fade-in delay-200">
            <div className="edu-header">
              <Award size={32} className="edu-icon certs-icon" />
              <h3>Certificaciones Destacadas</h3>
            </div>
            <div className="badges-grid">
              {certs.map((cert, index) => (
                <div key={index} className="cert-badge">
                  <div className="badge-icon">
                    <BookOpen size={16} />
                  </div>
                  <div className="badge-info">
                    <span className="badge-title">{cert.title}</span>
                    <span className="badge-type">{cert.type}</span>
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

export default Education;
