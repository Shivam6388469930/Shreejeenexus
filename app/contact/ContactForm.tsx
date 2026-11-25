"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (err: unknown) {
      setIsSubmitting(false);
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setErrorMessage(msg);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-peacock/15 bg-white/85 p-10 text-center shadow-xl backdrop-blur">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-marigold text-peacock shadow-md">
          <svg
            viewBox="0 0 24 24"
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-peacock md:text-3xl">
          Thank you for reaching out!
        </h3>
        <p className="mt-3 text-peacock/80 max-w-md mx-auto leading-relaxed">
          Your inquiry has been successfully received and forwarded to our client strategy team. A confirmation email has also been sent to your address.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              service: "",
              message: "",
            });
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-peacock px-6 py-3 font-semibold text-mist shadow-md transition hover:-translate-y-0.5 hover:bg-[#08404a]"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-3xl border border-peacock/15 bg-white/85 p-8 shadow-xl backdrop-blur md:p-10"
    >
      <h3 className="font-display text-2xl font-bold text-peacock md:text-3xl">
        Send us a message
      </h3>
      <p className="mt-2 text-sm text-peacock/70">
        Fill out the form below and we&apos;ll schedule an exploratory discovery call within one business day.
      </p>

      {errorMessage && (
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <svg className="h-5 w-5 shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="font-semibold">Submission failed</p>
            <p className="mt-0.5 text-xs text-red-600">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock placeholder:text-peacock/40 focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock placeholder:text-peacock/40 focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock placeholder:text-peacock/40 focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock placeholder:text-peacock/40 focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Service of Interest *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          >
            <option value="">Select a service...</option>
            <option value="Market Research & Insights">Market Research & Insights</option>
            <option value="Survey Programming & Data Processing">Survey Programming & Data Processing</option>
            <option value="Digital & Performance Marketing">Digital & Performance Marketing</option>
            <option value="Custom Software Development">Custom Software Development</option>
            <option value="Website Design & Development">Website Design & Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design & Branding">UI/UX Design & Branding</option>
            <option value="Analytics & Business Intelligence">Analytics & Business Intelligence</option>
            <option value="AI & Business Automation">AI & Business Automation</option>
            <option value="Business Consulting & Strategy">Business Consulting & Strategy</option>
            <option value="Other Inquiry">Other Inquiry</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-peacock">
            Project Details & Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project goals, timelines, or specific requirements..."
            className="w-full rounded-xl border border-peacock/20 bg-white px-4 py-3 text-peacock placeholder:text-peacock/40 focus:border-peacock focus:outline-none focus:ring-2 focus:ring-marigold/50"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 flex w-full items-center justify-center gap-3 rounded-[14px_14px_14px_4px] bg-peacock py-4 font-semibold text-mist shadow-md transition hover:-translate-y-0.5 hover:bg-[#08404a] hover:shadow-lg disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <span>Submitting message...</span>
          </span>
        ) : (
          <>
            <span>Submit Inquiry</span>
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
