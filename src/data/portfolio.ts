export interface PortfolioLink {
  label: string
  url: string | null
}

export interface PortfolioProject {
  number: string
  title: string
  category: string
  description: string
  problem: string
  contribution: string
  technologies: string[]
  features: string[]
  repository: PortfolioLink
  liveDemo: PortfolioLink
  award?: string
}

export interface Achievement {
  title: string
  context: string
  description: string
  link?: PortfolioLink
}

export const portfolio = {
  name: 'Kalpesh Mahadik',
  monogram: 'KM',
  email: 'kalpeshmahadik115@gmail.com',
  phone: '+91 9673026042',
  title: 'AI/ML Engineer | Data Science | Intelligent Applications',
  headline: ['Building Intelligent Systems.', 'Turning Data Into Impact.'],
  introduction:
    'I’m an AI and Data Science student at VIIT Pune, building practical machine-learning and data-driven applications. I’m interested in turning technical ideas into useful systems that address real-world problems.',
  location: 'Pune, India',
  graduationYear: 2027,
  resumePath: '/resume.pdf',
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/MKalpesh115',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kalpesh-mahadik-9b99532b2/',
    },
    {
      label: 'LeetCode',
      url: 'https://leetcode.com/u/Kalpesh2864/',
    },
  ] satisfies PortfolioLink[],
  education: {
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    degree: 'B.Tech — Artificial Intelligence and Data Science',
    years: '2023–2027',
    cgpa: '8.59/10',
  },
  about: [
    "I'm Kalpesh Mahadik, a final-year B.Tech student in Artificial Intelligence and Data Science at Vishwakarma Institute of Information Technology, Pune.",
    'My journey revolves around building intelligent systems and using data to solve real-world problems. From developing computer vision solutions for agriculture to monitoring mining activities using satellite imagery, I enjoy transforming ideas into practical applications.',
    'I have experience working with Machine Learning, Data Science, Python, SQL, and backend technologies. I also enjoy exploring new technologies, collaborating with people, and continuously improving my problem-solving skills.',
    'Outside technology, I am passionate about cricket and singing. Being part of the VIIT cricket team and winning tournaments has taught me teamwork, discipline, and the importance of performing under pressure.',
    'I am always excited to explore challenging opportunities where I can learn, contribute, and build meaningful technology.',
  ],
  skillGroups: [
    {
      name: 'Programming Languages',
      skills: ['Python', 'C++', 'SQL'],
    },
    {
      name: 'Machine Learning & Data Science',
      skills: [
        'TensorFlow',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Data Analysis',
        'Data Visualization',
        'Computer Vision',
      ],
    },
    {
      name: 'Natural Language Processing',
      skills: ['NLTK', 'TF-IDF', 'Text Preprocessing'],
    },
    {
      name: 'Backend & Databases',
      skills: ['FastAPI', 'Flask', 'MySQL', 'PostgreSQL', 'REST APIs'],
    },
    {
      name: 'Tools & Platforms',
      skills: [
        'Power BI',
        'DAX',
        'Jupyter Notebook',
        'OpenCV',
        'Git',
        'GitHub',
      ],
    },
    {
      name: 'Core Computer Science',
      skills: [
        'Object-Oriented Programming',
        'Data Structures & Algorithms',
        'DBMS',
        'Problem Solving',
      ],
    },
  ],
  projects: [
    {
      number: '01',
      title: 'Adaptive Mining Activity Monitoring using Sentinel 2.0',
      category: 'Geospatial ML · Monitoring',
      description:
        'An end-to-end unsupervised machine learning system designed to monitor mining activity using Sentinel-2 satellite time-series data through Google Earth Engine.\n\nThe system uses Isolation Forest for anomaly detection and identifies spectrally validated excavation signatures. A React dashboard with a FastAPI backend presents excavation maps, temporal profiles, and violation alerts.',
      problem:
        'Mining activity can be difficult to monitor consistently across large areas and over time.',
      contribution:
        'Built an anomaly-detection pipeline with spectrally validated excavation signatures, alongside a React dashboard and FastAPI backend for geospatial review.',
      technologies: [
        'Python',
        'Isolation Forest',
        'Google Earth Engine',
        'Sentinel-2',
        'FastAPI',
        'React',
        'REST APIs',
        'Geospatial Analysis',
      ],
      features: [
        'Excavation maps',
        'Temporal profiles',
        'Violation alerts',
        'Geospatial analysis',
      ],
      repository: {
        label: 'GitHub repository',
        url: 'https://github.com/MKalpesh115/adaptive-mining-monitoring',
      },
      liveDemo: {
        label: 'Live demo',
        url: null,
      },
    },
    {
      number: '02',
      title: 'Drone-Based Crop Disease Detection System',
      category: 'Computer Vision · Agriculture',
      description:
        'A drone-integrated computer vision system designed for real-time crop disease detection using Convolutional Neural Networks.\n\nThe system includes image acquisition, preprocessing, model inference, and disease classification. Python, Flask, and MongoDB are used for backend processing and dataset management.',
      problem:
        'Crop disease identification can benefit from a system that combines aerial image acquisition with automated classification.',
      contribution:
        'Designed and developed the disease-detection workflow from image acquisition and preprocessing through model inference, with Python, Flask, and MongoDB.',
      technologies: [
        'Python',
        'CNN',
        'OpenCV',
        'Flask',
        'MongoDB',
        'Drone Imaging',
        'REST APIs',
      ],
      features: [
        'Image acquisition',
        'Image preprocessing',
        'Disease classification',
        'Model inference',
      ],
      repository: {
        label: 'GitHub repository',
        url: 'https://github.com/MKalpesh115/crop_disease_detection',
      },
      liveDemo: {
        label: 'Live demo',
        url: null,
      },
      award: 'Patent Granted',
    },
    {
      number: '03',
      title: 'Marathi Movie Review Classification',
      category: 'NLP · Text Classification',
      description:
        'An NLP-based text classification system that analyzes Marathi movie reviews through text preprocessing, tokenization, stemming, and lemmatization.\n\nMeaningful textual features are extracted using TF-IDF and used to train a machine learning classifier for sentiment and review categorization.',
      problem:
        'Classifying reviews in Marathi calls for a text-processing workflow suited to the language and task.',
      contribution:
        'Developed a pipeline covering text preprocessing, tokenization, stemming and lemmatization, TF-IDF feature extraction, and machine-learning classification.',
      technologies: [
        'Python',
        'NLP',
        'NLTK',
        'Scikit-learn',
        'TF-IDF',
        'Text Preprocessing',
      ],
      features: [
        'Text preprocessing',
        'Tokenization',
        'Stemming and lemmatization',
        'TF-IDF classification',
      ],
      repository: {
        label: 'GitHub repository',
        url: 'https://github.com/MKalpesh115/marathi_review_movie_classification',
      },
      liveDemo: {
        label: 'Live demo',
        url: null,
      },
    },
    {
      number: '04',
      title: 'E-commerce Sales & Business Intelligence Analytics',
      category: 'Analytics · Business Intelligence',
      description:
        'An end-to-end e-commerce data analytics project using PostgreSQL to analyze revenue growth, customer behavior, order frequency, and regional sales trends.\n\nPython visualizations and an interactive Power BI dashboard provide dynamic filters, drill-down capabilities, and DAX-based performance measures.',
      problem:
        'Commerce data can be difficult to act on without a clear view of sales patterns and customer behavior.',
      contribution:
        'Performed SQL-based analysis, created Python visualizations, and built a Power BI dashboard with dynamic filters, drill-downs, and DAX measures.',
      technologies: [
        'PostgreSQL',
        'SQL',
        'Python',
        'Matplotlib',
        'Power BI',
        'DAX',
        'Data Analysis',
      ],
      features: [
        'SQL-based analysis',
        'Python visualizations',
        'Dynamic filters',
        'Dashboard drill-downs',
      ],
      repository: {
        label: 'GitHub repository',
        url: 'https://github.com/MKalpesh115/Analysis_project_e-commers_sales',
      },
      liveDemo: {
        label: 'Live demo',
        url: null,
      },
    },
  ] satisfies PortfolioProject[],
  achievements: [
    {
      title: 'Most Innovative Solution Award',
      context: 'Aurora 2.0 — IIT Dharwad',
      description:
        'Recognized for delivering the most innovative solution among 250+ participants in a national-level hackathon.',
    },
    {
      title: 'Patent Granted',
      context: 'Drone-Based Crop Disease Detection System',
      description:
        'Granted a patent for a CNN-based drone-integrated real-time crop disease detection solution.',
    },
    {
      title: '250+ LeetCode Problems Solved',
      context: 'Data Structures & Algorithms',
      description:
        'Consistently strengthening problem-solving and Data Structures & Algorithms skills through coding practice.',
      link: {
        label: 'View LeetCode profile',
        url: 'https://leetcode.com/u/Kalpesh2864/',
      },
    },
  ] satisfies Achievement[],
  experience: [],
}
