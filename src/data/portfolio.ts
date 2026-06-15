export interface Project {
  title: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  image: string;
  icon: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  period: string;
  school: string;
  gpa: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "Syed Abrar Fiaz",
  title: "AI & Backend Engineer",
  subtitle: "Architect of Shadows",
  email: "abrarfiaz12@gmail.com",
  github: "https://github.com/2bsyed",
  linkedin: "https://linkedin.com/in/2bsyed",
  location: "Dhaka, Bangladesh",
  quote: {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  bio: [
    "Python backend and AI/ML engineer focused on building intelligent, scalable systems.",
    "I thrive in the darkness of the backend, orchestrating complex logic, optimizing databases, and deploying machine learning models that breathe life into applications.",
    "My approach combines rigorous software engineering principles with avant-garde AI techniques to solve problems that matter."
  ]
};

export const skills: SkillCategory[] = [
  {
    category: "Core Backend",
    items: ["Python", "FastAPI", "PostgreSQL", "Docker", "Async APIs", "Microservices", "SQLAlchemy", "asyncpg"]
  },
  {
    category: "AI / ML",
    items: ["LangChain", "Ollama", "RAG", "MCP", "CatBoost", "XGBoost", "scikit-learn", "Sentence Transformers", "SHAP / XAI", "Autoencoders", "Anomaly Detection"]
  },
  {
    category: "Frontend",
    items: ["TypeScript", "Next.js", "React", "Flutter", "Dart", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "pgvector", "MySQL", "Firebase", "Hive", "Docker Compose", "Coolify", "Nginx", "Linux", "CI/CD", "OAuth 2.0"]
  }
];

export const experiences: Experience[] = [
  {
    period: "2026 — Present",
    role: "AI / Backend Engineer Intern",
    company: "FlyRank",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Assisting in the development of AI orchestration pipelines and API wrappers.",
      "Optimizing query flows and model inferences for backend microservices.",
      "Collaborating on full-stack Next.js and FastAPI features in a modern containerized environment."
    ]
  },
  {
    period: "2024 — 2026",
    role: "AI / Backend Engineer",
    company: "Daffodil Software Ltd",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Led end-to-end build of AI-Mentor — a production multi-tenant SaaS used by multiple universities, featuring SGPA prediction, career path mapping, and 9-box talent evaluation.",
      "Designed an MCP orchestration pipeline (entity resolution → intent detection → tool execution) running phi3:mini on-prem via Ollama for zero cloud API dependency.",
      "Shipped 4 FastAPI microservices backed by CatBoost & scikit-learn models; served via async PostgreSQL + pgvector for semantic search, cutting latency.",
      "Implemented path-based multi-tenancy with Next.js, Better Auth (OAuth 2.0), Drizzle ORM, Tailwind, and shadcn/ui; containerized with Docker and deployed via Coolify on Ubuntu."
    ]
  }
];

export const educationList: Education[] = [
  {
    degree: "BSc in Computer Science & Engineering",
    period: "May 2022 – May 2026",
    school: "Daffodil International University",
    gpa: "CGPA: 3.59 / 4.00",
    details: ["Section Representative CSE Dept (All 4 years)", "Take Off Programming Competition (Ranked 11th & Section Champion)", "Unlock the Algorithm Programming Competition (Ranked 15th)"]
  }
];

export const projectsList: Project[] = [
  {
    title: "AI-Mentor — Multi-Tenant SaaS Portal",
    technologies: ["FastAPI", "Next.js", "Ollama", "pgvector", "Better Auth", "Drizzle ORM"],
    description: "A production multi-tenant educational SaaS platform deployed across multiple universities. Features an LLM-powered mentoring chatbot, dynamic subject recommendation, SGPA prediction, and 9-box talent evaluation grids.",
    githubUrl: "https://github.com/2bsyed",
    image: "/ai-mentor.jpg",
    icon: "school"
  },
  {
    title: "AI-Driven Network Anomaly Detection",
    technologies: ["Python", "Autoencoder", "XGBoost", "scikit-learn", "SHAP", "XAI"],
    description: "My Final Year Project (FYDP). Proposed a hybrid Autoencoder-XGBoost intrusion detection system for resource-constrained edge networks. Achieved a 96.44% F1-score and 99.35% AUC-ROC on CSE-CIC-IDS2018 at only 18 MB peak RAM.",
    githubUrl: "https://github.com/2bsyed",
    image: "/ai-mentor.jpg",
    icon: "network_intelligence"
  },
  {
    title: "Azan — Islamic Personal Assistant",
    technologies: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Hive", "Geolocator"],
    description: "Bilingual (EN/BN) production mobile application with GPS prayer times, Qibla compass with magnetometer tilt compensation, offline-first caching via Hive, and Firebase sync for cross-device support.",
    githubUrl: "https://github.com/2bsyed/Azan",
    image: "/azan.jpg",
    icon: "record_voice_over"
  },
  {
    title: "EduFlow — SaaS Coaching Platform",
    technologies: ["PHP", "MySQL", "MVC Architecture", "SaaS", "Multi-tenant"],
    description: "Full-stack multi-tenant coaching management SaaS built from scratch without external frameworks. Manages student enrollment, batch scheduling, attendance, payment processing, and administrative analytics.",
    githubUrl: "https://github.com/2bsyed/EduFlow",
    image: "/edu-flow.jpg",
    icon: "school"
  },
  {
    title: "solar-ufo — 2D Graphics Engine",
    technologies: ["C++", "OpenGL", "GLUT", "Physics Simulation", "Systems Programming"],
    description: "A 5,100+ line C++ 2D graphics and rendering engine implementing Bresenham's, DDA, and Midpoint Circle algorithms, complete with gravity-simulating orbital physics, collision detection, and custom game loop.",
    githubUrl: "https://github.com/2bsyed",
    image: "/solar-ufo.jpg",
    icon: "rocket"
  },
  {
    title: "DIU Transport — Smart Transit Tracker",
    technologies: ["TypeScript", "Next.js", "React", "REST APIs", "Nginx"],
    description: "A smart real-time bus booking and route tracking application serving the student body of Daffodil International University. Integrated interactive schedules, GPS location overlays, and digital boarding passes.",
    githubUrl: "https://github.com/2bsyed",
    image: "/diu-transport.jpg",
    icon: "directions_bus"
  }
];
