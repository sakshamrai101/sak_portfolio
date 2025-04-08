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
                <div className="w-full max-w-6xl flex items-center justify-center">
                    <p
                        className="text-3xl sm:text-4xl md:text-6xl m-4 sm:m-6 group relative w-max text-white text-center"
                        style={{ fontFamily: `"Borel", cursive` }}
                    >
                        <span className="px-1 relative z-10 group-hover:text-white">
                            Work Experience
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative w-full max-w-full py-10 px-4 sm:px-6 md:px-12 overflow-x-hidden">

                    <Timeline />
                </div>
            </div>
        </div>
    );
}
