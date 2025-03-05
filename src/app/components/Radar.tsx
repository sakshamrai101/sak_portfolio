"use client";
import React from 'react';
import { Radar, 
         RadarChart, 
         PolarGrid, 
         PolarAngleAxis, 
         PolarRadiusAxis, } from 'recharts';
import frameworks from "../../data/frameWorks.json";
import languages from "../../data/languages.json";
import devTools from "../../data/devTools.json";

interface RadarProps {
    currentState: string
}

export const RChart = ({currentState}: RadarProps) => {

    const skillToRender = currentState === "language" ? languages:
                          currentState === "devTools" ? devTools:
                          currentState === "frameWorks" ? frameworks:
                          languages;
    return (
        <RadarChart height={500} width={500}
        outerRadius="80%" data={skillToRender}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="years" stroke='red' fill='green' fillOpacity={0.25} />
        </RadarChart>
    );
}