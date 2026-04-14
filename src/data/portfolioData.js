// Replace the placeholder profile links, contact details, certifications, and
// experience records with Tarek's final verified information before deployment.

export const profile = {
  name: 'Tarek Mahmoud Abdelrady',
  headlineMain: 'Azure Data Engineer',
  headlineSub: '| Designing scalable data pipelines & cloud data solutions',
  about:
    'I am Tarek Mahmoud Abdelrady, a Communication & Information Engineering student at Capital University (Helwan), Class of 2027, focused on data engineering and analytics after starting in machine learning; I build scalable data pipelines using Python, SQL, Azure, and Databricks, with a strong interest in cloud technologies and hands-on experience with Linux, transforming raw data into clean, reliable, and business-ready insights that support data-driven decision making.',
  location: 'Cairo, Egypt',
  email: 'noortarak2004@gmail.com',
  availability:
    'Open to full-time roles, consulting engagements, and cloud data modernization projects.',
  introHighlights: [
    'Azure-native data engineering and orchestration',
    'Databricks workflows for scalable transformation',
    'Business-ready Power BI storytelling and KPI design',
  ],
  heroBullets: [
    'Lakehouse-minded architecture decisions',
    'Reliable ETL orchestration with monitoring in place',
    'Analytics layers built for executive adoption',
  ],
  heroStats: [
    { title: 'Azure-first', subtitle: 'Orchestration, storage, transformation, and serving layers' },
    { title: 'ETL pipelines', subtitle: 'Batch and scalable workflows designed for clarity and control' },
    { title: 'Insight delivery', subtitle: 'Power BI dashboards aligned to real business questions' },
  ],
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/Tarek-Radi',
      shortLabel: 'github.com/Tarek-Radi',
      icon: 'Github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tarek-mahmoud-abdelrady-404884354/',
      shortLabel: 'www.linkedin.com/in/tarek-mahmoud-abdelrady-404884354',
      icon: 'Linkedin',
    },
    {
      label: 'Email',
      href: 'noortarak2004@gmail.com',
      shortLabel: 'noortarak2004@gmail.com',
      icon: 'Mail',
    },
  ],
};

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'dashboards', label: 'Dashboards' },
  { id: 'tools', label: 'Tools' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const aboutHighlights = [
  {
    title: 'Data Platform Thinking',
    description:
      'I design architectures that keep ingestion, transformation, governance, and consumption aligned from the start.',
  },
  {
    title: 'Analytics That Get Used',
    description:
      'Every dashboard and mart is shaped around the questions decision makers actually need answered.',
  },
  {
    title: 'Delivery With Reliability',
    description:
      'I focus on observability, parameterization, and documentation so solutions stay maintainable after launch.',
  },
];

export const skills = [
  {
    title: 'Azure Data Engineering',
    icon: 'Cloud',
    description:
      'Building cloud data pipelines and storage patterns that scale cleanly across ingestion, transformation, and serving layers.',
    items: ['Azure Data Factory', 'Synapse-ready modeling', 'Azure Data Lake'],
  },
  {
    title: 'Databricks Workloads',
    icon: 'Sparkles',
    description:
      'Using notebooks and structured transformations to process and refine data for downstream analytics and governance.',
    items: ['PySpark-ready workflows', 'Delta-oriented processing', 'Notebook modularization'],
  },
  {
    title: 'SQL & Data Modeling',
    icon: 'Database',
    description:
      'Designing clean schema patterns, optimized transformations, and business-friendly marts for reporting use cases.',
    items: ['T-SQL and SQL optimization', 'Dimensional modeling', 'Data quality checks'],
  },
  {
    title: 'BI & Storytelling',
    icon: 'LayoutDashboard',
    description:
      'Translating operational and strategic requirements into dashboard experiences that are easy to explore and trust.',
    items: ['Power BI', 'DAX measures', 'Executive KPI design'],
  },
  {
    title: 'Pipeline Orchestration',
    icon: 'Workflow',
    description:
      'Creating parameterized ETL workflows with monitoring, retry patterns, and handoff steps that reduce manual effort.',
    items: ['Scheduling and triggers', 'Incremental load patterns', 'Operational alerts'],
  },
  {
    title: 'Governance & Quality',
    icon: 'ShieldCheck',
    description:
      'Embedding validation and consistency checks into data products so teams can consume trusted outputs with confidence.',
    items: ['Validation checkpoints', 'Source-to-target logic', 'Documentation discipline'],
  },
];

export const featuredProjects = [
  {
    category: 'Wearhouse Architecture',
    title: 'Modern Data Warehouse (Medallion Architecture)',
    summary:
      'Built a scalable data warehouse using SQL Server following the Medallion Architecture (Bronze, Silver, Gold), transforming raw ERP and CRM data into business-ready insights.',
    outcome:
      'Delivered a scalable, governed data platform that enables reliable reporting, reusable data transformations, and consistent, business-ready insights.',
    image: '/images/data_architecture.png',
    imageAlt: 'Visual overview of a lakehouse architecture with bronze, silver, and gold layers.',
    lightboxCaption:
      'A conceptual showcase of a medallion-based Azure lakehouse, highlighting raw-to-curated data flow, quality checkpoints, and business-ready serving models.',
    stack: ['Azure Data Lake', 'Databricks', 'Azure Synapse Analytics', 'Python', 'SQL', 'Data Warehouse Modeling'],
    highlights: [
      'Bronze, Silver, and Gold data zoning',
      'Reusable transformation notebooks',
      'Business-ready marts for finance and operations',
    ],
  },
  {
    category: 'Data Warehouse',
    title: 'Solid Waste Analytics Data Warehouse',
    summary:
      'Replaced fragmented SQL jobs and spreadsheet handoffs with parameterized Azure Data Factory pipelines for ingestion, cleansing, and delivery to curated layers.',
    outcome:
      'Delivered a structured analytics layer using OLAP functions, enabling deep operational insights and flexible multi-level reporting.',
    image: '/images/Star_schema.png',
    imageAlt: 'Illustration of Azure Data Factory pipelines orchestrating multiple data sources into curated outputs.',
    lightboxCaption:
      'This screenshot-style concept shows centralized orchestration with parameterized pipeline stages, monitoring checkpoints, and delivery into analytics-ready tables.',
    stack: ['SQL Server', 'OLAP (ROLLUP, CUBE, GROUPING SETS)', 'Star Schema', 'ETL Pipelines', 'Analytical SQL'],
    highlights: [
      'Implemented Medallion Architecture (Bronze, Silver, Gold)',
      'Built analytical models using Star Schema design',
      'Used advanced OLAP functions (ROLLUP, CUBE, GROUPING SETS)',
    ],
  },
  {
    category: 'Power BI Delivery',
    title: 'Executive BI Command Center',
    summary:
      'Designed a Power BI experience for leadership visibility across sales, operations, and margin KPIs, backed by a well-modeled semantic layer.',
    outcome:
      'Turned scattered reporting into a polished executive dashboard narrative with clearer definitions and faster insight discovery.',
    image: '/images/project-bi-dashboard.svg',
    imageAlt: 'Dark-themed dashboard composition with key performance indicators, trends, and insight cards.',
    lightboxCaption:
      'A high-level Power BI concept focused on KPI storytelling, trend visibility, and drill-ready summary cards for executive consumption.',
    stack: ['Power BI', 'DAX', 'SQL', 'Dimensional Modeling', 'Stakeholder Design'],
    highlights: [
      'Star-schema aligned reporting layer',
      'KPI storytelling for leadership teams',
      'Row-level security and drill-friendly navigation',
    ],
  },
];

export const etlPipelines = [
  {
    title: 'Retail Sales Consolidation',
    source: 'POS systems, online orders, and inventory extracts',
    transform: 'ADF orchestration with Python cleansing and SQL shaping',
    deliver: 'Curated sales models and daily KPI feeds for reporting teams',
    notes: [
      'Incremental ingestion to minimize reload time',
      'Validation steps before curated publishing',
      'Reusable patterns for branch and channel onboarding',
    ],
  },
  {
    title: 'Finance Reconciliation Flow',
    source: 'ERP exports, bank files, and general ledger snapshots',
    transform: 'Rule-driven harmonization and exception handling logic',
    deliver: 'Reconciliation-ready datasets for audit and finance reporting',
    notes: [
      'Source-to-target checks to flag mismatches early',
      'Clean exception paths for review workflows',
      'Aligned outputs for recurring month-end processes',
    ],
  },
  {
    title: 'Operational Telemetry Processing',
    source: 'Machine logs, sensor events, and maintenance records',
    transform: 'Databricks transformations with aggregation and enrichment',
    deliver: 'Operational performance tables and reliability dashboard feeds',
    notes: [
      'Structured data refinement for trend analysis',
      'Standardized event categories and asset-level views',
      'Prepared datasets for SLA and maintenance monitoring',
    ],
  },
];

export const dashboards = [
  {
    title: 'Leadership KPI Hub',
    icon: 'BarChart3',
    description:
      'A polished executive view bringing together revenue, target attainment, and operational performance into one decision-ready story.',
    signals: ['Cross-functional KPI summary', 'Trend variance analysis', 'Executive drill paths'],
  },
  {
    title: 'Supply Chain Visibility',
    icon: 'Activity',
    description:
      'Operational dashboarding focused on throughput, delays, and process bottlenecks so teams can spot issues early and act faster.',
    signals: ['Order fulfillment trends', 'Cycle time bottlenecks', 'SLA performance views'],
  },
  {
    title: 'Margin & Forecast Analysis',
    icon: 'TrendingUp',
    description:
      'Finance-facing dashboard design for comparing actuals, margins, and plan scenarios with cleaner category and period navigation.',
    signals: ['Margin mix by segment', 'Actual versus plan tracking', 'Variance commentary support'],
  },
];

export const toolGroups = [
  {
    title: 'Cloud & Storage',
    items: ['Azure Data Factory', 'Synapse Analytics', 'Azure Data Lake', 'Azure SQL Database', 'Azure Key Vault'],
  },
  {
    title: 'Transformation',
    items: ['Databricks', 'Python', 'SQL', 'Delta-oriented processing', 'Reusable notebook design'],
  },
  {
    title: 'Analytics & BI',
    items: ['Power BI', 'DAX', 'Power Query', 'Executive dashboards', 'Semantic layer modeling'],
  },
  {
    title: 'Delivery Practices',
    items: ['ETL pipelines', 'Monitoring patterns', 'Documentation', 'Data validation', 'Git-based collaboration'],
  },
];

export const experience = [
  {
    period: 'Nov 2025 - Present',
    role: 'Azure Data Engineering Intern',
    context: 'Digital Egypt Pioneers Initiative (DEPI) · Hybrid',
    summary:
      'Participating in DEPI as a Data Engineering Intern, gaining hands-on experience with data pipelines, ETL workflows, databases, and analytics-oriented data processing using Python and SQL.',
    wins: [
      'Worked on practical ETL and data transformation workflows',
      'Built and optimized data pipelines for reporting and analytics',
      'Strengthened cloud and data engineering foundations in a hybrid learning environment',
    ],
  },
  {
    period: 'Jul 2025 - Aug 2025',
    role: 'Machine Learning Trainee',
    context: 'National Telecommunication Institute (NTI) · Remote',
    summary:
      'Completed an intensive 120-hour Machine Learning training program covering data preprocessing, visualization, supervised and unsupervised learning, model evaluation, and introductory deep learning.',
    wins: [
      'Built practical Kaggle projects using real-world datasets',
      'Worked with Python, Pandas, Scikit-learn, and Matplotlib',
      'Scored 91.5% and strengthened applied machine learning foundations',
    ],
  },
  {
    period: 'Jul 2024 - Apr 2025',
    role: 'Embedded Systems Trainee (AVR Track)',
    context: 'IMT School · On-site',
    summary:
      'Completed a 144-hour Embedded Systems diploma focused on AVR microcontrollers, Embedded C, interfacing, RTOS fundamentals, testing, and low-level problem solving.',
    wins: [
      'Developed hands-on experience in Embedded C and AVR programming',
      'Learned hardware interfacing, debugging, and real-time concepts',
      'Built a strong low-level systems background that improved technical problem solving',
    ],
  },
  {
    period: 'Sep 2022 - Present',
    role: 'Communication & Information Engineering Student',
    context: 'Faculty of Engineering - Helwan University · On-site',
    summary:
      'Currently pursuing a Bachelor of Engineering in Communication and Information Engineering, building strong foundations in communication systems, networking, digital technologies, and information processing.',
    wins: [
      'Built a solid academic foundation in engineering and information systems',
      'Developed teamwork, analytical thinking, and technical problem-solving skills',
      'Applied coursework knowledge through practical projects and technical learning paths',
    ],
  },
];
export const certifications = [
  {
    title: 'Machine Learning Training (120 Hours)',
    issuer: 'NTI & ITIDA',
    detail:
      'Completed an intensive 120-hour machine learning program covering data preprocessing, supervised and unsupervised learning, model evaluation, and real-world projects using Python (Scored 91.5%).',
  },
  {
    title: 'Python & Data Analysis Fundamentals',
    issuer: 'DataCamp',
    detail:
      'Strong foundation in Python, data manipulation, and analysis using pandas, including cleaning, transforming, and preparing real-world datasets for analytics.',
  },
  {
    title: 'Data Visualization Fundamentals',
    issuer: 'DataCamp',
    detail:
      'Learned to communicate insights effectively through data visualization using Seaborn and Python.',
  },
  {
    title: 'Deep Learning Foundations',
    issuer: 'NVIDIA',
    detail:
      'Introduction to deep learning concepts, neural networks, and practical AI applications.',
  },
  {
    title: 'IoT & Systems Foundations',
    issuer: 'Sector B5',
    detail:
      'Gained foundational knowledge in IoT architecture, networking basics, and real-world system integration concepts.',
  },
  {
    title: 'Professional Skills in a Digital World',
    issuer: 'IBM',
    detail:
      'Developed essential professional skills including communication, teamwork, and working in modern digital environments.',
  },
];

export const contactCards = [
  {
    title: 'Email',
    value: 'noortarak2004@gmail.com',
    href: 'mailto:noortarak2004@gmail.com',
    icon: 'Mail',
  },
  {
    title: 'Location',
    value: 'Cairo, Egypt',
    href: 'https://maps.google.com/?q=Cairo,Egypt',
    icon: 'MapPin',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/tarek-abdelrady',
    href: 'https://www.linkedin.com/in/tarek-mahmoud-abdelrady-404884354/',
    icon: 'Linkedin',
  },
];
