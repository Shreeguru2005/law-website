/* ============================================
   LegalPro - FAQ Accordion Component
   ============================================ */
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { faqs } from '../../data/faqs';
import './FAQ.css';

/* Single FAQ item */
const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
    <button
      className="faq-question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${faq.id}`}
      id={`faq-question-${faq.id}`}
    >
      <span>{faq.question}</span>
      <span className="faq-toggle-icon" aria-hidden="true">
        {isOpen ? <FaMinus /> : <FaPlus />}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          id={`faq-answer-${faq.id}`}
          role="region"
          aria-labelledby={`faq-question-${faq.id}`}
          className="faq-answer-wrapper"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq section section-light" id="faq-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Common Questions
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Find answers to common legal questions. Still have queries?{' '}
            <a href="/contact" className="faq-contact-link">Contact us</a> directly.
          </motion.p>
        </div>

        <motion.div
          className="faq-list"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
