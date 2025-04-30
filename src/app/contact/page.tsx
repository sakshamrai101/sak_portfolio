"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import "../global.css";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-x-hidden">
            <Navbar />

            <div className="flex flex-col items-center justify-start w-full px-4 sm:px-6 py-10 sm:py-16 gap-8 sm:gap-12">
                {/* Heading + Resume */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-2xl flex flex-col items-center text-center gap-6"
                >
                    <p
                        className="text-3xl sm:text-4xl md:text-6xl text-white relative w-max"
                        onTouchStart={(e) => {
                            e.currentTarget.classList.add("bg-blue-600");
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.classList.remove("bg-blue-600");
                        }}
                    >
                        <span className="relative inline-block group overflow-hidden">
                            <span className="px-1 relative z-10 transition-colors duration-300 group-hover:text-white">
                                Contact Me
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 z-0 transition-all duration-300 group-hover:h-full"></span>
                        </span>

                    </p>

                    <a
                        href="10_MOE_RES.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 flex items-center gap-2"
                    >
                        Resume
                        <img src="assets/10_MOE_RES.png" alt="resume icon" className="w-5 h-5" />
                    </a>
                </motion.div>

                {/* Contact Form Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl py-8 px-4 sm:px-8 sm:py-12 w-full max-w-md space-y-6 text-black"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="text-lg sm:text-2xl md:text-3xl font-semibold text-white text-center"
                    >
                        Thank you for your interest in getting in touch!
                    </motion.h2>
                    <ContactForm />
                </motion.div>
            </div>
        </div>
    );
}
