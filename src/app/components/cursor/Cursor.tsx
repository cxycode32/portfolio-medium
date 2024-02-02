"use client"

import { useState, useEffect } from 'react'
import './Cursor.css'

export const Cursor: React.FC = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener('mousemove', updatePosition);

        return (() => {
            document.removeEventListener('mousemove', updatePosition);
        });
    }, [position]);

    // useEffect(() => {
    //     console.log("TESTING 1", position);
    // }, [position]);

    return (
        <div className='cursor-container'>
            <div className="cursor"></div>
            <div className="dot"></div>
        </div>
    )
}