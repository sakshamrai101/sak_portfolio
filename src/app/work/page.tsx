"use client";

import React from "react";
import { Navbar } from "../components/Navbar";
import "../global.css";
import Timeline from "../components/Timeline";

export default function Work() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-600 relative overflow-x-hidden">
            <Navbar />

            {/* Page content with responsive padding and navbar offset */}
            <div className="flex flex-col items-center justify-start w-full ml-16 sm:ml-0 px-4 sm:px-6 pt-10">
                {/* Heading */}
                <div className="w-full max-w-6xl flex items-start justify-start">
                    <p
                        className="text-3xl sm:text-4xl md:text-6xl m-4 sm:m-6 relative w-max text-white text-center"
                        onTouchStart={(e) => {
                            e.currentTarget.classList.add("bg-blue-600");
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.classList.remove("bg-blue-600");
                        }}
                    >
                        <span className="relative inline-block group overflow-hidden">
                            <span className="px-1 relative z-10 transition-colors duration-300 group-hover:text-white">
                                Work Experience
                            </span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 z-0 transition-all duration-300 group-hover:h-full"></span>
                        </span>

                    </p>
                </div>

                {/* Timeline */}
                <div className="relative w-full max-w-full py-10 px-1 sm:px-4 md:px-12 sm:py-15 sm:justify-items-start overflow-x-hidden -ml-28 sm:ml-0">
                    <Timeline />
                </div>

            </div>
        </div>
    );
}
