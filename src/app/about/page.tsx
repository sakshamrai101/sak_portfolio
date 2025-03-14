"use client";
import dynamic from "next/dynamic";
import "../global.css"
import { useState } from "react";



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

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const current_state = event.target.value;

        if (current_state === "languages") {
            setSelectedState("languages");
        }
        else if (current_state === "devTools") {
            setSelectedState("devTools");
        }
        else if (current_state === "frameWorks") {
            setSelectedState("frameWorks");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500">
            <div className="w-full max-w-6xl flex justify-center items-center">
                <div className="flex flex-col text-left max-w-lg">
                    <p className="text-3xl m-6 group relative w-max">
                        <span className="px-1 relative z-10 group-hover:text-white">About Me</span>
                        <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-indigo-600 z-0 group-hover:h-full"></span>
                    </p>
                    <p className="text-xl text-white">
                        I am a very motivated software engineer with an entrpreneuruial spirit. It helps me own every product I work on - end to end.
                        My personal mantra for success is based on precise technical acumen, strong communication and effective leadership. 
                    </p>
                </div>
            </div>


            <div className="w-full flex flex-col justify-left items-center space-y-4">
                <div className="justify-center text-center max-w-lg">
                    <button id="dropdownUsersButton" data-dropdown-toggle="dropdownUsers" data-dropdown-placement="bottom" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Project users 
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div id="dropdownUsers" className="z-10 hidden bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700">
                        <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUsersButton"/>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img className="w-6 h-6 me-2 rounded-full" src="../../assets/.png" alt="Jese image"/>
                                        Languages
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                <img className="w-6 h-6 me-2 rounded-full" src="../../assets/database.png" alt="Jese image"/>
                                        Databases, Frameworks and Technologies 
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <img className="w-6 h-6 me-2 rounded-full" src="../../assets/devTool.png" alt="Jese image"/>
                                        Development Tools 
                                </a>
                            </li>
                    </div>

                    <select onChange={handleSelectChange} className="text-green-400 bg-amber-700">
                        <option value="languages" className="text-purple-500 bg-amber-300">Languages</option>
                        <option value="frameWorks" className="text-purple-500bg-amber-300">Databases, Frameworks and Technologies</option>
                        <option value="devTools" className="text-purple-300bg-amber-300">Development Tools</option>
                    </select>
                    <div>
                        <RChart currentState={selectState}/>
                    </div>
                </div>
            </div>

        </div>
    );
};