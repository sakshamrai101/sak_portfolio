"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import "../global.css"
import ContactForm from "../components/ContactForm";

export default function Contact () {
    return (
        <div className="min-h-screen flex justify-center items-center bg-linear-to-r from bg-cyan-500 to-blue-600">
            <Navbar />
            <div className="w-full max-w-full flex items-start justify-center">


                <div className="flex flex-col text-left max-w-lg">
                    <p className="text-6xl m-6 group relative w-max">
                        <span className="px-1 relative z-10 group-hover:text-white" style={{ fontFamily: '"Borel", cursive' }}>Contact Me</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>

                    <a href="7MonthRes.pdf" target="_blank"
                        rel="noopener noreferrer" style={{ fontFamily: '"Borel", cursive' }} className="ml-15 px-20 py-1 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 flex items-start gap-1 w-max">

                        Resume
                        <img src="assets/resume.png" alt="resume icon" className="w-6 h-6" />
                    </a>
                </div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl p-8 w-full max-w-xl space-y-6 text-black m-25">

                <h2 className="text-3xl font-semibold" style={{ fontFamily: '"Borel", cursive' }}>
                    Thank you for your interest in getting in touch!
                </h2>
                <ContactForm />
            </div>
        </div>
    );
}