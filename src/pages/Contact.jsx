/* ============================================
   LegalPro - Contact Page
   ============================================ */
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';
import './Page.css';

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: '-80px' });

  /* Form state */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Validation */
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s|-/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    /* Clear error on change */
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    /* Simulate API call */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Office Address',
      lines: ['Chamber No. 101, District Court Complex', 'New Delhi – 110001, India']
    },
    {
      icon: FaPhone,
      title: 'Phone',
      lines: ['+91 98765 43210', '+91 11 2345 6789']
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      lines: ['info@legalpro.in', 'consultation@legalpro.in']
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      lines: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday: 10:00 AM – 2:00 PM']
    }
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" ref={heroRef}>
        <div className="page-hero-bg"></div>
        <div className="container">
          <motion.span
            className="page-hero-label"
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="page-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Reach out for a confidential consultation. We&apos;re here to help.
          </motion.p>
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section" ref={formRef}>
        <div className="container">
          <div className="contact-grid">

            {/* Left – Contact Info */}
            <motion.aside
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-info-title">Let&apos;s Talk</h2>
              <p className="contact-info-text">
                Have a legal query? Reach out to us. Our team is available to
                answer your questions and provide the guidance you need.
              </p>

              <div className="contact-info-cards">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div className="contact-info-card" key={i}>
                      <div className="contact-info-icon">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="contact-info-card-title">{item.title}</h3>
                        {item.lines.map((line, j) => (
                          <p key={j} className="contact-info-card-text">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.aside>

            {/* Right – Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 40 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <div className="contact-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>
                    Thank you for reaching out. We&apos;ll get back to you within
                    24 hours. For urgent matters, please call us directly.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h2 className="contact-form-title">Book a Consultation</h2>

                  <div className="form-row">
                    <div className={`form-group ${errors.name ? 'form-group-error' : ''}`}>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>

                    <div className={`form-group ${errors.email ? 'form-group-error' : ''}`}>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${errors.phone ? 'form-group-error' : ''}`}>
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                      {errors.phone && <span className="form-error">{errors.phone}</span>}
                    </div>

                    <div className={`form-group ${errors.subject ? 'form-group-error' : ''}`}>
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        className="form-input form-select"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option>Criminal Law</option>
                        <option>Family Law</option>
                        <option>Civil Litigation</option>
                        <option>Property Law</option>
                        <option>Corporate Law</option>
                        <option>Consumer Protection</option>
                        <option>Cyber Crime</option>
                        <option>Documentation</option>
                        <option>Arbitration</option>
                        <option>General Consultation</option>
                      </select>
                      {errors.subject && <span className="form-error">{errors.subject}</span>}
                    </div>
                  </div>

                  <div className={`form-group ${errors.message ? 'form-group-error' : ''}`}>
                    <label htmlFor="message" className="form-label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Briefly describe your legal matter..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg contact-submit-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="btn-spinner"></span>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="map-wrapper">
            <div className="map-placeholder">
              <FaMapMarkerAlt className="map-icon" />
              <p>Chamber No. 101, District Court Complex, New Delhi – 110001</p>
              <small>Google Maps Embed Placeholder</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
