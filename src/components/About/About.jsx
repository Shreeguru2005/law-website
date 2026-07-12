/* ============================================
   LegalPro - About Section Component
   ============================================ */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBullseye, FaEye } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  /* Education & certifications data */
  const qualifications = [
    { icon: FaGraduationCap, title: 'B.A. LL.B (Hons)', institution: 'National Law University', year: '2012-2017' },
    { icon: FaGraduationCap, title: 'LL.M in Criminal Law', institution: 'University of Delhi', year: '2017-2019' },
    { icon: FaCertificate, title: 'Bar Council of India', institution: 'Enrollment No. D/1234/2019', year: '2019' },
    { icon: FaCertificate, title: 'Certified Mediator', institution: 'Indian Institute of Arbitration', year: '2021' }
  ];

  return (
    <section className="about section" id="about-section" ref={ref}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Dedicated to Justice & Your Rights
          </motion.h2>
          <div className="gold-line"></div>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With over a decade of legal expertise, we bring passion, integrity,
            and unwavering commitment to every case we handle.
          </motion.p>
        </div>

        {/* About Content Grid */}
        <div className="about-grid">
          {/* Left - Image / Profile */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-placeholder">
                <span className="about-image-icon">⚖</span>
                <span className="about-image-label">Advocate Profile</span>
              </div>
              <div className="about-experience-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of Excellence</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Details */}
          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="about-name">Adv. Rajesh Kumar Sharma</h3>
            <p className="about-designation">Senior Advocate | Legal Consultant</p>

            <p className="about-bio">
              A distinguished legal professional with extensive experience across multiple
              domains of law. Committed to providing accessible, transparent, and result-oriented
              legal services. Having successfully represented over 1,000 clients, our approach
              combines traditional legal expertise with modern strategies to deliver
              exceptional outcomes.
            </p>

            {/* Mission & Vision */}
            <div className="about-mv-grid">
              <div className="about-mv-card">
                <div className="mv-icon-wrapper">
                  <FaBullseye className="mv-icon" />
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>To provide accessible, affordable, and top-quality legal services
                    while upholding the highest standards of ethics and professionalism.</p>
                </div>
              </div>

              <div className="about-mv-card">
                <div className="mv-icon-wrapper">
                  <FaEye className="mv-icon" />
                </div>
                <div>
                  <h4>Our Vision</h4>
                  <p>To be the most trusted name in legal services, known for our
                    integrity, expertise, and unwavering commitment to justice for all.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Qualifications Timeline */}
        <motion.div
          className="about-qualifications"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="qualifications-title">Education & Certifications</h3>
          <div className="qualifications-grid">
            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                className="qualification-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="qual-icon-wrapper">
                  <item.icon className="qual-icon" />
                </div>
                <h4 className="qual-title">{item.title}</h4>
                <p className="qual-institution">{item.institution}</p>
                <span className="qual-year">{item.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
