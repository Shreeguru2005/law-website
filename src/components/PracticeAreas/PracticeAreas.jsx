/* ============================================
   LegalPro - Practice Areas Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { practiceAreas } from '../../data/practiceAreas';
import './PracticeAreas.css';

/* Individual practice area card */
const PracticeCard = ({ area, index, isInView }) => {
  const Icon = area.icon;

  return (
    <motion.div
      className="practice-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="practice-card-inner">
        <div className="practice-icon-wrapper">
          <Icon className="practice-icon" />
        </div>
        <h3 className="practice-title">{area.title}</h3>
        <p className="practice-description">{area.description}</p>
        <ul className="practice-details">
          {area.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
        <button className="practice-link">
          Learn More <FaArrowRight />
        </button>
      </div>
      <div className="practice-card-border"></div>
    </motion.div>
  );
};

const PracticeAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="practice-areas section section-light" id="practice-areas-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Expertise
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Practice Areas
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Comprehensive legal services across all major areas of law,
            tailored to protect your rights and interests.
          </motion.p>
        </div>

        {/* Practice Areas Grid */}
        <div className="practice-grid">
          {practiceAreas.map((area, index) => (
            <PracticeCard
              key={area.id}
              area={area}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
