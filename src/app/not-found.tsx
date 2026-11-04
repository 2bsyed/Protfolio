import Link from "next/link";
import { PortfolioPage } from "@/components/PortfolioPage";
export default function NotFound() { return <PortfolioPage title="PAGE NOT FOUND." eyebrow="404 / MISSING PAGE"><p className="page-intro">That address does not point to a published page.</p><Link className="button button-blue" href="/">RETURN HOME ↗</Link></PortfolioPage>; }
