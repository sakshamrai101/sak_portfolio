"use client";
import { Link } from "react-feather";
import "../global.css";
import react from "../../../public/assets/react.png";
import nodejs from "../../../public/assets/nodejs.png";
import nextjs from "../../../public/assets/next-js.svg";
import typescript from "../../../public/assets/ts.png";
import postgresql from "../../../public/assets/postgresql.svg";
import mongodb from "../../../public/assets/mongodb.png";
import firebase from "../../../public/assets/firebase.png";
import websocket from "../../../public/assets/websockets.png";
import onnx from "../../../public/assets/onnx.png";
import whisper from "../../../public/assets/whisper.png";
import python from "../../../public/assets/python.png";
import mysql from "../../../public/assets/mysql.png";
import php from "../../../public/assets/php.png";
import js from "../../../public/assets/js.png";
import html from "../../../public/assets/html.png";
import css from "../../../public/assets/css.png";


interface projectProps {
    title: string,
    description: string,
    img: string,
    link: string,
    techStack: string [] | undefined
}

const techIcons: { [key: string]: any } = {
    "Node.js": nodejs,
    "React": react,
    "Next.js": nextjs,
    "TypeScript": typescript,
    "PostgreSQL": postgresql,
    "MongoDB": mongodb,
    "Firebase": firebase,
    "WebSockets": websocket,
    "ONNX": onnx,
    "Whisper": whisper,
    "Python": python,
    "MySQL": mysql,
    "PHP": php,
    "JavaScript": js,
    "HTML": html,
    "CSS": css,
};



export const ProjectCard = (props: projectProps) => {
    const handleRedirect = ((propParam: string) => {
        window.location.href= propParam;
    })
    return (

        <div 
            className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group"
        >
            <img 
                src={props.img}
                alt=""
                className="transition-transform group-hover:scale-110 duration-200 w-full h-70 bg-center bg-cover rounded-lg shadow-lg"
            />
            <h3 className="text-2xl text-white font-bold my-5 items-center justify-center flex">{props.title}</h3>
            <div className="absolute inset-0 flex items-center bg-gradient-to-t from-black/30 to-transparent ">
                <div className="p-3 absolute inset-0 text-white font-semibold opacity-0 group-hover:opacity-90 group-hover:translate-y-0 translate-y-4 transition-all duration-300 bg-blue-600 z-0 group-hover:h-full">
                    
                    <div className="my-10 justify-center w-full items-center flex">
                        <p>
                            {props.description}
                        </p>
                    </div>
                
                    <div className="w-full justify-center flex">
                        {props.techStack?.map((tech) =>
                            techIcons[tech] ? (
                                <img
                                    key={tech}
                                    src={techIcons[tech]?.src}
                                    alt={tech}
                                    title={tech}
                                    className="w-10 h-10 mx-2 transition-transform duration-700 hover:rotate-180"
                                />
                            ) : (
                                <span key={tech} className="text-sm text-white/70">{tech}</span>
                            )
                        )}
                    </div>
                    <div className="space-x-4 flex mt-4 w-full justify-center items-center">
                        <button onClick={() => handleRedirect(props.link)} className="flex justify-center items-center gap-2 bg-red-600 text-white px-1 py-2 rounded-xl hover:bg-blue-700 transition" >
                            <Link href={props.link}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
