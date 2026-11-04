import type { Metadata } from "next";
import { PortfolioPage, ProjectCard } from "@/components/PortfolioPage";
import { projects, sitePages } from "@/content/site";
export const metadata: Metadata = { title: sitePages.work.title, description: sitePages.work.description, alternates: { canonical: "/work" }, openGraph: { title: sitePages.work.title, description: sitePages.work.description } };
export default function WorkPage() { return <PortfolioPage title="A FEW THINGS I’VE BUILT." eyebrow={sitePages.work.eyebrow}><p className="page-intro">Selected academic, research, and product work drawn from my CV. Each case study separates what I built from what has and has not been independently evaluated.</p><div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug}/>)}</div><p className="small-note page-note">Other projects mentioned in earlier discussions are not listed here until their details are confirmed.</p></PortfolioPage>; }
