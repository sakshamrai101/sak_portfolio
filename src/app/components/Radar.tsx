"use client";
import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer
} from 'recharts';
import frameworks from "../../data/frameWorks.json";
import languages from "../../data/languages.json";
import devTools from "../../data/devTools.json";

interface RadarProps {
    currentState: string;
}

export const RChart = ({ currentState }: RadarProps) => {
    const skillToRender =
        currentState === "language"
            ? languages
            : currentState === "devTools"
                ? devTools
                : currentState === "frameWorks"
                    ? frameworks
                    : languages;

    return (
        <div className="w-full max-w-[322px] sm:max-w-[362px] md:max-w-[502px] h-[302px] sm:h-[400px] md:h-[502px] mx-auto overflow-hidden">

            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="70%" data={skillToRender}>
                    <PolarGrid stroke="white" strokeOpacity={1.5} strokeWidth={2.5} />
                    <PolarAngleAxis
                        dataKey="name"
                        tick={{
                            fill: "white",
                            fontSize: 14,
                            fontWeight: "bold",
                        }}
                    />
                    <PolarRadiusAxis
                        axisLine={false}
                        tick={{
                            fill: "white",
                            fontSize: 12,
                        }}
                    />
                    <Radar
                        dataKey="years"
                        stroke="green"
                        fill="green"
                        fillOpacity={0.3}
                        strokeWidth={2.5}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};
