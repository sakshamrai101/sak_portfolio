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
        <div className="h-screen bg-linear-to-r from-cyan-500 to-blue-500">
            <h1 className="text-3xl text-amber-300">About Me</h1>
            <div className="text-2xl text-white from-neutral-100 to-neutral-300">
                I am a very motivated software engineer with an entrprenenurail spirit. It helps me own every product I work on - end to end.
                My personal mantra for success is based on precise technical acumen, strong communication and effective leadership. 
            </div>
            <div className="right">
                <select onChange={handleSelectChange} className="text-green-400 bg-amber-700">
                    <option value="languages" className="text-purple-500 bg-amber-300">Languages</option>
                    <option value="frameWorks" className="text-purple-500bg-amber-300">Databases, Frameworks and Technologies</option>
                    <option value="devTools" className="text-purple-300bg-amber-300">Development Tools</option>
                </select>
             </div>

            <div>
                <RChart currentState={selectState}/>
            </div>
        </div>
    );
};