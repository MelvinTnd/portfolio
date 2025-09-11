import React, { useEffect, useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = useMemo(() => [
    'Développeur Web Full Stack',
    'Programmeur Passionné',
  ], []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === texts[currentIndex]) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        setCurrentText(
          isDeleting
            ? texts[currentIndex].substring(0, currentText.length - 1)
            : texts[currentIndex].substring(0, currentText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <h1 className="hero-title">
                  Salut, je suis{' '}
                  <span className="text-gradient">Melvin</span>
                </h1>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h2 className="hero-subtitle">
                  <span className="typing-text">{currentText}</span>
                  <span className="cursor">|</span>
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="hero-description">
                Passionné par la création d'expériences digitales exceptionnelles.
                Je transforme les idées en solutions innovantes avec du code propre
                et un design centré utilisateur.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="hero-buttons"
              >
                <motion.a
                  href="#projects"
                  className="btn-primary-custom me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes projets
                </motion.a>
                <motion.a
                  href="#newsletter"
                  className="btn-outline-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#newsletter').scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  <FaDownload className="me-2" />
                  Rejoindre la mission
                </motion.a>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="hero-social"
              >
                <p className="social-text">Suivez-moi</p>
                <div className="social-links">
                  <motion.a
                    href="https://github.com/votrenom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/votrenom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/votrenom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTwitter />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              className="hero-image-container"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="hero-image">
                <div className="image-photo">
                  <img
                    src={process.env.PUBLIC_URL + '/images/pc-code.jpg'}
                    alt="PC avec du code"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .hero-section {
          background: radial-gradient(1000px 400px at -10% -10%, rgba(255,255,255,0.2), transparent), linear-gradient(315deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .hero-section {
          background: linear-gradient(315deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
          opacity: 0.3;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 400;
          margin-bottom: 1.5rem;
          min-height: 2rem;
        }

        .typing-text {
          color: #fbbf24;
        }

        .cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-buttons {
          margin-bottom: 3rem;
        }

        .hero-social {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-text {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .hero-image-container {
          position: relative;
          height: 500px;
        }

        .hero-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image-photo {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .image-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05) contrast(1.05);
        }

        /* removed avatar placeholder, replaced by image */

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .floating-element {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          animation: float 6s ease-in-out infinite;
        }

        .element-1 {
          width: 60px;
          height: 60px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .element-2 {
          width: 40px;
          height: 40px;
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .element-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-image-container {
            height: 300px;
            margin-top: 2rem;
          }
          
          .hero-buttons {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 0.75rem;
          }
          
          .avatar-circle {
            width: 150px;
            height: 150px;
          }
          
          .avatar-circle::before {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
