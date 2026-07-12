/* ============================================
   LegalPro - About Page
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import './Page.css';

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      {/* Page Hero Banner */}
      <section className="page-hero" ref={ref}>
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.span
            className="page-hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Who We Are
          </motion.span>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About LegalPro
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Over a decade of trusted legal excellence, integrity, and client-first service.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>About</span>
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <WhyChooseUs />
    </>
  );
};

export default AboutPage;
