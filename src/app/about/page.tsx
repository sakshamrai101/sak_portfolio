"use client";

import { Navbar } from "../components/Navbar";
import "../global.css";
import React from "react";
import TypewriterText from "../components/TypewriterText";
import mainLogo from "../../../public/assets/mainLogo.png";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
            <Navbar />

            <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12">
                {/* Left side: intro & button */}
                <div className="flex flex-col justify-center items-start w-full md:w-1/2 space-y-6">
                    <TypewriterText
                        lines={["Hi, I am Saksham 👋", "Software Engineer"]}
                        speed={75}
                    />

                    <p
                        className="text-lg md:text-xl font-bold text-white animate-pulse"
                        style={{ fontFamily: `"Borel", cursive` }}
                    >
                        Math, CS and AI @ UCSD 2024
                    </p>

                    <button className="mt-4 px-5 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300">
                        Contact Me
                    </button>
                </div>

                {/* Right side: animated logo */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src={mainLogo.src}
                        alt="Main Logo"
                        className="w-52 h-52 md:w-80 md:h-80 object-contain animate-bounce drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
