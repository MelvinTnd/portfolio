import React, { useState, useEffect } from 'react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
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
    setIsMobileMenuOpen(false);
  };

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`navbar-custom ${isScrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BSNavbar.Brand 
            href="#home" 
            className="navbar-brand-custom"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <span className="text-gradient">Portfolio</span>
          </BSNavbar.Brand>
        </motion.div>

        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler-custom"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Nav.Link
                  href={item.href}
                  className="nav-link-custom"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.name}
                </Nav.Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
              className="ms-3"
            >
              <ThemeToggle />
            </motion.div>
          </Nav>
        </BSNavbar.Collapse>
      </Container>

      <style jsx>{`
        .navbar-custom {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        [data-theme="dark"] .navbar-custom {
          background: rgba(10, 10, 10, 0.95);
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow);
          padding: 0.5rem 0;
        }

        [data-theme="dark"] .navbar-scrolled {
          background: rgba(10, 10, 10, 0.98);
        }

        .navbar-brand-custom {
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .navbar-brand-custom:hover {
          color: var(--primary-color);
        }

        .navbar-toggler-custom {
          border: none;
          padding: 0.25rem 0.5rem;
          font-size: 1.25rem;
          color: var(--text-primary);
          background: transparent;
          transition: color 0.3s ease;
        }

        .navbar-toggler-custom:focus {
          box-shadow: none;
        }

        .nav-link-custom {
          color: var(--text-primary) !important;
          font-weight: 500;
          margin: 0 0.5rem;
          padding: 0.5rem 1rem !important;
          border-radius: 25px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link-custom:hover {
          color: var(--primary-color) !important;
          background: var(--background-tertiary);
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background: var(--gradient-primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link-custom:hover::after {
          width: 80%;
        }

        @media (max-width: 991px) {
          .navbar-custom {
            background: rgba(255, 255, 255, 0.98);
          }

          [data-theme="dark"] .navbar-custom {
            background: rgba(10, 10, 10, 0.98);
          }
          
          .nav-link-custom {
            margin: 0.25rem 0;
            text-align: center;
          }
        }
      `}</style>
    </BSNavbar>
  );
};

export default Navbar;
