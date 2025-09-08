import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulation d'envoi de newsletter
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="newsletter-section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="align-items-center">
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <div className="newsletter-content">
                  <motion.div
                    className="newsletter-icon"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <FaRocket />
                  </motion.div>
                  <h2 className="newsletter-title">
                    Restez connecté à notre <span className="text-gradient">espace</span>
                  </h2>
                  <p className="newsletter-description">
                    Recevez les dernières actualités sur mes projets, 
                    les nouvelles technologies et les tendances du développement web. 
                    Explorez l'univers du code avec moi !
                  </p>
                  <div className="newsletter-benefits">
                    <div className="benefit-item">
                      <FaCheckCircle className="benefit-icon" />
                      <span>Actualités exclusives</span>
                    </div>
                    <div className="benefit-item">
                      <FaCheckCircle className="benefit-icon" />
                      <span>Conseils techniques</span>
                    </div>
                    <div className="benefit-item">
                      <FaCheckCircle className="benefit-icon" />
                      <span>Projets en avant-première</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <div className="newsletter-form-container">
                  <div className="form-header">
                    <FaEnvelope className="form-icon" />
                    <h3>Rejoignez la mission</h3>
                    <p>Inscrivez-vous pour ne rien manquer</p>
                  </div>

                  <form onSubmit={handleSubmit} className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Votre adresse email"
                        className="newsletter-input"
                        required
                      />
                      <motion.button
                        type="submit"
                        className="newsletter-btn"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSubmitting ? (
                          <div className="loading-spinner"></div>
                        ) : (
                          <FaPaperPlane />
                        )}
                      </motion.button>
                    </div>

                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`newsletter-message ${submitStatus}`}
                      >
                        {submitStatus === 'success' ? (
                          <>
                            <FaCheckCircle className="me-2" />
                            Inscription réussie ! Bienvenue à bord de la mission.
                          </>
                        ) : (
                          'Erreur lors de l\'inscription. Veuillez réessayer.'
                        )}
                      </motion.div>
                    )}

                    <p className="newsletter-privacy">
                      🔒 Vos données sont protégées. Pas de spam, promis !
                    </p>
                  </form>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>

      <style jsx>{`
        .newsletter-section {
          background: var(--gradient-primary);
          color: white;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
        }

        [data-theme="dark"] .newsletter-section {
          background: var(--gradient-primary);
        }

        .newsletter-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="white" opacity="0.3"/><circle cx="80" cy="40" r="1" fill="white" opacity="0.2"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.4"/><circle cx="90" cy="90" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
          opacity: 0.5;
        }

        .newsletter-content {
          position: relative;
          z-index: 2;
        }

        .newsletter-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .newsletter-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .newsletter-description {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .newsletter-benefits {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1rem;
        }

        .benefit-icon {
          color: #fbbf24;
          font-size: 1.2rem;
        }

        .newsletter-form-container {
          background: rgba(255, 255, 255, 0.1);
          padding: 2.5rem;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          z-index: 2;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #fbbf24;
        }

        .form-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .form-header p {
          opacity: 0.8;
          margin: 0;
        }

        .newsletter-form {
          width: 100%;
        }

        .input-group {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .newsletter-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #fbbf24;
          background: rgba(255, 255, 255, 0.2);
        }

        .newsletter-btn {
          width: 60px;
          height: 60px;
          background: #fbbf24;
          border: none;
          border-radius: 50%;
          color: #1f2937;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-btn:hover {
          background: #f59e0b;
          transform: scale(1.05);
        }

        .newsletter-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(31, 41, 55, 0.3);
          border-radius: 50%;
          border-top-color: #1f2937;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .newsletter-message {
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          font-weight: 500;
        }

        .newsletter-message.success {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .newsletter-message.error {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .newsletter-privacy {
          text-align: center;
          font-size: 0.875rem;
          opacity: 0.8;
          margin: 0;
        }

        @media (max-width: 768px) {
          .newsletter-section {
            padding: 3rem 0;
          }

          .newsletter-title {
            font-size: 2rem;
          }

          .newsletter-form-container {
            padding: 2rem;
            margin-top: 2rem;
          }

          .input-group {
            flex-direction: column;
          }

          .newsletter-btn {
            width: 100%;
            height: 50px;
            border-radius: 25px;
          }

          .newsletter-benefits {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
