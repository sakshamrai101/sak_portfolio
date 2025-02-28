"use client";
import React from 'react';
import { Radar, 
         RadarChart, 
         PolarGrid, 
         PolarAngleAxis, 
         PolarRadiusAxis, } from 'recharts';

import languages from "@/data/languages.json";

export const RChart = () => {


    return (
        <RadarChart height={500} width={500}
        outerRadius="80%" data={languages}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="value" stroke='green' fill='green' fillOpacity={0.5} />
        </RadarChart>
    );
}