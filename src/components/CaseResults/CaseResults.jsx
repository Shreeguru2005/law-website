/* ============================================
   LegalPro - Case Results Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaGavel } from 'react-icons/fa';
import { caseResults } from '../../data/caseResults';
import './CaseResults.css';

/* Outcome badge color mapping */
const outcomeColors = {
  'Not Guilty': '#10B981',
  'Full Custody Granted': '#3B82F6',
  '₹2.5 Cr Settlement': '#8B5CF6',
  '₹15 Lakh Compensation': '#F59E0B',
  'Favorable Arbitration': '#EC4899',
  'Funds Recovered': '#10B981'
};

const CaseCard = ({ result, index, isInView }) => {
  const color = outcomeColors[result.outcome] || '#C9A227';

  return (
    <motion.div
      className="case-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      role="article"
      aria-label={`Case: ${result.title}`}
    >
      <div className="case-card-header">
        <span className="case-category">{result.category}</span>
        <span className="case-year">{result.year}</span>
      </div>

      <div className="case-icon-wrapper">
        <FaGavel className="case-icon" />
      </div>

      <h3 className="case-title">{result.title}</h3>
      <p className="case-description">{result.description}</p>

      <div className="case-outcome" style={{ '--outcome-color': color }}>
        <FaTrophy className="outcome-icon" />
        <span>{result.outcome}</span>
      </div>
    </motion.div>
  );
};

const CaseResults = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="case-results section" id="case-results-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Track Record
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Notable Case Results
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            A selection of successful outcomes achieved for our clients
            across various practice areas.
          </motion.p>
        </div>

        <div className="case-grid">
          {caseResults.map((result, index) => (
            <CaseCard key={result.id} result={result} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseResults;
