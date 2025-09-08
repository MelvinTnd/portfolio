import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaHeart,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/melvintnd",
      color: "#333"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/melvintnd",
      color: "#0077b5"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/melvintnd",
      color: "#1da1f2"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:melvintnd@outlook.fr",
      color: "#ea4335"
    }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="footer-brand">
                <h3 className="brand-name">
                  <span className="text-gradient">Melvin</span>
                </h3>
                <p className="brand-description">
                  Développeur passionné créant des expériences digitales exceptionnelles.
                </p>
              </div>
            </motion.div>
          </Col>

          <Col lg={4} className="mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="footer-links">
                <h5>Liens rapides</h5>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="footer-social">
                <h5>Suivez-moi</h5>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright">
                © {currentYear} Portfolios. Fait avec <FaHeart className="heart-icon" /> par Melvin.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <motion.button
                className="back-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Retour en haut"
              >
                <FaArrowUp />
              </motion.button>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <style jsx>{`
        .footer {
          background: #000000;
          color: var(--text-primary);
          padding: 3rem 0 1rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--gradient-primary);
        }

        .footer-brand h3 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        .footer-links h5,
        .footer-social h5 {
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          font-size: 1.125rem;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
        }

        .footer-links a:hover {
          color: var(--text-primary);
          padding-left: 0.5rem;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: -0.5rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 2px;
          background: var(--gradient-primary);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::before {
          width: 0.25rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 45px;
          height: 45px;
          background: var(--social-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          color: white;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .footer-bottom {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .copyright {
          color: var(--text-secondary);
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heart-icon {
          color: #e74c3c;
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .back-to-top {
          width: 45px;
          height: 45px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 50%;
          color: white;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-to-top:hover {
          box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2rem 0 1rem;
          }

          .footer-brand,
          .footer-links,
          .footer-social {
            text-align: center;
            margin-bottom: 2rem;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom {
            text-align: center;
          }

          .copyright {
            justify-content: center;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
