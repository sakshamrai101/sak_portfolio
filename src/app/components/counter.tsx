"use client";
import {useState} from "react";


export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <button className="color-red" onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    );
};