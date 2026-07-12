/* ============================================
   LegalPro - 404 Not Found Page
   ============================================ */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaArrowRight } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found-section">
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="not-found-icon">⚖</div>
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-text">
            The page you are looking for doesn&apos;t exist or has been moved.
            Return to the homepage and continue your legal journey with us.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <FaHome />
              Back to Home
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Contact Us
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
