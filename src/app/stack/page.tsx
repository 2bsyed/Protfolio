import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { sitePages, skillGroups } from "@/content/site";
export const metadata: Metadata = { title: sitePages.stack.title, description: sitePages.stack.description, alternates: { canonical: "/stack" } };
export default function StackPage() { return <PortfolioPage title="THE RIGHT TOOL FOR THE JOB." eyebrow={sitePages.stack.eyebrow}><p className="page-intro">A list of technologies stated in my CV, grouped by how I use them.</p><div className="stack-page-list">{skillGroups.map((group) => <section key={group.name}><h2>{group.name}</h2><p>{group.values}</p></section>)}</div></PortfolioPage>; }
