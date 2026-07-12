/* ============================================
   LegalPro - Hero Section Component
   ============================================ */
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa';
import './Hero.css';

/* Animated counter component */
const StatCounter = ({ value, suffix, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="hero-stat"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <span className="stat-value">
        {value}<span className="stat-suffix">{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="hero" id="hero-section">
      {/* Background decorative elements */}
      <div className="hero-bg-pattern"></div>
      <div className="hero-bg-gradient"></div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Left content area */}
          <div className="hero-text">
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ⚖ Trusted Legal Excellence Since 2015
            </motion.span>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trusted Legal Solutions with{' '}
              <span className="hero-highlight">Integrity</span> and{' '}
              <span className="hero-highlight">Excellence</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide expert legal representation across criminal, civil, family,
              and corporate law. Our commitment to justice and client satisfaction
              drives every case we handle with professionalism and dedication.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn btn-primary btn-lg" id="hero-cta-consultation">
                <FaCalendarCheck />
                <span>Book Consultation</span>
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg" id="hero-cta-learn">
                <span>Learn More</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* Right - Professional visual */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <div className="hero-icon-large">⚖</div>
                <span className="hero-image-text">Justice & Excellence</span>
              </div>
              {/* Decorative floating elements */}
              <div className="hero-float hero-float-1">
                <span>10+</span>
                <small>Years Exp.</small>
              </div>
              <div className="hero-float hero-float-2">
                <span>1000+</span>
                <small>Cases Won</small>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Bar */}
        <div className="hero-stats" id="hero-stats">
          <StatCounter value="10" suffix="+" label="Years Experience" delay={0.4} />
          <div className="stat-divider"></div>
          <StatCounter value="1000" suffix="+" label="Cases Handled" delay={0.5} />
          <div className="stat-divider"></div>
          <StatCounter value="95" suffix="%" label="Success Rate" delay={0.6} />
          <div className="stat-divider"></div>
          <StatCounter value="24/7" suffix="" label="Legal Support" delay={0.7} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
