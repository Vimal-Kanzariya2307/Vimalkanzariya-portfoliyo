import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Foundational syntax and algorithm implementations across compiled and interpreted languages',
    skills: [
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'Python', highlight: true },
      { name: 'C++', highlight: true },
      { name: 'SQL', highlight: false },
      { name: 'HTML5', highlight: false },
      { name: 'CSS3', highlight: false },
    ],
  },
  {
    title: 'Frontend Development',
    description: 'Modern component-driven user interfaces, responsive layouts, and state management',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'Responsive Web Design', highlight: true },
      { name: 'DOM Manipulation', highlight: false },
      { name: 'Component Architecture', highlight: false },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Server architectures, RESTful API design, authentication, and secure middleware',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'JWT & Authentication', highlight: true },
      { name: 'Bcrypt Password Hashing', highlight: false },
      { name: 'Multer File Uploads', highlight: false },
      { name: 'Middleware & Error Handling', highlight: false },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Document and relational data models, schema design, and querying',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'Mongoose ODM', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Database Normalization', highlight: false },
    ],
  },
  {
    title: 'Data Science & FinTech',
    description: 'Financial computing, time-series analysis, statistical models, and distributed ledgers',
    skills: [
      { name: 'Pandas', highlight: true },
      { name: 'NumPy', highlight: true },
      { name: 'Financial Data Analysis', highlight: true },
      { name: 'Data Visualization', highlight: false },
      { name: 'Blockchain Fundamentals', highlight: true },
      { name: 'Market Volatility Modeling', highlight: false },
    ],
  },
  {
    title: 'Developer Tools & Workflow',
    description: 'Version control, environment orchestration, API testing, and continuous workflows',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'VS Code', highlight: false },
      { name: 'Postman', highlight: true },
      { name: 'npm', highlight: false },
      { name: 'Vite', highlight: false },
    ],
  },
];
