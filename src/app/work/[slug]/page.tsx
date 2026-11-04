import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioPage } from "@/components/PortfolioPage";
import { projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) return {}; return { title: project.title, description: project.summary, alternates: { canonical: `/work/${slug}` }, openGraph: { title: project.title, description: project.summary, images: [project.image] } }; }
export default async function ProjectPage({ params }: Props) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <PortfolioPage title={project.title.toUpperCase()} eyebrow={project.eyebrow}><div className="case-hero"><Image src={project.image} alt={project.alt} width={1200} height={320} priority/><p>{project.summary}</p></div><div className="tag-row case-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="case-sections">{project.sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div><div className="case-nav"><Link className="text-link" href="/work">← ALL WORK</Link><Link className="text-link" href="/contact">ASK ABOUT THIS WORK ↗</Link></div></PortfolioPage>; }
