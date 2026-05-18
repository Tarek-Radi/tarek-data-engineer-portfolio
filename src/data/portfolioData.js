export const profile = {
  name: 'Tarek Mahmoud',
  fullName: 'Tarek Mahmoud Abdelrady',
  role: 'Azure Data Engineer | ETL Pipelines | Data Warehousing | ML Applications',
  headline:
    'I build reliable data pipelines, analytics-ready warehouses, and practical ML applications using Python, SQL, Azure, dbt, Airflow, Docker, and Power BI.',
  about:
    'Communications & Information Engineering student at Helwan University and Azure Data Engineer Intern at the Digital Egypt Pioneers Initiative. I have hands-on experience with ETL/ELT, SQL data warehouses, dbt, Airflow, Docker, Azure Data Factory, Databricks, and practical ML applications, with a focus on building clean, reliable, business-ready data systems.',
  location: 'Cairo, Egypt',
  email: 'noortarak2004@gmail.com',
  portfolioUrl: 'https://tarek-data-engineer-portfolio.vercel.app/',
  resumeHref: '/Tarek_Mahmoud_Resume.pdf',
  availability: 'Open to Azure Data Engineer Intern, Junior Data Engineer, and BI/Data Analyst roles.',
  heroFocus: ['Azure', 'ETL/ELT', 'Data Warehousing', 'dbt', 'Airflow', 'Docker', 'Power BI'],
  heroStats: [
    { title: '5', label: 'portfolio projects', detail: 'Data pipelines, warehouses, analytics, telemetry, and ML apps' },
    { title: '99.71%', label: 'GenderClassy hybrid accuracy', detail: 'Dictionary-first inference with ML fallback' },
    { title: 'Azure', label: 'target platform', detail: 'ADF, Databricks, SQL, orchestration, and reporting-ready data' },
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
      shortLabel: 'linkedin.com/in/tarek-mahmoud-abdelrady',
      icon: 'Linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:noortarak2004@gmail.com',
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
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const aboutHighlights = [
  {
    title: 'Pipeline Mindset',
    description:
      'I think in ingestion, transformation, validation, orchestration, and serving layers so data products stay maintainable.',
  },
  {
    title: 'Warehouse Focus',
    description:
      'I model facts, dimensions, marts, and quality checks around reporting needs instead of treating SQL as a one-off script.',
  },
  {
    title: 'Product-Like Delivery',
    description:
      'I package technical work with clear interfaces, documentation, GitHub repos, demos, and outputs that are easy to review.',
  },
];

export const skills = [
  {
    title: 'Data Engineering',
    icon: 'Workflow',
    items: [
      'ETL/ELT',
      'Data Warehousing',
      'Data Modeling',
      'Star Schema',
      'Medallion Architecture',
      'Data Quality',
      'Orchestration',
    ],
  },
  {
    title: 'Cloud & Databases',
    icon: 'Cloud',
    items: ['Azure Data Factory', 'Azure Databricks', 'Azure SQL', 'SQL Server', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Programming & Analytics',
    icon: 'BarChart3',
    items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib'],
  },
  {
    title: 'Tools',
    icon: 'Database',
    items: ['Docker', 'dbt', 'Apache Airflow', 'Power BI', 'Streamlit', 'Git/GitHub', 'DBeaver', 'SSMS'],
  },
  {
    title: 'ML/Data Science',
    icon: 'Sparkles',
    items: ['Classification', 'Feature Engineering', 'TF-IDF', 'Logistic Regression', 'Model Evaluation'],
  },
];

export const featuredProjects = [
  {
    category: 'Featured ML Application',
    title: 'GenderClassy - Name-Based Gender Prediction App',
    summary:
      'A production-style Streamlit ML web app that enriches names with gender predictions for single, batch, and uploaded file workflows.',
    outcome: '99.71% hybrid accuracy and 99.53% dictionary hit rate using dictionary-first inference with ML fallback.',
    image: '/images/project-genderclassy.svg',
    imageAlt: 'GenderClassy project preview showing app workflow, ML fallback, and export outputs.',
    lightboxCaption:
      'GenderClassy combines Unicode-aware normalization, a high-coverage dictionary layer, and character TF-IDF logistic regression fallback for practical name prediction workflows.',
    stack: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'TF-IDF', 'Logistic Regression'],
    highlights: [
      'Single-name and batch text prediction flows',
      'CSV/Excel upload with downloadable enriched outputs',
      'Unicode-aware normalization for English, Arabic, and accented names',
      'Confidence-based ML fallback after dictionary lookup',
      'Clear Streamlit UI for model status and prediction review',
    ],
    githubUrl: 'https://github.com/Tarek-Radi/Gender-Classy',
    demoUrl: 'https://tarek-radi-gender-classy-app-80hycp.streamlit.app/',
    featured: true,
  },
  {
    category: 'Data Pipeline',
    title: 'E-commerce Data Pipeline',
    summary:
      'An end-to-end data engineering pipeline for the Olist Brazilian e-commerce dataset, from raw CSV ingestion to analytics-ready warehouse models.',
    outcome: 'Turns operational e-commerce files into tested dbt staging, fact, dimension, and KPI models orchestrated with Airflow.',
    image: '/images/project-ecommerce-pipeline.svg',
    imageAlt: 'E-commerce pipeline preview showing CSV ingestion, PostgreSQL, dbt models, Airflow, and analytics marts.',
    lightboxCaption:
      'The e-commerce pipeline uses Docker Compose, PostgreSQL, Python ingestion, dbt transformations, data tests, and Airflow orchestration to deliver analytics-ready models.',
    stack: ['PostgreSQL', 'Python', 'Docker', 'dbt', 'Airflow', 'Pandas', 'SQLAlchemy'],
    highlights: [
      'Raw CSV ingestion into PostgreSQL',
      'dbt staging models plus fact and dimension marts',
      'KPI models and dbt data quality tests',
      'Airflow orchestration with Docker Compose setup',
      'Warehouse design built for analytics consumption',
    ],
    githubUrl: 'https://github.com/Tarek-Radi/E-commerce-Data-Pipeline',
  },
  {
    category: 'Data Warehouse',
    title: 'SQL Server Data Warehouse Project',
    summary:
      'A modern SQL Server warehouse integrating ERP and CRM CSV sources into Bronze, Silver, and Gold layers for reporting.',
    outcome: 'Applies medallion architecture and star schema modeling to produce clean customer, product, and sales analytics tables.',
    image: '/images/project-sql-warehouse.svg',
    imageAlt: 'SQL Server warehouse preview showing Bronze, Silver, Gold, and star schema layers.',
    lightboxCaption:
      'The SQL Server warehouse standardizes ERP and CRM inputs through Bronze, Silver, and Gold layers, then serves reporting-ready customer, product, and sales models.',
    stack: ['SQL Server', 'T-SQL', 'Medallion Architecture', 'Star Schema'],
    highlights: [
      'Bronze, Silver, and Gold medallion architecture',
      'ETL scripts for loading, cleaning, and standardization',
      'Star schema model for business reporting',
      'Customer, product, and sales analytics tables',
    ],
    githubUrl: 'https://github.com/Tarek-Radi/SQL-Data-Wearhouse-Project',
  },
  {
    category: 'SQL Analytics',
    title: 'Solid Waste Data Warehouse',
    summary:
      'A SQL Server data warehouse for solid waste collection analytics, city-level KPIs, and fleet performance insights.',
    outcome: 'Demonstrates warehouse modeling, bulk loading, and OLAP-style SQL for waste volume and operational analysis.',
    image: '/images/project-solid-waste.svg',
    imageAlt: 'Solid waste warehouse preview showing dimensions, fact tables, OLAP queries, and KPI outputs.',
    lightboxCaption:
      'The solid waste warehouse loads collection data with BULK INSERT, organizes facts and dimensions, and analyzes performance with ROLLUP, CUBE, GROUPING SETS, and GROUPING().',
    stack: ['SQL Server', 'T-SQL', 'BULK INSERT', 'ROLLUP', 'CUBE', 'GROUPING SETS'],
    highlights: [
      'Dimension and fact tables for collection analytics',
      'Bulk loading with BULK INSERT',
      'OLAP queries using ROLLUP, CUBE, GROUPING SETS, and GROUPING()',
      'Waste volume, city KPI, and fleet performance analysis',
    ],
    githubUrl: 'https://github.com/Tarek-Radi/solid-waste-data-warehouse',
  },
  {
    category: 'IoT Simulation',
    title: 'Real-Time Car Telemetry Simulation',
    summary:
      'A DEPI team project that simulates realistic car sensor telemetry for downstream IoT and data pipeline scenarios.',
    outcome: 'Produces JSONL telemetry streams from a state-machine driving model designed for pipeline ingestion and testing.',
    image: '/images/project-telemetry.svg',
    imageAlt: 'Car telemetry simulation preview showing sensors, driving states, JSONL stream, and downstream data pipeline.',
    lightboxCaption:
      'The telemetry simulator generates multi-sensor JSONL output from realistic driving states, making it useful as a test source for real-time data engineering workflows.',
    stack: ['Python', 'JSONL', 'IoT Data', 'Docker'],
    highlights: [
      'Multi-sensor telemetry simulation',
      'JSONL stream output for downstream consumption',
      'State-machine model for realistic driving behavior',
      'Designed as a source for data pipeline ingestion',
    ],
    githubUrl: 'https://github.com/MohamedFathi201/LacosteeeTeam-repo',
  },
];

export const experience = [
  {
    period: 'Nov 2025 - Present',
    role: 'Azure Data Engineer Intern',
    context: 'Digital Egypt Pioneers Initiative (DEPI)',
    summary:
      'Building practical data engineering foundations across Python, SQL, Azure services, transformation logic, data quality, and reporting-ready datasets.',
    wins: [
      'Built ETL pipelines and data workflows using Python and SQL.',
      'Applied Azure Data Factory and Databricks in practical data engineering scenarios.',
      'Designed analytics-ready datasets with focus on transformation logic, data quality, and reporting needs.',
    ],
  },
  {
    period: 'Jul 2025 - Aug 2025',
    role: 'Machine Learning Trainee',
    context: 'National Telecommunication Institute (NTI)',
    summary:
      'Completed 120 hours of applied machine learning training focused on practical model building and evaluation.',
    wins: [
      'Completed 120 hours of machine learning training.',
      'Built classification and segmentation models using Pandas, Scikit-learn, and Matplotlib.',
      'Applied preprocessing, feature engineering, model evaluation, and visualization.',
    ],
  },
  {
    period: 'Jul 2024 - Apr 2025',
    role: 'Embedded Systems Trainee',
    context: 'IMT School / CoreTech',
    summary:
      'Built a low-level systems foundation through C programming, AVR microcontrollers, interfacing, debugging, and testing.',
    wins: [
      'Developed embedded applications using C and AVR microcontrollers.',
      'Practiced interfacing, RTOS basics, debugging, and testing.',
      'Strengthened problem solving through hardware-aware software development.',
    ],
  },
];

export const certifications = [
  {
    title: 'Machine Learning Training (120 Hours)',
    issuer: 'NTI & ITIDA',
  },
  {
    title: 'Python & Data Analysis Fundamentals',
    issuer: 'DataCamp',
  },
  {
    title: 'Data Visualization Fundamentals',
    issuer: 'DataCamp',
  },
  {
    title: 'Deep Learning Foundations',
    issuer: 'NVIDIA',
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
    title: 'GitHub',
    value: 'github.com/Tarek-Radi',
    href: 'https://github.com/Tarek-Radi',
    icon: 'Github',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/tarek-mahmoud-abdelrady',
    href: 'https://www.linkedin.com/in/tarek-mahmoud-abdelrady-404884354/',
    icon: 'Linkedin',
  },
  {
    title: 'Portfolio',
    value: 'tarek-data-engineer-portfolio.vercel.app',
    href: 'https://tarek-data-engineer-portfolio.vercel.app/',
    icon: 'ExternalLink',
  },
];
