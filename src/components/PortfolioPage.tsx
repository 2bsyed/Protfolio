import Image from "next/image";
import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";
import type { ReactNode } from "react";

const nav = [
  ["EXPERIENCE", "/experience"], ["RESEARCH", "/research"], ["STACK", "/stack"], ["CONTACT", "/contact"],
] as const;

export function SiteHeader() {
  return <header className="sub-header wrap"><Link href="/" className="brand" aria-label="Syed Abrar Fiaz home"><Image src="/assets/logo.webp" alt="" className="brand-mark" width={45} height={34} priority/><span>SYED ABRAR FIAZ</span></Link><nav aria-label="Main navigation" className="sub-nav">
    <MegaMenu title="WORK" columns={[{ heading: "FEATURED PROJECTS", links: [{ label: "AI-Mentor", href: "/work/ai-mentor" }, { label: "Network anomaly research", href: "/work/network-anomaly-detection" }, { label: "EduFlow", href: "/work/eduflow" }] }, { heading: "EXPLORE", links: [{ label: "All case studies", href: "/work" }, { label: "Research notes", href: "/research" }, { label: "GitHub", href: "https://github.com/2bsyed" }] }]} featured="A few things I’ve built and learned along the way." featuredLabel="VIEW ALL WORK" featuredHref="/work" />
    <MegaMenu title="SERVICES" columns={[{ heading: "DEVELOPMENT", links: [{ label: "SaaS development", href: "/services#saas-development" }, { label: "Web applications", href: "/services#web-development" }, { label: "Business websites", href: "/services#web-development" }] }, { heading: "BACKEND ENGINEERING", links: [{ label: "API development", href: "/services#backend-api" }, { label: "Database design", href: "/services#backend-api" }, { label: "System improvements", href: "/services#website-improvement" }] }, { heading: "AI SOLUTIONS", links: [{ label: "AI chatbot features", href: "/services#ai-integration" }, { label: "Gemini integration", href: "/services#ai-integration" }, { label: "RAG applications", href: "/services#ai-integration" }] }, { heading: "WEBSITE IMPROVEMENT", links: [{ label: "Technical SEO", href: "/services#website-improvement" }, { label: "Performance review", href: "/services#website-improvement" }, { label: "Responsive improvements", href: "/services#website-improvement" }] }]} featured="Tell me what you’re trying to build or improve." featuredLabel="START A PROJECT" featuredHref="/contact" />
    {nav.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
    <MegaMenu title="ABOUT" columns={[{ heading: "PROFILE", links: [{ label: "About me", href: "/about" }, { label: "Experience", href: "/experience" }, { label: "Education", href: "/about#education" }] }, { heading: "MORE", links: [{ label: "Technical stack", href: "/stack" }, { label: "Research", href: "/research" }, { label: "CV", href: "/cv" }]}]} featured="Software engineer in Dhaka, building products and backend systems." featuredLabel="GET IN TOUCH" featuredHref="/contact" />
    <Link className="nav-cv" href="/cv">CV ↗</Link></nav></header>;
}

export function SiteFooter() {
  return <footer className="sub-footer"><div className="wrap sub-footer-inner"><div><p className="eyebrow">HAVE A GOOD IDEA?</p><h2>LET’S MAKE IT REAL.</h2></div><div className="sub-footer-links"><Link href="/contact">START A CONVERSATION ↗</Link><a href="mailto:abrarfiaz12@gmail.com">EMAIL</a><a href="https://github.com/2bsyed" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://linkedin.com/in/2bsyed" target="_blank" rel="noreferrer">LINKEDIN ↗</a><Link href="/privacy">PRIVACY</Link></div></div></footer>;
}

export function PortfolioPage({ title, eyebrow, children }: { title: string; eyebrow: string; children: ReactNode }) {
  return <><div className="paper-grain" aria-hidden="true"/><SiteHeader/><main className="page-shell wrap"><p className="eyebrow page-eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-content">{children}</div></main><SiteFooter/></>;
}

export function ProjectCard({ project }: { project: (typeof import("@/content/site").projects)[number] }) {
  return <article className="project-card page-project-card"><Link className="project-visual" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}><Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 90vw, 32vw"/><span className="visual-label">CASE STUDY</span><span className="visual-foot">READ PROJECT ↗</span></Link><div className="project-title"><h2><Link href={`/work/${project.slug}`}>{project.title}</Link></h2></div><p>{project.summary}</p><p className="tag-row">{project.stack.join(" · ")}</p><Link className="text-link" href={`/work/${project.slug}`}>READ CASE STUDY ↗</Link></article>;
}
