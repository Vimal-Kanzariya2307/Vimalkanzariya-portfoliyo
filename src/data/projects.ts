import { Project } from '../types';
import pgFinderImage from '../assets/images/pgfinder_platform_preview_1793155427276.jpg';

import stockVolatilityImage from '../assets/images/stock_volatility_preview_1793155427283.jpg';

export const projectsData: Project[] = [
  {
    id: 'pg-finder',
    title: 'PGFinder',
    category: 'Full-Stack Web Development',
    subtitle: 'Accommodation platform connecting students & working professionals with PG rooms',
    description:
      'A full-stack accommodation-finder application built to help users explore PG listings and manage accommodation-related information. Features robust REST APIs, authentication, media uploads, and listing filters.',
    // image: '/src/assets/images/pgfinder_platform_preview_1793155427276.jpg',
    image: pgFinderImage,
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt', 'Multer'],
    problemStatement:
      'Finding reliable PG accommodations with verified amenities and direct host contact is fragmented and tedious for university students and relocating professionals.',
    solutionHighlight:
      'Engineered a scalable RESTful architecture with JSON Web Tokens (JWT) for secure authentication, Bcrypt credential protection, Multer multi-part image handling for property galleries, and MongoDB schemas.',
    keyFeatures: [
      'RESTful API development with Express.js & MongoDB',
      'Accommodation listing management with real-time filters',
      'User authentication and role authorization via JWT',
      'Secure password hashing with Bcrypt',
      'Multi-part image & media upload handling using Multer',
      'Robust global backend error-handling & request validation middleware',
    ],
    liveUrl: 'https://pg-finder-gamma.vercel.app/',
    githubUrl: 'https://github.com/Vimal-Kanzariya2307',
    status: 'completed',
    year: '2025',
  },
  {
    id: 'stock-volatility',
    title: 'Stock Volatility Website',
    category: 'Financial Technology / Data Visualization',
    subtitle: 'Market volatility analytics & financial risk monitoring platform',
    description:
      'A financial analytics web application designed to track, analyze, and visualize stock market volatility and trends through financial data and interactive visualizations.',
    image: stockVolatilityImage,
    technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'Pandas', 'NumPy'],
    problemStatement:
      'Retail investors and FinTech students need clear, accessible market volatility metrics and time-series charting without cumbersome enterprise terminal paywalls.',
    solutionHighlight:
      'Combines a Python computation backend utilizing Pandas and NumPy statistical calculations with an interactive frontend to deliver clean visual data analytics on market fluctuations.',
    keyFeatures: [
      'Historical stock price & time-series visualization',
      'Real-time volatility tracking and index monitoring',
      'Moving averages calculation (EMA/SMA) and trend indicators',
      'Risk evaluation through statistical data analytics',
      'Dynamic candlestick & fluctuation chart rendering',
      'Interactive date range & ticker data exploration',
    ],
    githubUrl: 'https://github.com/Vimal-Kanzariya2307',
    status: 'completed',
    year: '2026',
  },
  {
    id: 'upcoming-fintech-hub',
    title: 'FinTech Ledger & Analytics Lab',
    category: 'Web3 & Financial Systems',
    subtitle: 'Upcoming distributed ledger & portfolio tracker application',
    description:
      'Next-generation project slot dedicated to integrating blockchain transaction verification and algorithmic financial portfolio metrics, extending academic coursework into real-world code.',
    image: '',
    technologies: ['React.js', 'Node.js', 'Blockchain', 'REST APIs', 'Tailwind CSS'],
    problemStatement:
      'Bridging conventional financial data models with transparent distributed ledgers to provide verifiable portfolio accounting.',
    solutionHighlight:
      'Architected as an extensible template for upcoming academic capstone work in FinTech and smart contract integration.',
    keyFeatures: [
      'Smart contract interaction & verifiable state transitions',
      'Automated transaction ledger reconciliation',
      'Interactive risk-adjusted portfolio return metrics',
      'Clean modular React and TypeScript architecture',
    ],
    status: 'in-development',
    year: '2026',
  },
];
