"use client";

import { useState, useEffect } from "react";
import house from "../../../public/assets/home.png";
import about from "../../../public/assets/about_me.png";
import work from "../../../public/assets/briefcase.png";
import portfolio from "../../../public/assets/projects.png";
import mail from "../../../public/assets/mail.png";
import linkedIn from "../../../public/assets/linkedin.png";
import twitter from "../../../public/assets/twitter.png";
import github from "../../../public/assets/github.png";
import instagram from "../../../public/assets/instagram.png";
import Link from "next/link";

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
    }, [isMobileOpen]);

    const sidebarLinks = [
        { id: "home", src: house.src, label: "Landing", href: "/landing" },
        { id: "about", src: about.src, label: "About Me", href: "/about" },
        { id: "work", src: work.src, label: "Work Ex.", href: "/work" },
        { id: "portfolio", src: portfolio.src, label: "Portfolio", href: "/portfolio" },
        { id: "mail", src: mail.src, label: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { id: "linkedin", src: linkedIn.src, label: "LinkedIn", href: "https://www.linkedin.com/in/saksham-rai-4477431ab/" },
        { id: "twitter", src: twitter.src, label: "Twitter", href: "https://x.com/sakshamrai2001" },
        { id: "github", src: github.src, label: "Github", href: "https://github.com/sakshamrai101" },
        { id: "instagram", src: instagram.src, label: "Instagram", href: "https://www.instagram.com/sakshamrai101/" },
    ];

    return (
        <div className="relative">
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Mobile Toggle Button */}
            <button
                className="sm:hidden fixed top-4 left-5 z-50 p-2 bg-gray-800 text-white rounded-md shadow-lg"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                ☰
            </button>

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 z-40 h-screen bg-gray-800 dark:bg-gray-700 overflow-y-auto
                    transition-all duration-300 ease-in-out
                    ${isMobileOpen ? "w-64" : isExpanded ? "w-40" : "w-0 sm:w-16"}
                `}
                onMouseEnter={() => !isMobileOpen && setIsExpanded(true)}
                onMouseLeave={() => !isMobileOpen && setIsExpanded(false)}
                style={{ fontFamily: '"Borel", cursive' }}
            >
                <div className="h-full flex flex-col justify-between">
                    {/* Top Logo */}
                    <div className="p-4 hidden sm:block">
                        <img
                            src="/assets/mainLogo.png"
                            alt="Logo"
                            className={`animate-bounce transition-all duration-300 ${isExpanded ? "w-24" : "w-8"}`}
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col justify-center grow px-2">
                        <ul className="space-y-2 font-medium text-white">
                            {sidebarLinks.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        className="flex whitespace-nowrap items-left p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                                    >
                                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                                        <span className={`ms-3 transition-all duration-200 ${isExpanded || isMobileOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                                            {item.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="px-2 pb-4">
                        <ul className="space-y-2 font-medium text-white pt-4">
                            {socialLinks.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex relative items-center p-2 rounded-lg hover:bg-gray-700 transition-all duration-200"
                                    >
                                        <img src={item.src} alt={item.label} className="w-6 h-6" />
                                        <span className={`ms-3 transition-all duration-200 ${isExpanded || isMobileOpen ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
                                            {item.label}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
};
