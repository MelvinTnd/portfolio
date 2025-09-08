import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "melvinynd@gmail.com",
      link: "mailto:melvinynd@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      value: "+229 0191680276",
      link: "tel:+2290191680276"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      value: "Cotonou, Bénin",
      link: "https://maps.google.com/maps?q=Cotonou,Bénin"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/votrenom",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/votrenom",
      color: "#333"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/votrenom",
      color: "#1da1f2"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulation d'envoi de formulaire
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-5">
            <h2 className="section-title">Contactez-moi</h2>
            <p className="section-subtitle">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </motion.div>

          <Row>
            {/* Informations de contact */}
            <Col lg={4} className="mb-5">
              <motion.div variants={itemVariants}>
                <div className="contact-info">
                  <h3 className="mb-4">Informations de contact</h3>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="contact-item"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="contact-icon">
                        {info.icon}
                      </div>
                      <div className="contact-details">
                        <h5>{info.title}</h5>
                        <a href={info.link} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}

                  <div className="social-section">
                    <h5 className="mb-3">Suivez-moi</h5>
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
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Formulaire de contact */}
            <Col lg={8}>
              <motion.div variants={itemVariants}>
                <div className="contact-form-container">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nom complet *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Melvin"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="votre@email.com"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-3">
                        <Form.Group>
                          <Form.Label>Sujet *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Sujet de votre message"
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mb-4">
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Votre message..."
                            className="form-control-custom"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    {submitStatus && (
                      <Alert 
                        variant={submitStatus === 'success' ? 'success' : 'danger'}
                        className="mb-3"
                      >
                        {submitStatus === 'success' ? (
                          <>
                            <FaCheckCircle className="me-2" />
                            Message envoyé avec succès ! Je vous répondrai bientôt.
                          </>
                        ) : (
                          'Erreur lors de l\'envoi du message. Veuillez réessayer.'
                        )}
                      </Alert>
                    )}

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        className="btn-primary-custom w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="loading me-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="me-2" />
                            Envoyer le message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </Form>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Carte de localisation */}
          <motion.div variants={itemVariants} className="mt-5">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <FaMapMarkerAlt className="map-icon" />
                  <h4>Cotonou, Bénin</h4>
                  <p>Disponible pour des projets dans tout le Bénin et en remote</p>
                </div>
              </div>
            </div>
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

        .contact-info {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          height: 100%;
          transition: all 0.3s ease;
        }

        .contact-info h3 {
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: var(--background-tertiary);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
          margin-right: 1rem;
        }

        .contact-details h5 {
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .contact-details a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-details a:hover {
          color: var(--primary-color);
        }

        .social-section {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color);
        }

        .social-section h5 {
          color: var(--text-primary);
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
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .contact-form-container {
          background: var(--background-primary);
          padding: 2rem;
          border-radius: 20px;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .form-control-custom {
          border: 2px solid var(--border-color);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          background: var(--background-primary);
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .form-control-custom:focus {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 0.2rem rgba(37, 99, 235, 0.25);
        }

        .form-control-custom::placeholder {
          color: var(--text-secondary);
        }

        .map-container {
          background: var(--background-primary);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .map-placeholder {
          height: 300px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .map-content {
          text-align: center;
          color: white;
        }

        .map-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .map-content h4 {
          margin-bottom: 0.5rem;
        }

        .map-content p {
          opacity: 0.9;
          margin: 0;
        }

        .loading {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .contact-item {
            flex-direction: column;
            text-align: center;
          }

          .contact-icon {
            margin: 0 0 1rem 0;
          }

          .social-links {
            justify-content: center;
          }

          .map-placeholder {
            height: 200px;
          }

          .map-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
