"use client";

import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/projectCard";
import "../global.css";
import projectArray from "../../data/projects.json";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
    const [openCard, setOpenCard] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 relative overflow-x-hidden">
            <Navbar />

            <div className="ml-16 sm:ml-0 flex flex-col gap-6 px-4 sm:px-6 py-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-6xl flex justify-center"
                >
                    <p
                        className="text-3xl sm:text-4xl md:text-6xl m-4 sm:m-6 relative w-max text-white"
                        
                        onTouchStart={(e) => {
                            e.currentTarget.classList.add("bg-blue-600");
                        }}
                        onTouchEnd={(e) => {
                            e.currentTarget.classList.remove("bg-blue-600");
                        }}
                    >
                        <span className="px-1 relative z-10">Portfolio</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div
                    className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {projectArray.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ProjectCard
                                title={project.name}
                                description={project.description}
                                img={project.img}
                                link={project.link}
                                techStack={
                                    (project.stack || project["stack"] || [])
                                        .join("")
                                        .split(",")
                                        .map((t) => t.trim())
                                }
                                isMobileTapOpen={openCard === index}
                                onToggleTap={() => setOpenCard(openCard === index ? null : index)}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
