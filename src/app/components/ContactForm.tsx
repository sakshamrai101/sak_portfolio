"use client";
import React from "react";
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");


        const res = await fetch ("/api/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, email, message}),
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
        <form onSubmit={handleSubmit} className="space-y-4 text-white" style={{ fontFamily: '"Borel", cursive' }}>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <textarea
                placeholder="Subject / Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-black"
            />

            <button
                type="submit"
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-blue-500 transition"
            >
                {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
                <p className="text-green-300 text-sm font-medium">✅ Your message has been sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-red-400 text-sm font-medium">❌ Failed to send. Please try again later.</p>
            )}
        </form>
    );
}