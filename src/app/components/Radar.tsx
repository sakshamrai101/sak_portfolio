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
        <RadarChart 
            height={500} width={500}
            outerRadius="70%"
            data={skillToRender}
            className='drop-shadow-lg'>


            <PolarGrid stroke="white" strokeOpacity={1.5} strokeWidth={2.5}/>


            <PolarAngleAxis dataKey="name" tick={{ fill: "white", fontSize: 14, fontWeight: "bold", fontFamily: '"Borel", cursive'}} tickCount={5}/>


            <PolarRadiusAxis axisLine={false} tick={{ fill: "white", fontSize: 12, fontFamily: '"Borel", cursive'}} tickCount={5} />


            <Radar dataKey="years" stroke="green" fill="green" fillOpacity={0.3} strokeWidth={2.5} />
        </RadarChart>
    );
}