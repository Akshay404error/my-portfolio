/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akshay D's Portfolio",
  description:
    "Backend and ML developer skilled in scalable APIs, cloud deployment, deep learning, and data engineering. Strong interest in automation, resilience, and intelligent systems.",
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
    "Backend and ML developer skilled in scalable APIs, cloud deployment, deep learning, and data engineering. Strong interest in automation, resilience, and intelligent systems.",
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
  {
    name: "Phone",
    link: "tel:+916381505907",
    fontAwesomeIcon: "fa-phone",
    backgroundColor: "#25D366",
  },
];

const skills = {
  data: [
    {
      title: "Backend & ML Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable APIs and backend systems",
        "⚡ Deep learning with CNNs, RNNs, and time series forecasting",
        "⚡ Data engineering and automation",
        "⚡ Cloud deployment (AWS SageMaker, basic Apache Spark)",
        "⚡ SQL optimization and caching for performance",
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python" },
        { skillName: "Java", fontAwesomeClassname: "logos-java" },
        { skillName: "C++", fontAwesomeClassname: "logos-c-plusplus" },
        { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql" },
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow" },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch" },
        { skillName: "Keras", fontAwesomeClassname: "simple-icons:keras" },
        { skillName: "Flask", fontAwesomeClassname: "simple-icons:flask" },
        { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker" },
        { skillName: "Git", fontAwesomeClassname: "fa-git" },
        { skillName: "Jupyter", fontAwesomeClassname: "simple-icons:jupyter" },
        { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi" },
        { skillName: "VS Code", fontAwesomeClassname: "simple-icons:visualstudiocode" },
        { skillName: "AWS SageMaker", fontAwesomeClassname: "simple-icons:amazonaws" },
        { skillName: "Apache Spark", fontAwesomeClassname: "simple-icons:apachespark" },
      ],
    },
    {
      title: "Concepts",
      fileName: "FullStackImg",
      skills: [
        "⚡ Data Structures and Algorithms (DSA)",
        "⚡ Functional Programming",
        "⚡ Pattern Recognition",
      ],
      softwareSkills: [],
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
          title: "Software Dev Intern",
          company: "Blue Stocks",
          company_url: "",
          logo_path: "developerActivity.svg",
          duration: "Jan–Feb 2025",
          location: "",
          description:
            "Built Flask endpoints for ML-based portfolio analysis. Cut latency 30% via caching and SQL optimization.",
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
            "Applied CNN/RNNs on multi-format data; achieved 94% accuracy.",
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
            "Hands-on with supervised/unsupervised ML, AWS deploys, anomaly detection.",
          color: "#ee3c26",
        },
        {
          title: "AICTE ML Internship",
          company: "AICTE",
          company_url: "",
          logo_path: "data_science.svg",
          duration: "Jun 16–Jul 16, 2025",
          location: "",
          description:
            "Completed ML training; deployed models through applied projects.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "Projects in ML, backend, and automation, including patent work and production deployments.",
  avatar_image_path: "",
};

const publicationsHeader = {
  title: "Achievements",
  description: "Competitions and hackathons.",
  avatar_image_path: "",
};

const publications = {
  data: [
    { name: "IBM Global Datathon – Forecasting model" },
    { name: "IIT Bombay Mapthon – Geo prediction tool" },
    { name: "IIT Madras FedEx Challenge – ML optimization" },
    { name: "NHAI Hackathon – Traffic anomaly detector" },
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

const competitiveSites = { competitiveSites: [] };
const certifications = { certifications: [] };

const projects = {
  data: [
    {
      id: "1",
      name: "Portfolio Website",
      url: "https://github.com/Akshay404error/masterPortfolio-master",
      description: "A personal portfolio website to showcase my skills, projects, and achievements. Built with React and deployed on GitHub Pages.",
      languages: ["JavaScript", "React", "CSS"],
    },
    {
      id: "2",
      name: "Geo-Referenced Fish Catch System",
      url: "https://github.com/users/Akshay404error/projects/4",
      description: "Patent No: 202541034285. Time series–based forecasting with Google Maps and REST API integration.",
      languages: ["Python", "REST API", "Google Maps"],
    },
    {
      id: "3",
      name: "Fish Species Classification Model",
      url: "https://github.com/Akshay404error/matsya-project/tree/main/ml%20project/fish%20species%20classfication",
      description: "CNN classifier with weight estimation; deployed via API.",
      languages: ["Python", "TensorFlow", "Keras", "API"],
    },
    {
      id: "4",
      name: "Therom AI",
      url: "https://github.com/Akshay404error/therom-ai",
      description: "Logical proof validation using AI, SAT solving, compiler checks. Mimalloc-based memory-safe engine with CLI + VS Code integration.",
      languages: ["Python", "C++", "AI", "SAT Solver"],
    },
    {
      id: "5",
      name: "Web-Scraping-Automation python library",
      url: "https://github.com/Akshay404error/Web-Scraping-Automation-for-Everyone/tree/main/Web%20Scraping%20Automation%20for%20Everyone",
      description: "Lightweight Web Scraping Automation for Everyone.",
      languages: ["Python"],
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
};
