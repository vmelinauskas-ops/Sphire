"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Start a conversation
            </h2>
            <p className="text-[#6b6b6b] font-light leading-relaxed mb-10">
              Tell us about your project. We&apos;ll get back to you within one
              business day.
            </p>
            <div className="space-y-4 text-sm text-[#a0a0a0]">
              <p>
                <span className="text-[#6b6b6b] text-xs tracking-widest uppercase block mb-1">Email</span>
                info@sphire.lt
              </p>
              <p>
                <span className="text-[#6b6b6b] text-xs tracking-widest uppercase block mb-1">Phone</span>
                +370 600 00000
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                Project Type
              </label>
              <input
                name="project_type"
                type="text"
                placeholder="e.g. Office building, logistics centre..."
                className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] tracking-widest uppercase text-[#6b6b6b] mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project..."
                className="w-full bg-[#161616] border border-[#1e1e1e] px-4 py-3 text-sm text-[#f0f0f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#c8a96e] transition-colors resize-none"
              />
            </div>

            <p className="text-[11px] text-[#3a3a3a]">
              By sending a message you agree to our{" "}
              <a href="#" className="underline hover:text-[#6b6b6b]">
                Privacy Policy
              </a>
              .
            </p>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="px-8 py-3.5 bg-[#c8a96e] text-[#0e0e0e] text-sm tracking-widest uppercase font-medium hover:bg-[#d9ba7f] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Message Sent"
                : "Send Message"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
