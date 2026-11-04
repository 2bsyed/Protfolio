"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [kind, setKind] = useState<"hiring" | "project">("hiring");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    setBusy(true);
    setStatus("Sending your inquiry…");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...values, inquiry_type: kind }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.detail || "Message delivery is not configured yet.");
      setStatus("Your inquiry was delivered. Thank you — Abrar will follow up.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? `${error.message} You can email Abrar directly at abrarfiaz12@gmail.com.` : "Message delivery is unavailable. Please email Abrar directly.");
    } finally {
      setBusy(false);
    }
  }

  return <div className="contact-layout"><div className="contact-choice"><p>Choose the route that fits your reason for reaching out. Please do not include confidential information.</p><div className="choice-tabs" role="group" aria-label="Inquiry type"><button type="button" aria-pressed={kind === "hiring"} onClick={() => setKind("hiring")}>HIRING</button><button type="button" aria-pressed={kind === "project"} onClick={() => setKind("project")}>PROJECT</button></div><div className="contact-direct"><a href="mailto:abrarfiaz12@gmail.com">abrarfiaz12@gmail.com ↗</a><a href="https://linkedin.com/in/2bsyed" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://github.com/2bsyed" target="_blank" rel="noreferrer">GITHUB ↗</a></div><p className="small-note">Email notifications are not yet live until a verified sender and backend mail credentials are configured. The direct email link is available meanwhile.</p></div><form className="inquiry-form" onSubmit={submit}><label>Name<input name="name" required minLength={2} maxLength={120} autoComplete="name"/></label><label>Email<input name="email" type="email" required maxLength={254} autoComplete="email"/></label><label>Company / organization <span>(optional)</span><input name="organization" maxLength={160} autoComplete="organization"/></label>{kind === "hiring" ? <><label>Role or opportunity<input name="category" required maxLength={160} placeholder="Role title or opportunity"/></label><label>Employment type<select name="employment_type"><option>Full-time</option><option>Internship</option><option>Contract</option><option>Other</option></select></label></> : <><label>Project category<select name="category"><option>SaaS development</option><option>Web application or website</option><option>Backend / API</option><option>AI integration</option><option>Website or system improvement</option><option>Other</option></select></label><label>Timeline <span>(optional)</span><input name="timeline" maxLength={120} placeholder="e.g. Exploring / target date"/></label><label>Budget range <span>(optional)</span><input name="budget" maxLength={100}/></label></>}<label>{kind === "hiring" ? "Message" : "Project description"}<textarea name="message" required minLength={10} maxLength={3000} rows={5}/></label><label className="honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label><button type="submit" className="button button-blue" disabled={busy}>{busy ? "SENDING…" : "SEND INQUIRY ↗"}</button><p role="status" aria-live="polite" className="form-status">{status}</p><p className="small-note">Submitting sends your message to Abrar. A copy is not stored on this website.</p></form></div>;
}
