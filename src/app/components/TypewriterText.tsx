"use client";

import React, { useEffect, useState } from "react";

interface Props {
    lines: string[];
    speed?: number;
}

export default function TypewriterText({ lines = [], speed = 85 }: Props) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentLine, setCurrentLine] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (currentLine < lines.length) {
            const current = lines[currentLine];
            if (charIndex < current.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + current[charIndex]);
                    setCharIndex((prev) => prev + 1);
                }, speed);
                return () => clearTimeout(timeout);
            } else {
                const lineBreakTimeout = setTimeout(() => {
                    if (currentLine < lines.length - 1) {
                        setDisplayedText((prev) => prev + "\n");
                        setCurrentLine((prev) => prev + 1);
                        setCharIndex(0);
                    } else {
                        setTimeout(() => {
                            setShowCursor(false);
                        }, 1000);
                    }
                }, 300);
                return () => clearTimeout(lineBreakTimeout);
            }
        }
    }, [charIndex, currentLine, lines, speed]);

    return (
        <pre
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: `"Borel", cursive` }}
        >
            {displayedText}
            <span
                className={`absolute -ml-1 ${showCursor ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-700 text-lime-400`}
            >
                █
            </span>
        </pre>
    );
}
