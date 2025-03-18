"use client";

import { useState } from "react";
import house from "../../assets/home.png";
import about from "../../assets/about_me.png";
import work from "../../assets/briefcase.png";
import portfolio from "../../assets/projects.png";
import mail from "../../assets/mail.png";
import linkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null); // Track hovered icon

    // Sidebar Items
    const sidebarLinks = [
        { id: "home", src: house.src, label: "Home" },
        { id: "about", src: about.src, label: "About Me" },
        { id: "work", src: work.src, label: "Work" },
        { id: "portfolio", src: portfolio.src, label: "Portfolio" },
        { id: "mail", src: mail.src, label: "Contact Me" },
    ];

    // Social Links
    const socialLinks = [
        { id: "linkedin", src: linkedIn.src, label: "LinkedIn" },
        { id: "twitter", src: twitter.src, label: "Twitter" },
        { id: "github", src: github.src, label: "Github" },
        { id: "instagram", src: instagram.src, label: "Instagram" },
    ];

    return (
        <div className="relative">
            {/* Mobile Toggle Button */}
            <button
                className="sm:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-lg"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                ☰
            </button>

            {/* Hover Trigger Area for Desktop */}
            <div
                className="hidden sm:block fixed top-0 left-0 h-screen w-2 hover:w-6 bg-transparent"
                onMouseEnter={() => setIsExpanded(true)}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-screen bg-gray-900 dark:bg-gray-800 overflow-y-auto transition-all duration-300 ease-in-out ${isExpanded || isMobileOpen ? "w-64" : "w-16"
                    }`}
                onMouseLeave={() => setIsExpanded(false)}
            >
                <div className="h-full px-3 py-4 flex flex-col">
                    {/* Main Navigation */}
                    <ul className="space-y-2 font-medium text-white">
                        {sidebarLinks.map((item) => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {hoveredItem === item.id && !isExpanded ? (
                                        <span className="w-auto ml-2 text-xs text-white whitespace-nowrap">{item.label}</span>
                                    ) : (
                                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                                    )}
                                    <span className={`ms-3 transition-all duration-200 ${isExpanded || isMobileOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                                        }`}>
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Links */}
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-600 text-white">
                        {socialLinks.map((item) => (
                            <li key={item.id}>
                                <a
                                    href="#"
                                    className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                                    onMouseEnter={() => setHoveredItem(item.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {hoveredItem === item.id && !isExpanded ? (
                                        <span className="w-auto ml-2 text-xs text-white whitespace-nowrap">{item.label}</span>
                                    ) : (
                                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                                    )}
                                    <span className={`ms-3 transition-all duration-200 ${isExpanded || isMobileOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                                        }`}>
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};
