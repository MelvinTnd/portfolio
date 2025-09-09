import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact,
  FaNodeJs,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaDatabase,
  FaMobile
} from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      image: process.env.PUBLIC_URL + '/images/applidegestion.jpg',
      description: "Plateforme e-commerce complète avec panier, paiement et gestion d'inventaire.",
      longDescription: "Une plateforme e-commerce moderne développée avec React et Node.js. Elle inclut un système de gestion d'utilisateurs, un panier d'achat, des paiements sécurisés via Stripe, et un tableau de bord administrateur complet.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "Stripe", icon: <FaJs /> }
      ],
      features: [
        "Interface utilisateur responsive",
        "Système d'authentification sécurisé",
        "Paiements en ligne",
        "Gestion d'inventaire en temps réel",
        "Tableau de bord administrateur"
      ],
      github: "https://github.com/MelvinTnd/ma-boutique",
      live: "https://melvintnd.github.io/ma-boutique/",
      status: "Terminé"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "frontend",
      image: "https://via.placeholder.com/400x300/764ba2/ffffff?text=Task+Manager",
      description: "Application de gestion de tâches avec drag & drop et collaboration en temps réel.",
      longDescription: "Une application de gestion de tâches moderne avec interface drag & drop, collaboration en temps réel, et notifications push. Développée avec React et Firebase pour la synchronisation en temps réel.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Firebase", icon: <FaDatabase /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> }
      ],
      features: [
        "Drag & drop intuitif",
        "Collaboration en temps réel",
        "Notifications push",
        "Interface responsive",
        "Gestion des équipes"
      ],
      github: "https://github.com",
      live: "https://example.com",
      status: "En cours"
    },
    {
      id: 3,
      title: "AI Chatbot",
      category: "backend",
      image: process.env.PUBLIC_URL + '/images/chatbot-ia.jpg',
      description: "Chatbot intelligent (projet à venir).",
      longDescription: "Un chatbot intelligent. Détails et démonstration à venir.",
      technologies: [
        { name: "Python", icon: <FaPython /> },
        { name: "TensorFlow", icon: <FaJs /> },
        { name: "Flask", icon: <FaNodeJs /> },
        { name: "PostgreSQL", icon: <FaDatabase /> }
      ],
      features: [
        "Traitement du langage naturel (à venir)",
        "Apprentissage automatique (à venir)",
        "API REST (à venir)",
        "Interface web (à venir)",
        "Analytics (à venir)"
      ],
      github: "",
      live: "",
      status: "À venir"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile",
      image: process.env.PUBLIC_URL + '/images/applibancairemobile.jpg',
      description: "Application mobile bancaire avec authentification biométrique et transactions sécurisées.",
      longDescription: "Une application bancaire mobile complète avec authentification biométrique, transactions sécurisées, et interface utilisateur moderne. Développée avec React Native pour iOS et Android.",
      technologies: [
        { name: "React Native", icon: <FaMobile /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <FaDatabase /> },
        { name: "Biometric Auth", icon: <FaJs /> }
      ],
      features: [
        "Authentification biométrique",
        "Transactions sécurisées",
        "Interface native",
        "Notifications push",
        "Support multi-devices"
      ],
      github: "https://github.com",
      live: "https://example.com",
      status: "En cours"
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "frontend",
      image: process.env.PUBLIC_URL + '/images/Conversion.jpg',
      description: "Site portfolio moderne avec animations et design responsive.",
      longDescription: "Un site portfolio moderne et responsive avec des animations fluides, un design épuré, et des fonctionnalités interactives. Développé avec React et Framer Motion pour les animations.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Framer Motion", icon: <FaJs /> },
        { name: "Bootstrap", icon: <FaCss3Alt /> },
        { name: "CSS3", icon: <FaCss3Alt /> }
      ],
      features: [
        "Design responsive",
        "Animations fluides",
        "Interface moderne",
        "Optimisé SEO",
        "Performance optimisée"
      ],
      github: "https://github.com",
      live: "https://example.com",
      status: "Terminé"
    },
    {
      id: 6,
      title: "StreamHub",
      category: "fullstack",
      image: process.env.PUBLIC_URL + '/images/dashbord.jpg',
      description: "Plateforme de streaming pour découvrir films et séries avec recommandations personnalisées.",
      longDescription: "StreamHub est une plateforme moderne pour découvrir les meilleurs films et séries. Trouvez où regarder vos contenus préférés sur toutes les plateformes de streaming avec des recommandations personnalisées.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "D3.js", icon: <FaJs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "PostgreSQL", icon: <FaDatabase /> }
      ],
      features: [
        "Découverte de films et séries",
        "Recommandations personnalisées",
        "Multi-plateformes streaming",
        "Interface moderne et fluide",
        "Top tendances et nouveautés"
      ],
      github: "https://github.com/MelvinTnd/streamhub",
      live: "https://melvintnd.github.io/streamhub/",
      status: "Terminé"
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section section-alt">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title">Mes Projets</h2>
            <p className="section-subtitle">
              Découvrez mes réalisations et projets personnels
            </p>
          </motion.div>

          {/* Filtres */}
          <motion.div variants={itemVariants} className="text-center mb-5">
            <div className="project-filters">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grille de projets */}
          <motion.div variants={itemVariants}>
            <AnimatePresence mode="wait">
              <Row>
                {filteredProjects.map((project, index) => (
                  <Col lg={4} md={6} key={project.id} className="mb-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="project-card"
                      onClick={() => openModal(project)}
                    >
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                          {project.status === 'Terminé' && (
                            <div className="project-actions">
                              <a 
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-btn"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaExternalLinkAlt />
                              </a>
                              <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-btn"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FaGithub />
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="project-status">
                          <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <div className="project-content">
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>
                        <div className="project-technologies">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">
                              {tech.icon}
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Container>

      {/* Modal de détail du projet */}
      <Modal show={showModal} onHide={closeModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div className="project-modal-content">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-description">
                <p>{selectedProject.longDescription}</p>
              </div>
              <div className="modal-features">
                <h5>Fonctionnalités :</h5>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-technologies">
                <h5>Technologies utilisées :</h5>
                <div className="tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={closeModal}>
            Fermer
          </Button>
          <Button variant="primary" href={selectedProject?.github} target="_blank">
            <FaGithub className="me-2" />
            Code Source
          </Button>
          <Button 
            variant="success" 
            href={selectedProject?.live} 
            target="_blank" 
            disabled={!selectedProject?.live}
          >
            <FaExternalLinkAlt className="me-2" />
            Voir le projet
          </Button>
        </Modal.Footer>
      </Modal>

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

        .project-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border: 2px solid var(--primary-color);
          background: transparent;
          color: var(--primary-color);
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: var(--primary-color);
          color: white;
        }

        .project-card {
          background: var(--background-primary);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          cursor: pointer;
          height: 100%;
        }

        .project-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-actions {
          display: flex;
          gap: 1rem;
        }

        .action-btn {
          width: 40px;
          height: 40px;
          background: white;
          border: none;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .action-btn:hover {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .project-status {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .status-badge.terminé {
          background: #10b981;
          color: white;
        }

        .status-badge.en-cours {
          background: #f59e0b;
          color: white;
        }

        .status-badge.à-venir,
        .status-badge.a-venir {
          background: #64748b;
          color: white;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h4 {
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          font-size: 1.25rem;
        }

        .project-content p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.25rem 0.5rem;
          background: var(--background-light);
          border-radius: 12px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .project-modal-content {
          padding: 1rem 0;
          color: var(--text-primary);
        }

        .modal-image {
          margin-bottom: 1.5rem;
        }

        .modal-image img {
          width: 100%;
          border-radius: 10px;
        }

        .modal-description {
          margin-bottom: 1.5rem;
        }

        .modal-features {
          margin-bottom: 1.5rem;
        }

        .modal-features h5,
        .modal-technologies h5 {
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .modal-features ul {
          list-style: none;
          padding: 0;
        }

        .modal-features li {
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
          position: relative;
          padding-left: 1.5rem;
        }

        .modal-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--primary-color);
          font-weight: bold;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: var(--background-tertiary);
          border-radius: 20px;
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .project-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 150px;
          }

          .project-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
