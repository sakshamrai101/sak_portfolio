"use client";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/projectCard";
import "../global.css";
import projectArray from "../../data/projects.json";

export default function Portfolio () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500">
            <Navbar />

            <div className="flex flex-col gap-4 p-4">
                <div className="w-full max-w-6xl flex items-left justify-center">
                    <p className="text-6xl m-6 group relative w-max">
                        <span className="px-1 relative z-10 group-hover:text-white" style={{ fontFamily: `"Borel", "cursive"` }}>Portfolio</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-1 relative z-10 group-hover:text-white" style={{ fontFamily: `"Borel", "cursive"` }}>
                    {projectArray.map((project, index) => (
                        <ProjectCard 
                            key ={index} 
                            title={project.name}
                            description={project.description}
                            img={project.img}
                            link={project.link}
                            techStack={
                                (project.stack || project["stack"] || [])
                                .join("")
                                .split(",")
                                .map(t => t.trim())
                            }
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};