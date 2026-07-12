/* ============================================
   LegalPro - Footer Component
   ============================================ */
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ];

  const practiceLinks = [
    'Criminal Law',
    'Family Law',
    'Civil Litigation',
    'Property Law',
    'Corporate Law',
    'Consumer Protection',
    'Cyber Crime',
    'Arbitration'
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer" id="footer" role="contentinfo">
      {/* Main Footer Content */}
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand Column */}
            <div className="footer-brand">
              <Link to="/" className="footer-logo" aria-label="LegalPro Home">
                <span className="footer-logo-icon">⚖</span>
                <div>
                  <span className="footer-logo-name">LegalPro</span>
                  <span className="footer-logo-tagline">Advocates &amp; Legal Consultants</span>
                </div>
              </Link>
              <p className="footer-brand-description">
                Trusted legal solutions with integrity and excellence. Over a decade of
                expert legal representation across all areas of law.
              </p>
              {/* Social Icons */}
              <div className="footer-social">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="social-link"
                    aria-label={label}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      <FaArrowRight className="footer-link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="footer-column">
              <h3 className="footer-column-title">Practice Areas</h3>
              <ul className="footer-links">
                {practiceLinks.map((area) => (
                  <li key={area}>
                    <Link to="/practice-areas" className="footer-link">
                      <FaArrowRight className="footer-link-icon" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="footer-column">
              <h3 className="footer-column-title">Contact Us</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <FaMapMarkerAlt className="footer-contact-icon" />
                  <span>Chamber No. 101, District Court Complex, New Delhi – 110001</span>
                </li>
                <li className="footer-contact-item">
                  <FaPhone className="footer-contact-icon" />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li className="footer-contact-item">
                  <FaEnvelope className="footer-contact-icon" />
                  <a href="mailto:info@legalpro.in">info@legalpro.in</a>
                </li>
              </ul>

              {/* CTA */}
              <Link to="/contact" className="btn btn-primary btn-sm footer-cta">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            &copy; {currentYear} LegalPro Advocates &amp; Legal Consultants. All Rights Reserved.
          </p>
          <p className="footer-disclaimer">
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
