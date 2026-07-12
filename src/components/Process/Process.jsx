/* ============================================
   LegalPro - Consultation Process Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCalendarCheck,
  FaComments,
  FaLightbulb,
  FaBalanceScale,
  FaCheckCircle
} from 'react-icons/fa';
import './Process.css';

const steps = [
  {
    number: '01',
    icon: FaCalendarCheck,
    title: 'Schedule Appointment',
    description: 'Book a consultation online, by phone, or in person at a time that suits you.'
  },
  {
    number: '02',
    icon: FaComments,
    title: 'Discuss Your Case',
    description: 'Share the details of your legal matter in a confidential, judgment-free environment.'
  },
  {
    number: '03',
    icon: FaLightbulb,
    title: 'Legal Strategy',
    description: "We craft a tailored legal strategy aligned with your goals and the facts of your case."
  },
  {
    number: '04',
    icon: FaBalanceScale,
    title: 'Representation',
    description: 'We represent you in court, negotiations, or tribunals with expertise and tenacity.'
  },
  {
    number: '05',
    icon: FaCheckCircle,
    title: 'Resolution',
    description: 'Achieve the best possible outcome and receive full guidance on the way forward.'
  }
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="process section section-light" id="process-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Our Consultation Process
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            A clear, structured approach from your first call to final resolution.
          </motion.p>
        </div>

        {/* Steps horizontal timeline */}
        <div className="process-timeline">
          {/* Connecting line */}
          <div className="process-line" aria-hidden="true"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              >
                {/* Step node */}
                <div className="process-node">
                  <div className="process-icon-wrapper">
                    <Icon className="process-icon" aria-hidden="true" />
                  </div>
                  <span className="process-number">{step.number}</span>
                </div>

                {/* Step content */}
                <div className="process-content">
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-description">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
