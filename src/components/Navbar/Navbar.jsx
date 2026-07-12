/* ============================================
   LegalPro - Navbar Component
   ============================================ */
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  /* Track scroll position for sticky navbar styling */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  /* Navigation links configuration */
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/practice-areas', label: 'Practice Areas' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="main-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" id="navbar-logo">
          <span className="logo-icon">⚖</span>
          <div className="logo-text">
            <span className="logo-name">LegalPro</span>
            <span className="logo-tagline">Advocates & Legal Consultants</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links" id="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="navbar-cta btn btn-primary btn-sm" id="navbar-cta">
          <FaPhone />
          <span>Book Consultation</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          id="navbar-toggle"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="navbar-mobile-menu"
          >
            <ul className="mobile-links">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `mobile-link ${isActive ? 'mobile-link-active' : ''}`
                    }
                    end={link.path === '/'}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  className="btn btn-primary mobile-cta"
                  onClick={() => setIsOpen(false)}
                >
                  <FaPhone />
                  <span>Book Consultation</span>
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
