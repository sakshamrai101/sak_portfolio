"use client";
import React, { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg space-y-4 text-white text-sm sm:text-base"
            style={{ fontFamily: '"Borel", cursive' }}
        >
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm placeholder:text-xs sm:placeholder:text-sm"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black text-sm placeholder:text-xs sm:placeholder:text-sm"
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-black text-sm placeholder:text-xs sm:placeholder:text-sm"
            />

            <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-500 transition text-sm sm:text-base"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-green-300 text-xs sm:text-sm font-medium">
                    ✅ Your message has been sent successfully!
                </p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-xs sm:text-sm font-medium">
                    ❌ Failed to send. Please try again later.
                </p>
            )}
        </form>
    );
}
