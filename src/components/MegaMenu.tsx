"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

type Props = { title: string; columns: Array<{ heading: string; links: Array<{ label: string; href: string }> }>; featured: string; featuredLabel: string; featuredHref: string };
export default function MegaMenu({ title, columns, featured, featuredLabel, featuredHref }: Props) {
  const root = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => { if (root.current && !root.current.contains(event.target as Node)) root.current.open = false; };
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape" && root.current?.open) { root.current.open = false; root.current.querySelector("summary")?.focus(); } };
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => { document.removeEventListener("pointerdown", closeOnOutside); document.removeEventListener("keydown", closeOnEscape); };
  }, []);
  return <details className="nav-mega" ref={root} onKeyDown={(event) => { if (event.key === "Escape" && root.current) { root.current.open = false; } }}><summary>{title}<span aria-hidden="true">⌄</span></summary><div className="nav-mega-panel"><div className="nav-mega-columns">{columns.map((column) => <section key={column.heading}><h2>{column.heading}</h2>{column.links.map((item) => <Link key={item.label} href={item.href}>{item.label}<span aria-hidden="true"> ↗</span></Link>)}</section>)}</div><aside><p>{featured}</p><Link href={featuredHref}>{featuredLabel} ↗</Link></aside></div></details>;
}
