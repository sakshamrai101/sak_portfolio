"use client";
import React from "react";
import { Navbar } from "../components/Navbar";
import "../global.css";
import Timeline from "../components/Timeline";

export default function Work () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-600">
            <Navbar />
            <div className="flex flex-col">
                <div className="w-full max-w-6xl flex items-center justify-center">
                    <p className="text-6xl m-6 group relative w-max">
                        <span className="px-1 relative z-10 group-hover:text-white" style={{ fontFamily: `"Borel", "cursive"` }}>Work Experience</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                </div>

                <Timeline />
            </div>
        </div>
    );
}