import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // timeline tab removed

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "PHP", level: 70 },
    { name: "Laravel", level: 60 }
  ];

  return (
    <section id="about" className="section section-alt">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title">À propos de moi</h2>
            <p className="section-subtitle">
              Découvrez mon parcours, mes compétences et ma passion pour la technologie
            </p>
          </motion.div>

          <Row>
            <Col lg={12}>
              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="custom-tabs"
              >
                <Tab eventKey="about" title="Présentation">
                  <motion.div
                    variants={itemVariants}
                    className="tab-content"
                  >
                    <Row className="align-items-center">
                      <Col lg={6}>
                        <div className="about-text">
                          <h3>Passionné par l'innovation technologique</h3>
                          <p>
                            Je me spécialise dans la création d'applications modernes et 
                            performantes. Mon approche combine créativité et rigueur technique 
                            pour livrer des solutions qui dépassent les attentes.
                          </p>
                          <p>
                            J'ai travaillé sur des projets variés, allant des startups 
                            innovantes aux grandes entreprises, en passant par des projets 
                            open source. Cette diversité m'a permis de développer une vision 
                            globale du développement logiciel.
                          </p>
                          <div className="about-stats">
                            <div className="stat-item">
                              <h4>5</h4>
                              <p>Projets réalisés</p>
                            </div>
                            <div className="stat-item">
                              <h4>0</h4>
                              <p>Années d'expérience</p>
                            </div>
                            <div className="stat-item">
                              <h4>2+</h4>
                              <p>Clients satisfaits</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <motion.div
                          className="about-image"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="about-photo">
                            <img
                              src={process.env.PUBLIC_URL + '/images/Conversion.jpg'}
                              alt="À propos - illustration développeur"
                              loading="eager"
                            />
                          </div>
                        </motion.div>
                      </Col>
                    </Row>
                  </motion.div>
                </Tab>

                {/* Tab Parcours supprimé selon demande */}

                <Tab eventKey="skills" title="Compétences">
                  <motion.div
                    variants={itemVariants}
                    className="tab-content"
                  >
                    <Row>
                      {skills.map((skill, index) => (
                        <Col md={6} key={index} className="mb-4">
                          <motion.div
                            className="skill-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          >
                            <div className="skill-header">
                              <span className="skill-name">{skill.name}</span>
                              <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                              <motion.div
                                className="skill-progress"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: index * 0.1 }}
                              />
                            </div>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <style jsx>{`
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .custom-tabs {
          border: none;
        }

        .custom-tabs .nav-link {
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-weight: 600;
          padding: 1rem 2rem;
          margin: 0 0.5rem;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .custom-tabs .nav-link.active {
          background: var(--gradient-primary);
          color: white;
        }

        .custom-tabs .nav-link:hover {
          background: rgba(37, 99, 235, 0.1);
          color: var(--primary-color);
        }

        .tab-content {
          padding: 2rem 0;
        }

        .about-text h3 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .about-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-item h4 {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-item p {
          color: var(--text-secondary);
          margin: 0;
        }

        .about-image {
          position: relative;
        }

        .about-photo {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
        }
        .about-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* removed avatar placeholder, replaced by real image */

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gradient-primary);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
          width: 50%;
        }

        .timeline-item.left {
          left: 0;
          padding-right: 3rem;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 3rem;
        }

        .timeline-content {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          position: relative;
          border-left: 4px solid var(--primary-color);
          transition: all 0.3s ease;
        }

        .timeline-item.right .timeline-content {
          border-left: none;
          border-right: 4px solid var(--primary-color);
        }

        .timeline-icon {
          position: absolute;
          left: -15px;
          top: 2rem;
          width: 30px;
          height: 30px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        .timeline-item.right .timeline-icon {
          left: auto;
          right: -15px;
        }

        .timeline-year {
          color: var(--primary-color);
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .timeline-content h4 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .timeline-content h5 {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .skill-item {
          background: var(--background-primary);
          padding: 1.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-percentage {
          color: var(--primary-color);
          font-weight: 700;
        }

        .skill-bar {
          height: 8px;
          background: var(--background-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            width: 100%;
            left: 0 !important;
            padding-left: 3rem !important;
            padding-right: 0 !important;
          }

          .timeline-icon {
            left: 5px !important;
            right: auto !important;
          }

          .timeline-content {
            border-left: 4px solid var(--primary-color) !important;
            border-right: none !important;
          }

          .about-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .avatar-circle-large {
            width: 200px;
            height: 200px;
          }

          .avatar-emoji {
            font-size: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
