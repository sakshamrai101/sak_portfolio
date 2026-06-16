"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = ["backend", "full-stack", "AI"];

export default function HeroHeadline() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev: number) => (prev + 1) % ROLES.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug"
            style={{ fontFamily: `"Borel", cursive` }}
        >
            Building{" "}
            <span className="relative inline-block align-baseline">
                <span className="invisible select-none" aria-hidden="true">
                    full-stack
                </span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={ROLES[roleIndex]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute left-0 top-0 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
                    >
                        {ROLES[roleIndex]}
                    </motion.span>
                </AnimatePresence>
            </span>{" "}
            systems that scale.
        </motion.h1>
    );
}
