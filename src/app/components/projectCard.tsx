"use client";
import { GitHub, Heart, Link } from "react-feather";
import "../global.css";

interface projectProps {
    title: string,
    description: string,
    img: string,
    link: string,
    techStack: string | undefined
}


export const ProjectCard = (props: projectProps) => {
    return (
        <div 
            className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group"
        >
            <img 
                src={props.img}
                alt=""
                className="transition-transform group-hover:scale-110 duration-200"
            />
            <h3 className="text-xl font-bold mb-2">{props.title}</h3>
            <div 
                className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <div className="p-4 text-white">
                    <p>
                        {props.description}
                    </p>
                
                <div className="space-x-4 mt-4">
                    <button className="btn">
                        <Link href={props.link}/>
                    </button>
                </div>
                    <p>{props.techStack}</p>
                </div>
            </div>
        </div>
    );
};
