export const projects = [
  {
    slug: "ai-mentor",
    title: "AI-Mentor",
    eyebrow: "MULTI-TENANT ACADEMIC SAAS · 2025–2026",
    summary: "Academic SaaS for guidance, prediction, and AI mentoring.",
    image: "/ai-mentor-reference.jpg",
    alt: "Blue pixel artwork for the AI-Mentor case study, cropped from the supplied portfolio reference",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Ollama", "Next.js", "Docker", "MCP"],
    sections: [
      ["Overview", "AI-Mentor is a multi-tenant academic SaaS built to bring academic guidance and student support workflows together."],
      ["What I built", "The platform combines SGPA prediction, career mapping, 9-box talent evaluation, and an LLM-powered mentoring chatbot. I implemented four ML-backed FastAPI microservices and MCP orchestration."],
      ["Retrieval and deployment", "RAG semantic search uses PostgreSQL and pgvector. The containerized platform was deployed on Ubuntu and integrates Ollama for language-model workflows."],
      ["Engineering notes", "The work involved coordinating tenant-aware data, API boundaries, model services, and retrieval workflows. No user, adoption, or business outcome metrics are claimed here."],
    ],
  },
  {
    slug: "network-anomaly-detection",
    title: "AI-Driven Network Anomaly Detection",
    eyebrow: "FINAL YEAR THESIS · 2025–2026",
    summary: "Hybrid ML intrusion detection evaluated on public datasets.",
    image: "/network-research.svg",
    alt: "Electric blue pixel network map with a shield for anomaly detection research",
    stack: ["Python", "Autoencoder", "XGBoost", "scikit-learn", "SHAP"],
    sections: [
      ["Overview", "This final-year thesis explored a hybrid Autoencoder–XGBoost system for network intrusion detection using the CSE-CIC-IDS2018 dataset."],
      ["Reported results", "The CV reports a 96.44% F1-score and 99.35% AUC-ROC, with 18 MB peak RAM and no GPU. These are project-reported results, not an independent validation or a guarantee of performance on other networks."],
      ["Evaluation and explainability", "The approach was cross-validated on CIC-IDS-2017. SHAP was used to examine feature contributions and support explainable analysis."],
      ["Limitations", "The reported metrics describe the tested datasets and methodology. They should not be generalized to live deployments without additional evaluation."],
    ],
  },
  {
    slug: "eduflow",
    title: "EduFlow",
    eyebrow: "SAAS COACHING MANAGEMENT · 2026",
    summary: "Coaching workflows for enrolment, attendance, fees, and administration.",
    image: "/edu-flow-reference.jpg",
    alt: "Blue pixel artwork for the EduFlow case study, cropped from the supplied portfolio reference",
    stack: ["PHP", "MySQL", "MVC", "Multi-tenancy"],
    sections: [
      ["Overview", "EduFlow is a coaching-management platform designed and built from scratch around everyday academic administration workflows."],
      ["Product scope", "The platform covers enrolment, batch management, attendance, fee processing, and administrative workflows."],
      ["Architecture", "I used PHP and MySQL with a custom MVC architecture and multi-tenant data separation. No customer counts, payment-provider integrations, or adoption claims are made."],
    ],
  },
] as const;

export const experience = [
  { role: "Back-End AI Engineering Intern", organization: "FlyRank AI", dates: "July 2026 – Present", location: "Remote", description: "Selected for the July 2026 Backend AI Engineering track, focused on backend systems and AI-powered product features. Onboarding and track assignments are in progress.", tags: ["Backend systems", "API development", "AI / LLM integration"] },
  { role: "Full-Stack Engineer Intern", organization: "BooleanForce", dates: "August 2026 – October 2026", location: "", description: "Developed Django backend APIs and services for NeaPure, a production application combining a MERN frontend with a Django backend. Built an LLM-powered chatbot for product workflows and collaborated with frontend and product engineers on end-to-end features.", tags: ["Django", "Backend APIs", "LLM chatbot"] },
  { role: "Back-End AI Engineer", organization: "DIU Student Projects · Daffodil International University", dates: "July 2025 – 2026", location: "Ashulia, Dhaka", description: "Architected a multi-tenant SaaS backend, built four ML microservices, and deployed an on-premises MCP-orchestrated chatbot pipeline.", tags: ["SaaS", "ML microservices", "MCP"] },
] as const;

export const education = [
  { institution: "Daffodil International University", qualification: "B.Sc. in Computer Science & Engineering", dates: "2020 – 2026", result: "CGPA 3.59 / 4.00", location: "Ashulia, Dhaka" },
  { institution: "Govt. Sundarban Adarsha College", qualification: "Higher Secondary Certificate · Jashore Board", dates: "2018 – 2020", result: "GPA 5.00 / 5.00", location: "" },
  { institution: "Khulna Zila School", qualification: "Secondary School Certificate · Jashore Board", dates: "2010 – 2018", result: "GPA 5.00 / 5.00", location: "" },
] as const;

export const skillGroups = [
  { name: "Languages", values: "Python · Java · C++ · JavaScript / TypeScript · SQL" },
  { name: "Frameworks", values: "FastAPI · Django · React · Next.js" },
  { name: "Databases", values: "PostgreSQL · MySQL · pgvector" },
  { name: "Developer tools", values: "Git · Docker · Linux · Nginx" },
  { name: "Libraries & AI", values: "SQLAlchemy · Pydantic · scikit-learn · CatBoost · XGBoost · SHAP · LangChain · RAG · MCP · Ollama · LLM API integration" },
] as const;

export const services = [
  { title: "SaaS development", summary: "Multi-tenant products, dashboards, data models, backend services, and integrations.", includes: ["Product and workflow discovery", "Tenant-aware data and API design", "Web product interfaces", "Integration and deployment planning"], examples: "AI-Mentor and EduFlow are relevant examples of multi-tenant product work." },
  { title: "Full-stack web development", summary: "Business websites and web applications with clear interfaces and maintainable application structure.", includes: ["Responsive website and application builds", "React and Next.js interfaces", "Accessible navigation and forms", "Content and technical SEO foundations"], examples: "The portfolio itself is built with Next.js; project examples include AI-Mentor and EduFlow." },
  { title: "Backend and API engineering", summary: "Backend services, REST APIs, data models, and workflow logic using Python frameworks.", includes: ["FastAPI or Django services", "API and data-model design", "Database integration", "Service boundaries and operational setup"], examples: "Relevant experience includes Django APIs at BooleanForce and FastAPI microservices in DIU projects." },
  { title: "AI and LLM integration", summary: "Practical AI features integrated into real application workflows, with attention to retrieval and system boundaries.", includes: ["LLM-powered application features", "RAG and semantic retrieval", "Model API integration", "ML-backed service integration"], examples: "AI-Mentor includes a mentoring chatbot, RAG retrieval, and ML-backed services." },
  { title: "Website and system improvement", summary: "Carefully scoped improvements to existing websites and software systems.", includes: ["Responsive layout fixes", "Performance and maintainability review", "Technical SEO foundations", "Backend and workflow improvements"], examples: "Scope, timeline, and expected outcomes are agreed after reviewing the existing system." },
] as const;

export const sitePages: Record<string, { title: string; description: string; eyebrow: string }> = {
  work: { title: "Selected work", description: "Verified software projects by Syed Abrar Fiaz, including AI-Mentor, a network anomaly detection thesis, and EduFlow.", eyebrow: "PROJECTS / CASE STUDIES" },
  services: { title: "Software engineering services", description: "SaaS, web, backend, API, AI integration, and website improvement services offered by Syed Abrar Fiaz.", eyebrow: "WAYS I CAN HELP" },
  experience: { title: "Experience", description: "Professional and student-project experience in backend engineering, full-stack development, and AI systems.", eyebrow: "WORK / EDUCATION" },
  research: { title: "Research", description: "A thesis project exploring hybrid machine-learning methods for network anomaly detection.", eyebrow: "RESEARCH / EXPERIMENTS" },
  about: { title: "About Syed Abrar Fiaz", description: "Profile, education, and extracurricular interests of software engineer Syed Abrar Fiaz in Dhaka, Bangladesh.", eyebrow: "PROFILE / BACKGROUND" },
  stack: { title: "Technical stack", description: "Programming languages, frameworks, databases, developer tools, and AI libraries used by Syed Abrar Fiaz.", eyebrow: "TOOLS / TECHNOLOGIES" },
  cv: { title: "Curriculum vitae", description: "View, download, or print the original CV of Syed Abrar Fiaz.", eyebrow: "CV / EXPERIENCE" },
  contact: { title: "Contact Syed Abrar Fiaz", description: "Get in touch about hiring, software projects, or technical discussions with Syed Abrar Fiaz.", eyebrow: "HIRING / PROJECT INQUIRIES" },
  articles: { title: "Articles", description: "Technical writing by Syed Abrar Fiaz. New articles will appear here when approved and published.", eyebrow: "NOTES / WRITING" },
};

export const publishedRoutes = ["/", "/work", ...projects.map((project) => `/work/${project.slug}`), "/services", "/experience", "/research", "/about", "/stack", "/cv", "/contact", "/articles", "/privacy"];
