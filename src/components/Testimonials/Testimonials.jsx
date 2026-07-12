/* ============================================
   LegalPro - Testimonials Carousel Component
   ============================================ */
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  /* Navigate to previous testimonial */
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  /* Navigate to next testimonial */
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="testimonials section" id="testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="gold-line"></div>
        </div>

        <motion.div
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <button
            className="carousel-btn carousel-prev"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            id="testimonial-prev"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <FaQuoteLeft className="testimonial-quote-icon" />

                <p className="testimonial-text">{current.text}</p>

                {/* Star Rating */}
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`star ${i < current.rating ? 'star-filled' : 'star-empty'}`}
                    />
                  ))}
                </div>

                <div className="testimonial-author">
                  <div className="author-avatar">
                    {current.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{current.name}</h4>
                    <p className="author-role">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="carousel-btn carousel-next"
            onClick={handleNext}
            aria-label="Next testimonial"
            id="testimonial-next"
          >
            <FaChevronRight />
          </button>
        </motion.div>

        {/* Pagination dots */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'carousel-dot-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
