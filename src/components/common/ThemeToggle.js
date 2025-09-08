import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDarkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
    >
      <motion.div
        className="toggle-icon"
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </motion.div>
      
      <motion.div
        className="toggle-track"
        animate={{
          backgroundColor: isDarkMode ? '#4a5568' : '#e2e8f0'
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          animate={{
            x: isDarkMode ? 20 : 0,
            backgroundColor: isDarkMode ? '#fbbf24' : '#ffffff'
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
