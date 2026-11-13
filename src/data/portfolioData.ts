export interface CorePillar {
  index: string;
  title: string;
  description: string;
}

export interface ToolkitItem {
  id: string;
  name: string;
  category: 'Languages & DB' | 'Tools & Platforms' | 'Core Concepts';
  subtitle: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Machine Learning' | 'Data & SQL';
  year: string;
  stack: string[];
  summary: string;
  objective: string;
  methodology: string[];
  featured?: boolean;
}

export const PROFILE = {
  fullName: 'A. Purushotham Naidu',
  shortName: 'Purushotham Naidu',
  greeting: "Hey, I'm Purushotham,",
  location: 'Bengaluru, Karnataka',
  phone: '6302585180',
  phoneFormatted: '+91 63025 85180',
  email: 'apurushotham2006@gmail.com',
  portraitPath: '/assets/aistudio/WhatsApp_Image_2026-11-13_at_2.14.34_PM_336dd9ba.jpeg',
  resumePdfPath: '/assets/aistudio/Purushotham_Naidu_Resume_e4507a3a.pdf',
  degree: 'B.Tech — Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  university: 'JAIN University, Bengaluru',
  careerObjective:
    'Motivated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, eager to apply programming, analytical, and problem-solving skills to practical challenges while continuously learning and growing professionally.',
  languages: ['English', 'Telugu'],
  softSkills: [
    'Problem-Solving',
    'Critical Thinking',
    'Communication',
    'Teamwork',
    'Time Management',
    'Adaptability',
    'Quick Learning',
    'Analytical Thinking',
  ],
};

export const HERO_HIGHLIGHTS = [
  {
    value: 'JAIN',
    label: 'University, Bengaluru',
  },
  {
    value: 'B.Tech',
    label: 'CSE (AI & ML)',
  },
  {
    value: '03',
    label: 'ML & Data Projects',
  },
  {
    value: 'EN · TE',
    label: 'Bilingual Fluency',
  },
];

export const CORE_PILLARS: CorePillar[] = [
  {
    index: '01',
    title: 'Machine Learning',
    description:
      'Designing prediction workflows, classification pipelines, and data-driven models in Python.',
  },
  {
    index: '02',
    title: 'Fraud Detection Systems',
    description:
      'Identifying anomalous financial transaction patterns through structured feature analysis.',
  },
  {
    index: '03',
    title: 'SQL & Data Analysis',
    description:
      'Querying relational schemas in MySQL and translating academic datasets into clear trends.',
  },
  {
    index: '04',
    title: 'Software Foundations',
    description:
      'Applying Data Structures, Algorithms, OOP, and DBMS fundamentals across Java and Python.',
  },
];

export const TOOLKIT_GRID: ToolkitItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Languages & DB',
    subtitle: 'Primary ML & Scripting Language',
    detail: 'Used across fraud detection modeling, data preprocessing, and predictive pipelines.',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Languages & DB',
    subtitle: 'Object-Oriented Engineering',
    detail: 'Core language for Data Structures, Algorithms, and strongly typed system design.',
  },
  {
    id: 'sql-mysql',
    name: 'SQL & MySQL',
    category: 'Languages & DB',
    subtitle: 'Relational Database Management',
    detail: 'Schema design, multi-table joins, aggregations, and academic performance querying.',
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'Tools & Platforms',
    subtitle: 'Visual Data Exploration',
    detail: 'Interactive dashboards for surfacing distributions, correlations, and analytical trends.',
  },
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Tools & Platforms',
    subtitle: 'Version Control & Collaboration',
    detail: 'Branching workflows, repository management, and reproducible codebase history.',
  },
  {
    id: 'colab',
    name: 'Google Colab',
    category: 'Tools & Platforms',
    subtitle: 'Cloud Notebook Prototyping',
    detail: 'Iterative model experimentation, dataset inspection, and Python notebook execution.',
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'Tools & Platforms',
    subtitle: 'Primary Development IDE',
    detail: 'Structured debugging, linting, and multi-language project authoring.',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Tools & Platforms',
    subtitle: 'CLI & Environment Workflow',
    detail: 'Shell scripting, environment tooling, and terminal-first software execution.',
  },
];

export const CORE_CONCEPTS = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems (DBMS)',
];

export const AREAS_OF_INTEREST = [
  'Machine Learning',
  'Optimization',
  'Fraud Detection Systems',
  'Data Analysis',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fraud-detection',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection System',
    category: 'Machine Learning',
    year: '2026',
    stack: ['Python', 'Machine Learning', 'Fraud Detection', 'Data Analysis'],
    summary:
      'Identify potentially fraudulent financial transactions using Python and supervised machine learning classification.',
    objective:
      'Detect anomalous card activity within highly imbalanced transaction streams while minimizing false-positive friction on legitimate purchases.',
    methodology: [
      'Normalize transaction amounts, timestamps, and behavioral velocity features in Python.',
      'Handle class imbalance between genuine and fraudulent records before model fitting.',
      'Train and evaluate classification boundaries to flag high-risk transactions early.',
      'Score incoming events with interpretable risk indicators for review.',
    ],
    featured: true,
  },
  {
    id: 'student-performance',
    slug: 'student-performance-analysis',
    title: 'Student Performance Analysis',
    category: 'Data & SQL',
    year: '2026',
    stack: ['Python', 'SQL', 'MySQL', 'Tableau'],
    summary:
      'Explore academic performance metrics and uncover multi-factor patterns using Python and relational SQL queries.',
    objective:
      'Surface how attendance consistency, study habits, and subject prerequisites correlate with overall semester outcomes.',
    methodology: [
      'Structure student assessment and attendance records inside normalized MySQL tables.',
      'Write analytical SQL queries using aggregations, window rankings, and cohort groupings.',
      'Perform exploratory statistical checks in Python to validate observed trends.',
      'Present subject-wise variance and cohort comparisons cleanly.',
    ],
  },
  {
    id: 'ml-prediction',
    slug: 'machine-learning-prediction-system',
    title: 'Machine Learning Prediction System',
    category: 'Machine Learning',
    year: '2026',
    stack: ['Python', 'Google Colab', 'Optimization', 'Modeling'],
    summary:
      'Process raw structured datasets and generate reliable predictions using an end-to-end Python pipeline in Google Colab.',
    objective:
      'Build a repeatable workflow from messy tabular inputs through feature engineering to calibrated predictive outputs.',
    methodology: [
      'Clean missing values, encode categorical attributes, and inspect feature distributions.',
      'Split datasets cleanly to prevent data leakage across training and validation folds.',
      'Iterate on model hyperparameters inside Google Colab notebooks.',
      'Evaluate prediction residuals and export structured output summaries.',
    ],
  },
];
