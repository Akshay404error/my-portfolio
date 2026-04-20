/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akshay D's Portfolio",
  description:
    "AI/ML Engineer with hands-on experience across 4 internships involving end-to-end machine learning pipelines, deep learning models, data preprocessing, backend API development, and scalable cloud deployment.",
  og: {
    title: "Akshay D Portfolio",
    type: "website",
    url: "https://github.com/Akshay404error",
  },
};

//Home Page
const greeting = {
  title: "Akshay D",
  logo_name: "AkshayD",
  nickname: "",
  subTitle:
    "AI/ML Engineer with hands-on experience across 4 internships involving end-to-end machine learning pipelines, deep learning models, data preprocessing, backend API development, and scalable cloud deployment. Skilled in Python, PyTorch, TensorFlow, SQL, and Docker, with strong foundations in computer vision, NLP, LLMs, time-series forecasting, and MLOps workflows.",
  resumeLink:
    "my_resume.pdf", // Updated to point to your resume file
  portfolio_repository: "https://github.com/Akshay404error/my-portfolio",
  githubProfile: "https://github.com/Akshay404error",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Akshay404error",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/akshay-d-363aa4294",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:akshay2005air@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ End-to-end ML pipelines: feature engineering, model training, hyperparameter tuning",
        "⚡ Deep learning with CNNs, RNNs, Transformers, BERT, and LLMs",
        "⚡ Computer vision (OpenCV), NLP, and time-series forecasting",
        "⚡ Recommendation systems and pattern recognition",
        "⚡ Model evaluation: AUC, F1-score, precision, recall",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python" },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow" },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch" },
        { skillName: "Keras", fontAwesomeClassname: "simple-icons:keras" },
        { skillName: "Scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn" },
        { skillName: "Jupyter", fontAwesomeClassname: "simple-icons:jupyter" },
      ],
    },
    {
      title: "MLOps & Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Backend API development with FastAPI, Flask, and microservice architecture",
        "⚡ MLOps workflows: MLflow experiment tracking, model monitoring, CI/CD with GitHub Actions",
        "⚡ Cloud deployment on AWS EC2/S3",
        "⚡ Containerization with Docker and real-time data ingestion/ETL pipelines",
        "⚡ REST APIs, Spark-based data engineering, and SQL optimization",
      ],
      softwareSkills: [
        { skillName: "FastAPI", fontAwesomeClassname: "simple-icons:fastapi" },
        { skillName: "Flask", fontAwesomeClassname: "simple-icons:flask" },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker" },
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws" },
        { skillName: "MLflow", fontAwesomeClassname: "simple-icons:mlflow" },
        { skillName: "GitHub Actions", fontAwesomeClassname: "simple-icons:githubactions" },
        { skillName: "Apache Spark", fontAwesomeClassname: "simple-icons:apachespark" },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql" },
        { skillName: "Git", fontAwesomeClassname: "fa-git" },
      ],
    },
    {
      title: "Languages & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Python, Java, C++, SQL — primary languages for AI/ML and backend work",
        "⚡ Data Structures, Algorithms, and System Design foundations",
        "⚡ Product scaling and microservices architecture",
        "⚡ Power BI for data visualization and business intelligence",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python" },
        { skillName: "Java", fontAwesomeClassname: "logos-java" },
        { skillName: "C++", fontAwesomeClassname: "logos-c-plusplus" },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi" },
        { skillName: "VS Code", fontAwesomeClassname: "simple-icons:visualstudiocode" },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "St. Joseph's College of Engineering",
      subtitle: "B.Tech in AI & ML",
      logo_path: "",
      alt_name: "St. Joseph's College of Engineering",
      duration: "2023–2027",
      descriptions: [
        "Pursuing B.Tech in Artificial Intelligence & Machine Learning."
      ],
      website_link: "",
    },
    {
      title: "Vision PU College",
      subtitle: "PCM + Biology",
      logo_path: "",
      alt_name: "Vision PU College",
      duration: "2021–2023",
      descriptions: [
        "Core: 86.25%, Total: 77%"
      ],
      website_link: "",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Internships and Training",
  description:
    "Backend and ML developer with hands-on experience in scalable APIs, ML model deployment, and data engineering.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "CEO",
          company: "Matsya N",
          company_url: "https://matsyan.co.in",
          logo_path: "developerActivity.svg",
          duration: "Mar 2024 – Present",
          location: "",
          description:
            "Leading Matsya N as CEO — overseeing product strategy, technology development, and team operations. Driving innovation in marine-tech AI solutions.",
          color: "#0077B5",
        },
        {
          title: "Software Dev Intern",
          company: "Blue Stocks",
          company_url: "",
          logo_path: "developerActivity.svg",
          duration: "Jan–Feb 2025",
          location: "",
          description:
            "Developed RESTful backend APIs and optimized analytics pipelines, improving response time and scalability. Integrated ML-driven data workflows using Python, SQL, and microservice architecture. Implemented error handling, logging, and modular code structure for production reliability.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI Intern",
          company: "CodSoft",
          company_url: "",
          logo_path: "developerActivity.svg",
          duration: "Dec 2024–Jan 2025",
          location: "",
          description:
            "Built supervised learning models using scikit-learn and TensorFlow for product feature enhancement. Designed ML prototypes aligned with UX and business requirements, improving model accuracy through feature engineering. Improved preprocessing pipelines using NumPy, Pandas, and automated evaluation metrics (AUC, F1-score).",
          color: "#0071C5",
        },
        {
          title: "Industrial ML Training",
          company: "Eduversity",
          company_url: "",
          logo_path: "education.svg",
          duration: "Jan–Mar 2025",
          location: "",
          description:
            "Collaborated on industry-grade ML deployment workflows using FastAPI and Docker. Developed real-time data ingestion and ETL components for model-driven applications.",
          color: "#ee3c26",
        },
        {
          title: "AICTE ML Internship",
          company: "AICTE",
          company_url: "",
          logo_path: "data_science.svg",
          duration: "Jun–Jul 2024",
          location: "",
          description:
            "Conducted exploratory data analysis (EDA), feature extraction, and model experimentation. Implemented predictive modeling workflows and evaluated performance using precision, recall, and F1-score.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects & Patents",
  description:
    "Production-grade ML, backend, and automation projects — including 4 patent-pending innovations in AI, OCR, network forensics, and intelligent automation.",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Achievements & Publications",
  description: "National-level hackathon wins, top placements in competitions, and a Springer Nature publication on automation tooling.",
  avatar_image_path: "",
};

const publications = {
  data: [
    { name: "IBM Global Datathon – Forecasting model integrated into business analytics product" },
    { name: "Hackindia by SingularityNET – Built decentralized NFT marketplace prototype" },
    { name: "NHAI Hackathon – Designed traffic anomaly detection ML prototype" },
    { name: "Microsoft Code Bharath – Top 100 out of 11,000 teams" },
    { name: "1st Place at Recursia – Built AI/ML innovation prototype" },
    { name: "Springer Nature Publication – Advance Automation Tool For Web Scraping, Web Testing and Intelligent Bot Creation" },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "",
    description:
      "Bangalore – 562114 | +91-6381505907 | akshay2005air@gmail.com",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bangalore – 562114",
    locality: "Bangalore",
    country: "India",
    region: "Karnataka",
    postalCode: "562114",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91-6381505907",
  },
};

const patents = {
  header: {
    title: "Patents",
    description: "Patent-pending innovations filed with the Indian Patent Office, spanning AI, automation, and intelligent systems.",
  },
  data: [
    {
      title: "Geo-Referenced Fish Catch System",
      applicationNo: "202541034285",
      description: "Time-series forecasting integrated with Google Maps API for geo-referenced fish catch prediction and marine resource management.",
      file: "patents/202541034285.pdf",
      type: "pdf",
    },
    {
      title: "Automation Hub",
      applicationNo: "202541089343",
      description: "Intelligent automation platform for web testing, scraping, and bot workflows with modular pipeline architecture.",
      file: "patents/202541089343.pdf",
      type: "pdf",
    },
    {
      title: "Therom AI",
      applicationNo: "202541089346",
      description: "Automated logical proof validation using SAT solver with VS Code plugin integration and memory-safe engine.",
      file: "patents/202541089346.pdf",
      type: "pdf",
    },
    {
      title: "AI-Powered Test Case Generator",
      applicationNo: "202641013759",
      description: "LLM-based automated test case generation from user stories, streamlining QA workflows in software development.",
      file: "patents/202641013759.jpg",
      type: "jpg",
    },
  ],
};

const competitiveSites = { competitiveSites: [] };
const certifications = { certifications: [] };

const projects = {
  data: [
    {
      id: "1",
      name: "AutoScrap Python Library",
      url: "https://github.com/Akshay404error/Web-Scraping-Automation-for-Everyone/blob/main/Web%20Scraping%20Automation%20for%20Everyone/README.md",
      description: "Production-ready automation library enabling high-speed web scraping with modular architecture. Published as an open-source Python package.",
      languages: ["Python", "Automation", "Web Scraping"],
    },
    {
      id: "2",
      name: "matocr8d",
      url: "https://github.com/Akshay404error/openmarine8d",
      description: "Simple and easy-to-use OCR (Optical Character Recognition) library for Python that leverages the Tesseract OCR engine for text extraction from images.",
      languages: ["Python", "OCR", "Tesseract"],
    },
    {
      id: "3",
      name: "TorTrace-AI",
      url: "https://github.com/Akshay404error/TOR-BIMBO/tree/main/TorTrace-AI-main",
      description: "Multi-Layer Tor Network Attribution System — Advanced AI-powered network forensics for identifying probable Tor entry (guard) nodes using statistical correlation, deep learning, and graph neural networks.",
      languages: ["Python", "Deep Learning", "GNN", "Network Forensics"],
    },
    {
      id: "4",
      name: "Geo-Referenced Fish Catch System",
      url: "https://github.com/users/Akshay404error/projects/4",
      description: "Patent No: 202541034285. Time-series forecasting integrated with Google Maps API for geo-referenced fish catch prediction and visualization.",
      languages: ["Python", "REST API", "Google Maps", "Time-Series"],
    },
    {
      id: "5",
      name: "Therom AI",
      url: "https://github.com/Akshay404error/therom-ai",
      description: "Patent No: 202541089346. Automated logical proof validation using SAT solver and VS Code plugin. Memory-safe engine with CLI + VS Code integration.",
      languages: ["Python", "C++", "SAT Solver", "VS Code Extension"],
    },
    {
      id: "6",
      name: "Automation Hub",
      url: "https://github.com/Akshay404error",
      description: "Patent No: 202541089343. Intelligent automation platform for web testing, scraping, and bot workflows.",
      languages: ["Python", "Automation", "Web Testing", "Bots"],
    },
    {
      id: "7",
      name: "AI-Powered Test Case Generator",
      url: "https://github.com/Akshay404error",
      description: "Patent No: 202641013759. LLM-based automated test case generation from user stories, streamlining QA workflows.",
      languages: ["Python", "LLM", "NLP", "Test Automation"],
    },
    {
      id: "8",
      name: "Portfolio Website",
      url: "https://github.com/Akshay404error/masterPortfolio-master",
      description: "Personal portfolio website showcasing skills, projects, patents, and achievements. Built with React and deployed on GitHub Pages.",
      languages: ["JavaScript", "React", "CSS"],
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  projects,
  patents,
};
