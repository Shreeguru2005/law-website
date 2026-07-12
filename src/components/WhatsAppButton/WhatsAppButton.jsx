/* ============================================
   LegalPro - Floating WhatsApp Button
   ============================================ */
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WHATSAPP_NUMBER = '919876543210';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello! I would like to schedule a legal consultation with LegalPro.'
);

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
