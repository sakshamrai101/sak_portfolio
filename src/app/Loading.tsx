"use client";
import React from "react";
import Image from "next/image";


export default function Loading () {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl" style={{ fontFamily: '"Borel", cursive' }}>
            <Image 
                src="/assets/loading.webp"
                alt="Loading Animation"
                width={120}
                height={120}
                className="mb-6" 
            />
            Loading...
        </div>
    );
}