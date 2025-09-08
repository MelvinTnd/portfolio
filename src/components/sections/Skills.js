import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaMobile,
  FaCloud
} from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = {
    frontend: {
      title: "Frontend",
      color: "#61dafb",
      skills: [
        { name: "React", level: 95, icon: <FaReact />, description: "Hooks, Context, Redux, Next.js" },
        { name: "JavaScript", level: 90, icon: <FaJs />, description: "ES6+, TypeScript, Async/Await" },
        { name: "HTML5", level: 95, icon: <FaHtml5 />, description: "Semantic HTML, Accessibility" },
        { name: "CSS3", level: 90, icon: <FaCss3Alt />, description: "Flexbox, Grid, Animations" }
      ]
    },
    backend: {
      title: "Backend",
      color: "#68a063",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs />, description: "Express, REST APIs, GraphQL" },
        { name: "Laravel", level: 10, icon: <FaJs />, description: "PHP, MVC, Eloquent" },
        { name: "Database", level: 75, icon: <FaDatabase />, description: "MongoDB, PostgreSQL, Redis" },
        { name: "Git", level: 90, icon: <FaGitAlt />, description: "Version Control, CI/CD" }
      ]
    },
    devops: {
      title: "DevOps & Cloud",
      color: "#ff6b35",
      skills: [
        { name: "AWS", level: 0, icon: <FaAws />, description: "EC2, S3, Lambda, RDS" },
        { name: "Docker", level: 0, icon: <FaDocker />, description: "Containers, Docker Compose" },
        { name: "Cloud", level: 0, icon: <FaCloud />, description: "Azure, GCP, Serverless" },
        { name: "Mobile", level: 0, icon: <FaMobile />, description: "React Native, PWA" }
      ]
    }
  };

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Leadership", level: 85 },
    { name: "Résolution de problèmes", level: 95 },
    { name: "Travail d'équipe", level: 88 },
    { name: "Adaptabilité", level: 92 },
    { name: "Créativité", level: 87 }
  ];

  return (
    <section id="skills" className="section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title">Compétences</h2>
            <p className="section-subtitle">
              Un aperçu de mes compétences techniques et soft skills
            </p>
          </motion.div>

          {/* Compétences techniques */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="skills-categories">
              {Object.keys(skillCategories).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    '--category-color': skillCategories[category].color
                  }}
                >
                  {skillCategories[category].title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="skills-grid"
            >
              <Row>
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <Col lg={6} key={index} className="mb-4">
                    <motion.div
                      className="skill-card"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <div className="skill-info">
                          <h4>{skill.name}</h4>
                          <p>{skill.description}</p>
                        </div>
                        <div className="skill-percentage">
                          {skill.level}%
                        </div>
                      </div>
                      <div className="skill-bar-container">
                        <motion.div
                          className="skill-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                          style={{
                            background: `linear-gradient(90deg, ${skillCategories[activeCategory].color}, ${skillCategories[activeCategory].color}80)`
                          }}
                        />
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-center mb-4">Soft Skills</h3>
            <Row>
              {softSkills.map((skill, index) => (
                <Col md={6} lg={4} key={index} className="mb-3">
                  <motion.div
                    className="soft-skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <div className="soft-skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="soft-skill-bar">
                      <motion.div
                        className="soft-skill-progress"
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

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mt-5">
            <h3 className="text-center mb-4">Certifications</h3>
            <Row>
              <Col md={4} className="mb-3">
                <motion.div
                  className="certification-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-status en-cours">En cours</div>
                  <div className="cert-icon">
                    <FaReact />
                  </div>
                  <h5>Développeur web</h5>
                  <p>Meta</p>
                  <span className="cert-date">Prévu 2025</span>
                </motion.div>
              </Col>
              <Col md={4} className="mb-3">
                <motion.div
                  className="certification-card is-placeholder"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-status a-venir">À venir</div>
                  <div className="cert-icon">
                    <FaAws />
                  </div>
                  <h5>Certification à venir</h5>
                  <p>Amazon Web Services</p>
                  <span className="cert-date">TBA</span>
                </motion.div>
              </Col>
              <Col md={4} className="mb-3">
                <motion.div
                  className="certification-card is-placeholder"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cert-status a-venir">À venir</div>
                  <div className="cert-icon">
                    <FaPython />
                  </div>
                  <h5>Certification à venir</h5>
                  <p>Python / Data</p>
                  <span className="cert-date">TBA</span>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
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

        .skills-categories {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .category-btn {
          padding: 0.75rem 2rem;
          border: 2px solid var(--primary-color);
          background: transparent;
          color: var(--primary-color);
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .category-btn.active {
          background: var(--primary-color);
          color: white;
        }

        .category-btn:hover {
          background: var(--primary-color);
          color: white;
          transform: translateY(-2px);
        }

        .skill-card {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          height: 100%;
        }

        .skill-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .skill-icon {
          width: 50px;
          height: 50px;
          background: var(--background-tertiary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-right: 1rem;
        }

        .skill-info {
          flex: 1;
        }

        .skill-info h4 {
          margin: 0 0 0.25rem 0;
          color: var(--text-primary);
          font-size: 1.125rem;
        }

        .skill-info p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .skill-percentage {
          font-weight: 700;
          color: var(--primary-color);
          font-size: 1.25rem;
        }

        .skill-bar-container {
          height: 8px;
          background: var(--background-tertiary);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          border-radius: 4px;
        }

        .soft-skill-item {
          background: var(--background-primary);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .soft-skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-weight: 600;
          color: var(--text-primary);
        }

        .skill-level {
          color: var(--primary-color);
          font-weight: 700;
        }

        .soft-skill-bar {
          height: 6px;
          background: var(--background-tertiary);
          border-radius: 3px;
          overflow: hidden;
        }

        .soft-skill-progress {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 3px;
        }

        .certification-card {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
        }

        .certification-card:hover {
          box-shadow: var(--shadow-lg);
        }

        .certification-card .cert-status {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: .3px;
          color: white;
        }

        .cert-status.en-cours { background: #f59e0b; }
        .cert-status.a-venir { background: #64748b; }

        .cert-icon {
          width: 60px;
          height: 60px;
          background: var(--gradient-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          margin: 0 auto 1rem;
        }

        .certification-card h5 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .certification-card p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .cert-date {
          background: var(--background-tertiary);
          color: var(--primary-color);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.875rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .skills-categories {
            flex-direction: column;
            align-items: center;
          }

          .category-btn {
            width: 200px;
          }

          .skill-header {
            flex-direction: column;
            text-align: center;
          }

          .skill-icon {
            margin: 0 0 1rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
