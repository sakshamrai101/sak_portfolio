"use client";
import dynamic from "next/dynamic";
import "../global.css";
import { useState } from "react";
import codeImage from "../../../public/assets/code.png";
import devTools from "../../../public/assets/devTools.png";
import database from "../../../public/assets/database.png";
import { Navbar } from "../components/Navbar";
import React from "react";
import { motion, AnimatePresence } from "framer-motion"; // 🔥 Added

const RChart = dynamic(() => import("../components/Radar").then((mod) => mod.RChart), {
    ssr: false,
});

export default function About() {
    const [selectState, setSelectedState] = useState("languages");
    const [dropDown, setDropDown] = useState(false);

    const handleSkillChange = (skill: string) => {
        setSelectedState(skill);
        setDropDown(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative overflow-hidden">
            <Navbar />

            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen overflow-hidden px-4 sm:px-6 py-10 gap-12 sm:gap-16 md:gap-24">
                {/* Left Section */}
                <div className="max-w-xl text-left">
                    <p
                        className="text-3xl sm:text-4xl md:text-6xl m-4 sm:m-6 group relative w-max text-white"
                        style={{ fontFamily: '"Borel", cursive' }}
                    >
                        <span className="px-1 relative z-10 group-hover:text-white">About Me</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                    <p
                        className="text-base sm:text-lg md:text-3xl text-white px-2"
                        style={{ fontFamily: '"Borel", cursive' }}
                    >
                        I am a highly motivated software engineer with an{" "}
                        <span className="px-1 z-10 group-hover:text-white text-amber-300">
                            entrepreneurial spirit.
                        </span>{" "}
                        It enables me to own every product I work on—from ideation to execution.
                    </p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center text-center space-y-6 w-full max-w-md relative">
                    {/* Dropdown Button */}
                    <button
                        onClick={() => setDropDown(!dropDown)}
                        className="text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                        style={{ fontFamily: '"Borel", cursive' }}
                    >
                        Skills (YOE)
                        <svg
                            className="w-2.5 h-2.5 ml-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    {/* Dropdown Menu (absolute + animation) */}
                    <AnimatePresence>
                        {dropDown && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="absolute top-14 w-full bg-blue-500 rounded-xl shadow-lg py-2 z-50"
                            >
                                <li onClick={() => handleSkillChange("languages")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img src={codeImage.src} alt="Code" className="w-6 h-6 mr-2" />
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Languages</span>
                                    </a>
                                </li>
                                <li onClick={() => handleSkillChange("frameWorks")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img src={database.src} alt="DB" className="w-6 h-6 mr-2" />
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Technologies</span>
                                    </a>
                                </li>
                                <li onClick={() => handleSkillChange("devTools")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img src={devTools.src} alt="Tools" className="w-6 h-6 mr-2" />
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Development Tools</span>
                                    </a>
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>

                    {/* Radar Chart with entrance animation */}
                    <motion.div
                        key={selectState} // 🔥 re-trigger animation when state changes
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full mt-20"
                    >
                        <RChart currentState={selectState} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
