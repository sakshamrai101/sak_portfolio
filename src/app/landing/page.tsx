"use client";

import { Navbar } from "../components/Navbar";
import "../global.css";
import React from "react";
import mainLogo from "../../../public/assets/mainLogo.png";
import TypewriterText from "../components/TypewriterText";

export default function LandingPage () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500">
            <Navbar />

            <div className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-10 h-full gap-40">

                <div className="flex flex-col justify-center items-center text-white w-full md:w-1/2 space-y-60" style={{ fontFamily: `"Borel", "cursive"` }}>
                    <div className="text-white space-y-2 h-full items-start px-75 w-full">
                        <TypewriterText
                            lines={["Hi, I am Saksham", "Software Engineer"]}
                            speed={75}
                        />

                        <p
                            className="text-lg md:text-xl font-bold text-white animate-pulse"
                            style={{ fontFamily: `"Borel", cursive` }}
                        >
                            Math, CS and AI @ UCSD 2024
                        </p>
                        <button className="mt-3 px-2 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-all-duration-300">
                            Contact Me
                        </button>
                    </div>
                </div>

                <div className="w-50 md:w-1/3 flex justify-center mt-10 md:mt-0">
  {/* Spotlight background */}
  <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-radial from-white/20 to-transparent blur-3xl animate-pulse-slow z-0" />

  {/* Logo itself */}
  <img
    src={mainLogo.src}
    alt="Main Logo"
    className="relative z-10 w-52 h-52 md:w-80 md:h-80 object-contain animate-bounce drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
  />
                </div>
            </div>
        </div>
    );
}