"use client";

import Image from "next/image";
import Link from "next/link";
import MegaMenu from "@/components/MegaMenu";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, CodeXml, Download, Mail, Menu, Network, Send, Sparkles, X } from "lucide-react";
import { projects } from "@/content/site";

const apiBase = (process.env.NEXT_PUBLIC_FASTAPI_URL || "http://localhost:8000").replace(/\/$/, "");

type ChatMessage = { role: "user" | "assistant"; content: string; failed?: boolean };

const initialMessages: ChatMessage[] = [{ role: "assistant", content: "Hey, I’m Abrar’s AI assistant. Ask about his projects, experience, or how to work together." }];

const quickPrompts = [
  { label: "PROJECTS", prompt: "Tell me about your projects." },
  { label: "EXPERIENCE", prompt: "Tell me about your work experience." },
  { label: "HIRE ABRAR", prompt: "How can I contact Abrar about hiring?" },
];

export default function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatText, setChatText] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [chatBusy, setChatBusy] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, chatOpen]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setChatOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  async function sendChat(value: string) {
    const message = value.trim();
    if (!message || chatBusy) return;
    const previous = messages.filter((item) => item.content !== initialMessages[0].content).slice(-8);
    setMessages((current) => [...current, { role: "user", content: message }]);
    setChatText("");
    setChatBusy(true);
    try {
      const response = await fetch(`${apiBase}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history: previous }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "The assistant is unavailable right now.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((current) => [...current, { role: "assistant", content: "I couldn’t reach the assistant just now. Please try again, or email Abrar at abrarfiaz12@gmail.com.", failed: true }]);
    } finally {
      setChatBusy(false);
    }
  }

  return (
    <>
      <div className="paper-grain" aria-hidden="true" />
      <header className="site-header wrap">
        <Link className="brand" href="/" aria-label="Syed Abrar Fiaz home">
          <Image src="/assets/logo.webp" alt="SAF pixel logo" className="brand-mark" width={45} height={34} priority />
          <span>SYED ABRAR FIAZ</span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((open) => !open)}>
          <Menu size={22} aria-hidden="true" />
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? " open" : ""}`} aria-label="Main navigation">
          <MegaMenu title="WORK" columns={[{ heading: "FEATURED PROJECTS", links: [{ label: "AI-Mentor", href: "/work/ai-mentor" }, { label: "Network anomaly research", href: "/work/network-anomaly-detection" }, { label: "EduFlow", href: "/work/eduflow" }] }, { heading: "EXPLORE", links: [{ label: "All case studies", href: "/work" }, { label: "Research notes", href: "/research" }, { label: "GitHub", href: "https://github.com/2bsyed" }] }]} featured="A few things I’ve built and learned along the way." featuredLabel="VIEW ALL WORK" featuredHref="/work" />
          <MegaMenu title="SERVICES" columns={[{ heading: "DEVELOPMENT", links: [{ label: "SaaS development", href: "/services#saas-development" }, { label: "Web applications", href: "/services#web-development" }, { label: "Business websites", href: "/services#web-development" }] }, { heading: "BACKEND ENGINEERING", links: [{ label: "API development", href: "/services#backend-api" }, { label: "Database design", href: "/services#backend-api" }, { label: "System improvements", href: "/services#website-improvement" }] }, { heading: "AI SOLUTIONS", links: [{ label: "AI chatbot features", href: "/services#ai-integration" }, { label: "Gemini integration", href: "/services#ai-integration" }, { label: "RAG applications", href: "/services#ai-integration" }] }, { heading: "WEBSITE IMPROVEMENT", links: [{ label: "Technical SEO", href: "/services#website-improvement" }, { label: "Performance review", href: "/services#website-improvement" }, { label: "Responsive improvements", href: "/services#website-improvement" }] }]} featured="Tell me what you’re trying to build or improve." featuredLabel="START A PROJECT" featuredHref="/contact" />
          <Link href="/experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</Link>
          <Link href="/research" onClick={() => setMenuOpen(false)}>RESEARCH</Link>
          <MegaMenu title="ABOUT" columns={[{ heading: "PROFILE", links: [{ label: "About me", href: "/about" }, { label: "Experience", href: "/experience" }, { label: "Education", href: "/about#education" }] }, { heading: "MORE", links: [{ label: "Technical stack", href: "/stack" }, { label: "Research", href: "/research" }, { label: "CV", href: "/cv" }]}]} featured="Software engineer in Dhaka, building products and backend systems." featuredLabel="GET IN TOUCH" featuredHref="/contact" />
          <Link href="/stack" onClick={() => setMenuOpen(false)}>STACK</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          <a className="nav-cv" href="/assets/Syed-Abrar-Fiaz-CV.pdf" download="Syed_Abrar_Fiaz_Resume.pdf">DOWNLOAD CV ↓</a>
          <a className="availability" href="/contact">CONTACT ABRAR</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER <b>/</b> DHAKA, BANGLADESH</p>
            <h1>I BUILD<br />THINGS THAT<br /><span className="sense">MAKE SENSE.</span><Sparkles className="spark" aria-hidden="true" size={26} strokeWidth={2.2} /></h1>
            <p className="intro">I build useful software products, reliable backend systems, and AI-powered applications.</p>
            <div className="hero-actions">
              <a className="button button-blue" href="#work">VIEW MY WORK <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="button button-outline" href="/contact">HIRE ME ↗</a>
              <span className="cv-tools"><a className="cv-link" href="/assets/Syed-Abrar-Fiaz-CV.pdf" download="Syed_Abrar_Fiaz_Resume.pdf">DOWNLOAD CV <Download size={14} aria-hidden="true" /></a><a className="cv-link" href="/cv">VIEW CV ↗</a></span>
            </div>
            <p className="hero-tags">NEXT.JS <b>·</b> REACT <b>·</b> FASTAPI <b>·</b> PYTHON <b>·</b> AI</p>
          </div>
          <div className="hero-art" aria-label="Portrait of Syed Abrar Fiaz on a retro blue computer interface">
            <div className="art-grid" aria-hidden="true" /><span className="art-star star-one" aria-hidden="true">✦</span><span className="art-star star-two" aria-hidden="true">✳</span>
            <div className="orbit" aria-hidden="true" />
            <div className="terminal"><div className="terminal-bar"><i /><i /><i /><span>ABRAR@BUILD:~</span></div><p>shipping ideas into reality<span className="cursor">▌</span></p><strong>STATUS: BUILDING</strong></div>
            <Image className="portrait" src="/assets/portrait.webp" alt="Black and white halftone portrait of Syed Abrar Fiaz" width={1373} height={1145} priority />
            <div className="earth" aria-hidden="true"><span /></div>
          </div>
        </section>

        <section className="work-section wrap" id="work">
          <div className="section-heading"><p className="eyebrow">01 / SELECTED WORK</p><span className="heading-note">A FEW THINGS I’VE MADE <b>↓</b></span></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.slug}>
                <Link className="project-visual" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
                  <Image src={project.image} alt={project.alt} fill sizes="(max-width: 680px) 90vw, (max-width: 950px) 45vw, 30vw" />
                  <span className="visual-label">0{index + 1} — {project.title}</span><span className="visual-foot">CASE STUDY <ArrowUpRight size={13} aria-hidden="true" /></span>
                </Link>
                <div className="project-title"><h3>{project.title}</h3><span className="project-type">{project.eyebrow.split(" · ")[0]}</span></div>
                <p>{project.summary}</p>
                <div className="project-bottom"><span>{project.stack.slice(0, 4).join(" · ")}</span><Link href={`/work/${project.slug}`}>CASE STUDY ↗</Link></div>
              </article>
            ))}
          </div>
          <Link className="all-projects" href="/work">ALL CASE STUDIES <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </section>

        <section className="about-section wrap" id="about">
          <div className="about-intro"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>CURIOUS BY<br />DEFAULT.</h2></div>
          <div className="about-copy"><p className="about-lead">I’m Syed — a software engineer and computer science graduate who likes making useful ideas feel simple.</p><p>I’ve built multi-tenant products, AI services, and tools for real workflows. I care about the details users feel: a dependable backend, a clear interface, and software that earns its place.</p>
            <div className="about-facts"><div><b>3.59</b><span>CGPA / COMPUTER SCIENCE</span></div><div><b>4×</b><span>ML MICROSERVICES BUILT</span></div><div><b>∞</b><span>THINGS LEFT TO LEARN</span></div></div>
          </div>
        </section>

        <section className="experience wrap">
          <div className="section-heading"><p className="eyebrow">03 / WHERE I’VE BEEN</p><span className="heading-note">LEARNING BY BUILDING <b>↓</b></span></div>
          <div className="timeline">
            <article className="timeline-row"><span className="timeline-date">AUG — OCT 2026</span><div><h3>FULL-STACK ENGINEER INTERN <i>↗</i></h3><p>BooleanForce · Developed Django APIs and services for NeaPure and built an LLM-powered product chatbot for product workflows.</p></div><span className="timeline-tag">PRODUCT ENGINEERING</span></article>
            <article className="timeline-row"><span className="timeline-date">JUL 2026 — NOW</span><div><h3>BACK-END AI ENGINEERING INTERN <i>↗</i></h3><p>FlyRank AI · Backend AI Engineering track; onboarding and assignments are in progress.</p></div><span className="timeline-tag">AI / BACKEND</span></article>
            <article className="timeline-row"><span className="timeline-date">JUL 2025 — 2026</span><div><h3>BACK-END AI ENGINEER <i>↗</i></h3><p>DIU Student Projects · Architected a multi-tenant SaaS backend, four ML microservices, and an on-premises MCP chatbot pipeline.</p></div><span className="timeline-tag">RESEARCH / BUILD</span></article>
          </div>
          <div className="education-row"><span className="timeline-date">2020 — 2026</span><div><h3>B.SC. COMPUTER SCIENCE &amp; ENGINEERING</h3><p>Daffodil International University · CGPA 3.59 / 4.00</p></div><span className="timeline-tag">DHAKA, BANGLADESH</span></div>
        </section>

        <section className="stack-section wrap" id="stack">
          <div><p className="eyebrow">04 / MY TOOLBOX</p><h2>THE RIGHT TOOL<br />FOR THE JOB.</h2></div>
          <div className="stack-list"><div><span>LANGUAGES</span><p>Python <i>·</i> JavaScript / TypeScript <i>·</i> Java <i>·</i> C++ <i>·</i> SQL</p></div><div><span>FRAMEWORKS</span><p>FastAPI <i>·</i> Django <i>·</i> React <i>·</i> Next.js</p></div><div><span>DATA &amp; AI</span><p>PostgreSQL <i>·</i> pgvector <i>·</i> scikit-learn <i>·</i> XGBoost <i>·</i> RAG <i>·</i> MCP</p></div><div><span>TOOLS</span><p>Docker <i>·</i> Linux <i>·</i> Git <i>·</i> Nginx</p></div></div>
        </section>

        <section className="home-services wrap"><div><p className="eyebrow">05 / WHAT I CAN HELP BUILD</p><h2>FROM IDEA TO USEFUL SOFTWARE.</h2></div><p>SaaS products, web applications, backend APIs, practical AI features, and scoped website improvements. <Link href="/services">EXPLORE SERVICES ↗</Link></p></section>
        <section className="home-research wrap"><div><p className="eyebrow">06 / RESEARCH</p><h2>NETWORK ANOMALY DETECTION</h2></div><p>Final-year thesis: a hybrid Autoencoder–XGBoost approach, with reported results evaluated on public datasets. <Link href="/research">READ THE RESEARCH NOTES ↗</Link></p></section>
        <section className="home-cv wrap"><p className="eyebrow">07 / HIRING</p><h2>EXPERIENCE, EDUCATION, AND CV.</h2><div><Link href="/experience">VIEW EXPERIENCE ↗</Link><Link href="/about">ABOUT ME ↗</Link><Link href="/cv">OPEN CV ↗</Link><Link href="/articles">ARTICLES ↗</Link></div></section>
      </main>

      <footer id="contact"><div className="footer-inner wrap"><div className="footer-cta"><p className="eyebrow">HAVE A GOOD IDEA?</p><h2>LET’S MAKE IT<br />REAL.</h2></div><a className="button button-red" href="/contact">START A CONVERSATION <ArrowUpRight size={17} aria-hidden="true" /></a><p className="footer-note">A good conversation<br />can start with a simple hello.</p><div className="footer-links"><a href="https://github.com/2bsyed" target="_blank" rel="noreferrer"><CodeXml size={17} /> GitHub</a><a href="https://linkedin.com/in/2bsyed" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a><a href="mailto:abrarfiaz12@gmail.com"><Mail size={17} /> Email</a><Link href="/privacy">Privacy</Link></div><small>© {new Date().getFullYear()} SYED ABRAR FIAZ</small></div></footer>

      <button className="chat-launch" type="button" aria-label={chatOpen ? "Close AI assistant" : "Open AI assistant"} aria-expanded={chatOpen} onClick={() => setChatOpen((open) => !open)}><span>✳</span></button>
      <section className={`chat-panel${chatOpen ? " open" : ""}`} aria-label="Chat with Abrar’s assistant" aria-hidden={!chatOpen}>
        <div className="chat-head"><div>ABRAR’S AI ASSISTANT<small>Projects, experience, or working together</small></div><a className="chat-book-head" href="/contact">CONTACT</a><button className="chat-close" type="button" aria-label="Close chat" onClick={() => setChatOpen(false)}><X size={19} /></button></div>
        <div className="chat-messages" aria-live="polite">
          {messages.map((item, index) => <div className={`chat-msg${item.role === "user" ? " user" : ""}`} key={`${item.role}-${index}`}><span>{item.content}</span>{item.failed && <button type="button" className="chat-retry" onClick={() => void sendChat(messages[index - 1]?.content || "")}>RETRY</button>}</div>)}
          {chatBusy && <div className="chat-msg" role="status">One moment…</div>}
          {messages.length === 1 && <div className="chat-choices">{quickPrompts.map((item) => <button type="button" key={item.label} onClick={() => void sendChat(item.prompt)}>{item.label}</button>)}<a className="chat-choice-link" href="/contact">CONTACT</a></div>}
          <div ref={messagesEnd} />
        </div>
        <form className="chat-compose" onSubmit={(event) => { event.preventDefault(); void sendChat(chatText); }}><input value={chatText} onChange={(event) => setChatText(event.target.value)} disabled={chatBusy} placeholder="Ask me anything…" aria-label="Your message" /><button type="submit" aria-label="Send message" disabled={chatBusy}><Send size={16} /></button></form>
      </section>

    </>
  );
}
