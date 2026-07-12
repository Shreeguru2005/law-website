/* ============================================
   LegalPro - Why Choose Us Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaUserTie,
  FaMoneyCheckAlt,
  FaLock,
  FaHandHoldingHeart,
  FaBolt,
  FaChartLine
} from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    {
      icon: FaUserTie,
      title: 'Experienced Advocate',
      description: '10+ years of proven expertise across multiple areas of law with a track record of successful outcomes.'
    },
    {
      icon: FaMoneyCheckAlt,
      title: 'Transparent Fees',
      description: 'Clear, upfront pricing with no hidden charges. We believe in honest and fair billing practices.'
    },
    {
      icon: FaLock,
      title: 'Confidential Consultation',
      description: 'Your privacy is our priority. All consultations and case details are kept strictly confidential.'
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Personalized Legal Advice',
      description: 'Every case is unique. We provide tailored legal strategies designed specifically for your situation.'
    },
    {
      icon: FaBolt,
      title: 'Fast Response',
      description: '24/7 availability for urgent legal matters. We understand that legal issues cannot always wait.'
    },
    {
      icon: FaChartLine,
      title: 'Proven Results',
      description: '95% success rate with over 1000+ cases handled. Our results speak for our commitment to excellence.'
    }
  ];

  return (
    <section className="why-choose section section-light" id="why-choose-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Why LegalPro
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Why Choose Us
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            We combine legal expertise with a client-first approach to deliver
            exceptional results every time.
          </motion.p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="why-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <div className="why-icon-wrapper">
                  <Icon className="why-icon" />
                </div>
                <h3 className="why-title">{feature.title}</h3>
                <p className="why-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
