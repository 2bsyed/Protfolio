import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import ContactForm from "@/components/ContactForm";
import CalBooking from "@/components/CalBooking";
import { sitePages } from "@/content/site";
export const metadata: Metadata = { title: sitePages.contact.title, description: sitePages.contact.description, alternates: { canonical: "/contact" }, openGraph: { title: sitePages.contact.title, description: sitePages.contact.description } };
export default function ContactPage() { return <PortfolioPage title="LET’S TALK ABOUT IT." eyebrow={sitePages.contact.eyebrow}><p className="page-intro">Hiring and project inquiries have separate fields so you can share the details that matter. For a confirmed meeting time, use the scheduling link once it is configured.</p><ContactForm/><CalBooking/></PortfolioPage>; }
