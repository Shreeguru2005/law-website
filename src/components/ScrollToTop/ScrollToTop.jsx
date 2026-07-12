/* ============================================
   LegalPro - ScrollToTop Component
   Handles both:
   1. Route-change scroll reset (no showButton prop)
   2. Floating back-to-top button (showButton prop)
   ============================================ */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTop.css';

const ScrollToTop = ({ showButton = false }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  /* Scroll to top on route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  /* Track visibility for the button */
  useEffect(() => {
    if (!showButton) return;
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showButton]);

  if (!showButton) return null;

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scroll-to-top-btn"
          onClick={scrollUp}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
          title="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
