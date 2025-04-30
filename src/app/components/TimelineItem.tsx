"use client";
import React from "react";

interface Experience {
    name: string;
    description: string[];
    src: string;
    time: string;
}

interface Props {
    item: Experience;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}

const TimelineItem: React.FC<Props> = ({ item, onToggle }) => {
    return (
        <div className="relative flex flex-col items-center text-center px-4 py-6 sm:px-6 sm:py-8 max-w-sm w-full">
            <img
                src={item.src}
                alt={item.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300 cursor-pointer"
                onClick={onToggle}
            />
            <div className="mt-4 text-white font-bold text-lg sm:text-xl rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 px-3 py-2">
                {item.name}
            </div>
        </div>
    );
};

export default TimelineItem;
