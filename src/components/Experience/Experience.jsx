/* ============================================
   LegalPro - Experience Timeline Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaIdCard, FaTrophy, FaStar, FaAward, FaBuilding } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  /* Timeline milestones */
  const milestones = [
    {
      year: '2017',
      title: 'Law Degree Completed',
      description: 'Graduated with B.A. LL.B (Hons) from National Law University with distinction.',
      icon: FaGraduationCap
    },
    {
      year: '2019',
      title: 'Bar Council Enrollment',
      description: 'Enrolled with the Bar Council of India after completing LL.M in Criminal Law.',
      icon: FaIdCard
    },
    {
      year: '2020',
      title: 'First Major Victory',
      description: 'Won landmark criminal defense case resulting in full acquittal of the accused.',
      icon: FaTrophy
    },
    {
      year: '2022',
      title: '500+ Cases Milestone',
      description: 'Successfully represented over 500 clients across multiple courts and jurisdictions.',
      icon: FaStar
    },
    {
      year: '2024',
      title: 'Best Advocate Award',
      description: 'Received the "Outstanding Young Advocate" award from the District Bar Association.',
      icon: FaAward
    },
    {
      year: '2025',
      title: 'LegalPro Law Firm Founded',
      description: 'Established LegalPro as a full-service law firm with a team of expert advocates.',
      icon: FaBuilding
    }
  ];

  return (
    <section className="experience section" id="experience-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Our Journey
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Experience & Milestones
          </motion.h2>
          <div className="gold-line"></div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line"></div>
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
                <div className="timeline-dot">
                  <Icon />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
