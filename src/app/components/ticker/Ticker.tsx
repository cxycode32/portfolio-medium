"use client"

import { useState, useEffect } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'
import { options } from './particles'
import './Ticker.css'

export const Ticker: React.FC = () => {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        })
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log("TESTING 2", container);
        return Promise.resolve();
    }

    const spanArray = Array.from({ length: 4 }, (_, index) => (
        <span key={index}>
            Welcome to Uniiq! We are a creative portfolio showcasing the uniqueness and diversity of our work.&nbsp;
        </span>
    ))

    return (
        <div id="ticker">
            <div id='space' className='space'>
                {/* { init && <Particles
                    id="tsparticles"
                    options={options}
                    className="tsparticles"
                    particlesLoaded={particlesLoaded}
                />} */}
            </div>
            <h2 className='marquee'>
                {spanArray}
            </h2>
        </div>
    )
}