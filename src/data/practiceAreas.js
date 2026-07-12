/* ============================================
   LegalPro - Data: Practice Areas
   ============================================ */

import {
  FaGavel,
  FaUsers,
  FaBalanceScale,
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaLaptop,
  FaFileContract,
  FaHandshake,
  FaComments
} from 'react-icons/fa';

export const practiceAreas = [
  {
    id: 1,
    icon: FaGavel,
    title: 'Criminal Law',
    description: 'Expert defense in criminal cases including bail, trials, and appeals. We protect your rights with aggressive legal representation.',
    details: ['Bail Applications', 'Criminal Trials', 'Appeals', 'White Collar Crime']
  },
  {
    id: 2,
    icon: FaUsers,
    title: 'Family Law',
    description: 'Compassionate legal support for divorce, custody, alimony, and domestic matters with sensitivity and professionalism.',
    details: ['Divorce Proceedings', 'Child Custody', 'Alimony', 'Domestic Violence']
  },
  {
    id: 3,
    icon: FaBalanceScale,
    title: 'Civil Litigation',
    description: 'Strategic civil litigation services for disputes, property matters, and breach of contract cases.',
    details: ['Property Disputes', 'Contract Breach', 'Injunctions', 'Recovery Suits']
  },
  {
    id: 4,
    icon: FaHome,
    title: 'Property Law',
    description: 'Complete legal assistance for property transactions, title verification, and real estate disputes.',
    details: ['Title Verification', 'Sale Agreements', 'Tenant Disputes', 'Land Acquisition']
  },
  {
    id: 5,
    icon: FaBuilding,
    title: 'Corporate Law',
    description: 'Comprehensive corporate legal services including company formation, compliance, and business advisory.',
    details: ['Company Formation', 'Compliance', 'Mergers & Acquisitions', 'Corporate Governance']
  },
  {
    id: 6,
    icon: FaShieldAlt,
    title: 'Consumer Protection',
    description: 'Fighting for consumer rights against defective products, unfair trade practices, and service deficiencies.',
    details: ['Consumer Complaints', 'Product Liability', 'Unfair Trade Practices', 'Service Deficiency']
  },
  {
    id: 7,
    icon: FaLaptop,
    title: 'Cyber Crime',
    description: 'Specialized legal assistance for cyber fraud, online harassment, data theft, and digital crimes.',
    details: ['Online Fraud', 'Data Theft', 'Cyber Harassment', 'Identity Theft']
  },
  {
    id: 8,
    icon: FaFileContract,
    title: 'Documentation',
    description: 'Professional legal document drafting, review, and registration services for all types of agreements.',
    details: ['Contract Drafting', 'Will Preparation', 'Power of Attorney', 'Deed Registration']
  },
  {
    id: 9,
    icon: FaHandshake,
    title: 'Arbitration',
    description: 'Alternative dispute resolution through arbitration and mediation for efficient conflict resolution.',
    details: ['Commercial Arbitration', 'Mediation', 'Conciliation', 'Settlement Negotiation']
  },
  {
    id: 10,
    icon: FaComments,
    title: 'Legal Consultation',
    description: 'Expert legal advisory services for individuals and businesses on all matters of law.',
    details: ['Legal Opinion', 'Case Assessment', 'Risk Analysis', 'Compliance Advisory']
  }
];
