"use client";
import dynamic from "next/dynamic";
import "../global.css"
import { useState } from "react";
import codeImage from "../../../public/assets/code.png";
import devTools from "../../../public/assets/devTools.png";
import database from "../../../public/assets/database.png";
import { Navbar } from "../components/Navbar";


const RChart = dynamic(() => import("../components/Radar").then((mod) => mod.RChart), { ssr: false });

const skills = [
    {
        id: "1",
        name: "Languages",
        img: "pui"
    },
    {
        id: "2",
        name: "DevTools",
        img: "pui"
    },
    {
        id: "3",
        name: "Frameworks",
        img: "pui"
    }
]
export default function About ({}) {
    const [selectState, setSelectedState] = useState("languages");
    const [dropDown, setDropDown] = useState(false);


    const handleSkillChange = (skill: string) => {
        setSelectedState(skill);
        setDropDown(false);
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500">
            <Navbar />
            <div className="w-full max-w-6xl flex justify-center items-center">

                {/* Left Section */}
                <div className="flex flex-col text-left max-w-lg">
                    <p className="text-6xl m-6 group relative w-max">
                        <span className="px-1 relative z-10 group-hover:text-white" style={{ fontFamily: '"Borel", cursive' }}>About Me</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-blue-600 z-0 group-hover:h-full"></span>
                    </p>
                    <p className="text-3xl text-white" style={{fontFamily: '"Borel", cursive'}}>
                        I am a highly motivated software engineer with an <span className="px-1 z-10 group-hover:text-white text-amber-300">entrepreneurial spirit.</span> It enables me to own of every product I work on—from ideation to execution.
                    </p>
                </div>
            </div>


            {/* Right Section */}
            <div className="w-full flex flex-col justify-center items-center space-y-4 relative">
                <div className="justify-center text-center max-w-lg relative">

                    {/* Drop down Button */}
                    <button onClick={() => setDropDown(!dropDown)}
                        id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="text-white bg-blue-600 hover:bg-blue-700 border border-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" style={{ fontFamily: '"Borel", cursive' }}>
                        Skills(YOE)
                        <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>


                    {/* Drop down Menu */}

                    {dropDown && (
                            <ul className="m-1 h-35 py-2 overflow-y-auto text-gray-700 dark:text-gray-200 bg-blue-500 rounded-xl shadow-lg w-125 backdrop-blur-md" aria-labelledby="dropdownUsersButton">
                                <li
                                    onClick={() => handleSkillChange("languages")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={codeImage.src} alt="Code image"/>
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Languages</span>
                                    </a>
                                </li>
                                <li
                                    onClick={() => handleSkillChange("frameWorks")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={database.src} alt="Database image"/>
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Databases, Frameworks and Technologies </span>
                                    </a>
                                </li>
                                <li
                                    onClick={() => handleSkillChange("devTools")}>
                                    <a className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        <img className="w-6 h-6 mr-2 rounded-full" src={devTools.src} alt="Git image"/>
                                        <span style={{ fontFamily: '"Borel", cursive' }}>Development Tools</span> 
                                    </a>
                                </li>
                            </ul>
                    )}
                    <div className="mt-6">
                        <RChart currentState={selectState}/>
                    </div>
                </div>
            </div>

        </div>
    );
};