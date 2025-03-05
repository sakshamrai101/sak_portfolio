"use client";
import dynamic from "next/dynamic";
import "../global.css"
import devTools from "../../data/devTools.json";
import languages from "../../data/languages.json";
import frameWorks from "../../data/frameWorks.json";
import { useState } from "react";


interface Skills {
    name: string;
    years: number;
}

type skillArray = Skills[];

const RChart = dynamic(() => import("../components/Radar").then((mod) => mod.RChart), { ssr: false });


export default function About ({}) {
    const [selectState, setSelectedState] = useState<skillArray>(languages);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const current_state = event.target.value;

        if (current_state === "languages") {
            setSelectedState(languages);
        }
        else if (current_state === "devTools") {
            setSelectedState(devTools);
        }
        else if (current_state === "frameWorks") {
            setSelectedState(frameWorks);
        }
    };
    return (
        <div className="bg-sky-300 bg-cover">
        <h1 className="bg-sky-500 hover:bg-sky-700 text-amber-300">About Me</h1>
        <div className="text-blue-600">
            I am a very motivated software engineer with an entrprenenurail spirit. It helps me own every product I work on - end to end.
            My personal mantra for success is based on precise technical acumen, strong communication and effective leadership. 
        </div>
        <div className="right">
            <select onChange={handleSelectChange} className="text-green-400 bg-amber-700">
                <option value="languages" className="text-purple-500 bg-amber-300">Languages</option>
                <option value="devTools" className="text-purple-500bg-amber-300">Databases, Frameworks and Technologies</option>
                <option value="frameworks" className="text-purple-300bg-amber-300">Development Tools</option>
            </select>
        </div>

        <div className="bg-amber-400">
            {selectState.map((item, index) => (
                <RChart key={index} item={item} />
            ))}
        </div>
        </div>
    );
};