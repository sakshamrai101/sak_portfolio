import { useState } from "react";
import experiences from "../../data/experiences.json";
import TimelineItem from "./TimelineItem";
import { motion, AnimatePresence } from "framer-motion";

// Updated to reflect new description format
interface Experience {
    name: string;
    description: string[]; // now an array of bullet points
    src: string;
    time: string;
}

const Timeline: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div
            className="relative w-full max-w-full py-10 px-4 sm:px-6 md:px-12 overflow-x-hidden"
            
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-30 sm:gap-6 md:gap-8">
                {experiences.map((item: Experience, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative"
                    >
                        <TimelineItem
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => toggleDropdown(index)}
                            index={index}
                        />

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-full mt-1 left-1/2 -translate-x-1/2 w-[90vw] sm:w-72 p-4 rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br from-blue-500 to-blue-600 backdrop-blur-lg text-white z-10"

                                >
                                    <h3 className="font-bold text-lg mb-2 text-center drop-shadow">
                                        {item.time}
                                    </h3>
                                    <ul className="list-disc list-inside text-sm space-y-1">
                                        {item.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
