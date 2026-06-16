"use client";

import React, { useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<FormStatus>("idle");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xkgroerd", {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
                return;
            }

            setStatus("error");
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="rounded-xl border border-white/20 bg-white/10 px-6 py-10 text-center">
                <p className="text-xl font-semibold text-white">Message sent.</p>
                <p className="mt-2 text-sm text-white/75">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium text-cyan-100 underline underline-offset-4 transition hover:text-white"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-white/90">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="What should I call you?"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40 shadow-inner backdrop-blur-sm transition focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-white/90">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40 shadow-inner backdrop-blur-sm transition focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-sm font-medium text-white/90">
                    Subject
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Job opportunity, collaboration, hello..."
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40 shadow-inner backdrop-blur-sm transition focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-white/90">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me what you're building or what you need help with."
                    className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder:text-white/40 shadow-inner backdrop-blur-sm transition focus:border-white/40 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
            </div>

            {status === "error" && (
                <p className="text-sm text-red-200">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full rounded-lg bg-red-600 py-2.5 font-semibold text-white shadow-lg transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
                {status === "submitting" ? "Sending..." : "Send message"}
            </button>
        </form>
    );
};

export default ContactForm;
