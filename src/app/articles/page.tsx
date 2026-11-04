import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { sitePages } from "@/content/site";
export const metadata: Metadata = { title: sitePages.articles.title, description: sitePages.articles.description, alternates: { canonical: "/articles" } };
export default function ArticlesPage() { return <PortfolioPage title="NOTES FROM THE WORKBENCH." eyebrow={sitePages.articles.eyebrow}><div className="empty-state"><p className="eyebrow">NO ARTICLES PUBLISHED YET</p><h2>Useful notes will go here.</h2><p>I haven’t published technical writing on this site yet. When an article is ready and approved, it will appear here.</p></div></PortfolioPage>; }
