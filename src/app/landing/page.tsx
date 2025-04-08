"use client";

import { Navbar } from "../components/Navbar";
import "../global.css";
import React from "react";
import mainLogo from "../../../public/assets/mainLogo.png";
import TypewriterText from "../components/TypewriterText";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center">
            <Navbar />

            <div className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-20 py-10 gap-20 md:gap-40">
                {/* Left Side */}
                <div
                    className="flex flex-col justify-center items-center text-white w-full md:w-1/2"
                    style={{ fontFamily: `"Borel", "cursive"` }}
                >
                    <div className="text-white w-full space-y-4 sm:space-y-6 md:space-y-10">
                        <div className="text-3xl sm:text-2xl md:text-5xl font-bold">
                            <TypewriterText
                                lines={["Hi, I am Saksham", "Software Engineer"]}
                                speed={75}
                            />
                        </div>

                        <p className="text-base sm:text-lg md:text-xl font-bold text-white animate-pulse">
                            Math, CS and AI @ UCSD 2024
                        </p>

                        <button className="mt-3 px-3 py-2 sm:px-8 sm:py-2 md:px-5 md:py-3 text-sm sm:text-base bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="relative w-full md:w-1/3 flex justify-center mt-10 md:mt-0">
                    {/* Spotlight background */}
                    <div className="absolute w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-radial from-white/20 to-transparent blur-3xl animate-pulse-slow z-0" />

                    {/* Logo image */}
                    <img
                        src={mainLogo.src}
                        alt="Main Logo"
                        className="relative z-10 w-32 h-32 sm:w-20 sm:h-20 md:w-80 md:h-80 object-contain animate-bounce drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    />
                </div>
            </div>
        </div>
    );
}
