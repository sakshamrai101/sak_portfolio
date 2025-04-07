import { useState } from "react";
import experiences from "../../data/experiences.json"; // Adjust path
import TimelineItem from "./TimelineItem";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
    name: string;
    description: string;
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
            className="relative w-full py-20 px-12"
            style={{ fontFamily: '"Borel", "cursive"' }}
        >

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-45 gap-y-35">
                {experiences.map((item: Experience, index: number) => (
                    <div key={index} className="relative">
                        <TimelineItem
                            item={item}
                            isOpen={openIndex === index}
                            onToggle={() => toggleDropdown(index)}
                            index={index}
                        />

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-80 p-4 rounded-2xl shadow-2xl border border-white/10 bg-gradient-to-br bg-blue-500 backdrop-blur-lg text-black z-10"
                                >
                                    <h3 className="font-bold text-lg mb-2 text-center text-white drop-shadow">
                                        {item.time}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-white -800">
                                        {item.description}
                                    </p>
                                </motion.div>

                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
