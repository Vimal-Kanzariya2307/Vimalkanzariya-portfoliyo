import { EducationItem, CertificationItem } from '../types';

export const educationData: EducationItem[] = [
  {
    id: 'bsc-it-fintech',
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT - FinTech)',
    institution: 'Marwadi University',
    location: 'Rajkot, Gujarat, India',
    period: 'Expected 2027',
    scoreLabel: 'CGPA',
    scoreValue: '7.95 / 10',
    highlightCoursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C/C++)',
      'Full-Stack Web Development (Node.js, React.js)',
      'Data Analysis & Visualization (Python, NumPy, Pandas)',
      'Financial Technology (FinTech) & Corporate Finance',
      'Blockchain Development & Smart Contracts',
    ],
  },
  {
    id: 'hsc-12th',
    degree: 'Higher Secondary Certificate (HSC – 12th Grade)',
    institution: 'Crystal Public School',
    location: 'Rajkot, Gujarat, India',
    period: '2024',
    scoreLabel: 'Percentage',
    scoreValue: '87.14%',
    boardOrDetails: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
  },
  {
    id: 'ssc-10th',
    degree: 'Secondary School Certificate (SSC – 10th Grade)',
    institution: 'Crystal Public School',
    location: 'Rajkot, Gujarat, India',
    period: '2022',
    scoreLabel: 'Percentage',
    scoreValue: '81.67%',
    boardOrDetails: 'Gujarat Secondary and Higher Secondary Education Board (GSEB)',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-blockchain',
    title: 'Blockchain Developer Training',
    issuer: 'Simplilearn SkillUp',
    credentialNote: 'Completed professional online training certification covering smart contracts and decentralized protocols.',
    badge: 'Blockchain & Web3',
  },
  {
    id: 'cert-aws',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: 'June 2026',
    credentialNote: 'Official cloud fundamentals training course validating cloud concepts, core AWS services, security, and architecture.',
    badge: 'Cloud Computing',
  },
  {
    id: 'cert-fintech-workshop',
    title: 'Fintech for Everyone: Digital Tools Shaping Modern Finance',
    issuer: "Tula's Institute & Wealth Wizard",
    date: 'February 2026',
    credentialNote: 'National workshop on digital financial tooling, modern quantitative finance, and emerging payments.',
    badge: 'Financial Technology',
  },
];
