"use client";

import { FormEvent, useState } from "react";

type FormStatus = { type: "idle" | "loading" | "success" | "error"; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "loading", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Unable to send your message.");
      form.reset();
      setStatus({ type: "success", message: "Thanks! Your message has been sent. I’ll be in touch soon." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong. Please email me directly.",
      });
    }
  }

  const fieldClass = "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2e7afe] focus:ring-2 focus:ring-blue-100";

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] bg-white p-6 text-slate-900 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Name
          <input className={fieldClass} type="text" name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your name" />
        </label>
        <label className="text-sm font-bold">
          Email
          <input className={fieldClass} type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold">
        Project type
        <select className={fieldClass} name="projectType" defaultValue="" required>
          <option value="" disabled>Select a service</option>
          <option>Web application</option>
          <option>Mobile application</option>
          <option>API or backend</option>
          <option>Existing application support</option>
          <option>Technical strategy</option>
          <option>Other</option>
        </select>
      </label>

      <label className="mt-5 block text-sm font-bold">
        Project details
        <textarea className={fieldClass} name="message" required minLength={20} maxLength={5000} rows={5} placeholder="Tell me about your goals, timeline, and where you need help." />
      </label>

      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Website<input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-[#2e7afe] px-6 font-bold text-white shadow transition hover:bg-[#1968ef] disabled:cursor-wait disabled:opacity-70"
      >
        {status.type === "loading" ? "Sending…" : "Send Message"}
      </button>

      <p
        className={`mt-4 min-h-6 text-sm ${status.type === "success" ? "text-green-700" : status.type === "error" ? "text-red-700" : "text-slate-500"}`}
        role="status"
        aria-live="polite"
      >
        {status.message || "Your information is used only to respond to your inquiry."}
      </p>
    </form>
  );
}

