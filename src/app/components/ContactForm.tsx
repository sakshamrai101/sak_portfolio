"use client";
import React from "react";

const ContactForm: React.FC = () => {
    return (
        <form
            action="https://formspree.io/f/xkgroerd"
            method="POST"
            className="space-y-6"
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-white font-semibold text-sm sm:text-base">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/90 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-white font-semibold text-sm sm:text-base">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/90 text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-white font-semibold text-sm sm:text-base">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-md bg-white/90 text-black shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
