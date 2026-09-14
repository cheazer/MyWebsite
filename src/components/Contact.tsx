"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-2 w-full border border-edge bg-paper px-3 py-2.5 text-[1rem] text-granite transition-colors duration-200 placeholder:text-mica/70 focus:border-jade focus:outline-none";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });

  const update = (key: keyof typeof form) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const handleSubmit = async () => {
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => ({}))) as { error?: string };
        setError(body.error ?? "Something went wrong, try again");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "", company: "" });
    } catch {
      setError("Could not reach the server, try emailing me directly");
      setStatus("error");
    }
  };

  return (
    <section className="border-t border-edge" id="contact">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <h2 className="display-sm text-2xl sm:text-3xl">Get in touch</h2>
            <p className="prose-column mt-4 text-mica">
              Graduate roles, internships, research, or anything you are building that
              needs a backend. I read everything and reply to what I can.
            </p>
            <p className="meta mt-6">
              Or email me at{" "}
              <a className="underline-link" href="mailto:FisehaFanuel@gmail.com">
                FisehaFanuel@gmail.com
              </a>
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="meta" htmlFor="contact-name">
                  Name
                </label>
                <input
                  autoComplete="name"
                  className={fieldClass}
                  id="contact-name"
                  onChange={update("name")}
                  type="text"
                  value={form.name}
                />
              </div>
              <div>
                <label className="meta" htmlFor="contact-email">
                  Email
                </label>
                <input
                  autoComplete="email"
                  className={fieldClass}
                  id="contact-email"
                  onChange={update("email")}
                  type="email"
                  value={form.email}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="meta" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className={`${fieldClass} min-h-40 resize-y`}
                id="contact-message"
                onChange={update("message")}
                value={form.message}
              />
            </div>

            {/* Honeypot. Hidden from people, tempting to bots. */}
            <div aria-hidden="true" className="hidden">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                onChange={update("company")}
                tabIndex={-1}
                type="text"
                value={form.company}
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                className="border border-granite bg-granite px-6 py-2.5 text-[0.95rem] text-paper transition-colors duration-200 hover:border-jade hover:bg-jade disabled:opacity-50"
                disabled={status === "sending"}
                onClick={handleSubmit}
                type="button"
              >
                {status === "sending" ? "Sending" : "Send message"}
              </button>

              <p aria-live="polite" className="meta">
                {status === "sent" ? "Thanks, that reached me." : ""}
                {status === "error" ? error : ""}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
