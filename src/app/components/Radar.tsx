"use client";
import React from 'react';
import { Radar, 
         RadarChart, 
         PolarGrid, 
         PolarAngleAxis, 
         PolarRadiusAxis, } from 'recharts';

interface RadarProps {
    item: {
        name: string
        years: number
    }
}

export const RChart = ({item}: RadarProps) => {
    return (
        <RadarChart height={500} width={500}
        outerRadius="80%" data={[item]}>
            <PolarGrid />
            <PolarAngleAxis dataKey={item.name} />
            <PolarRadiusAxis />
            <Radar dataKey={item.years} stroke='black' fill='black' fillOpacity={1} />
        </RadarChart>
    );
}