/* ============================================
   LegalPro - Services / Practice Areas Page
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PracticeAreas from '../components/PracticeAreas/PracticeAreas';
import Process from '../components/Process/Process';
import './Page.css';

const ServicesPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="page-hero" ref={ref}>
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.span
            className="page-hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Legal Services
          </motion.span>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Practice Areas
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Comprehensive legal services across all major domains of law.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Practice Areas</span>
          </div>
        </div>
      </section>

      <PracticeAreas />
      <Process />
    </>
  );
};

export default ServicesPage;
