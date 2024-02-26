"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css';
// or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';
// or only core styles
import '@splidejs/react-splide/css/core';
import './Blog.css'

export interface SlidesProps {
    src: string,
    alt: string,
}

export interface DetailsProps {
    title: string,
    subtitle: string,
}

export interface ParaProps {
    para: string,
}

interface BlogProps {
    caption: string,
    slides: SlidesProps[],
    details: DetailsProps[],
    para1: string,
    para2: ParaProps[],
}

export const Blog: React.FC<BlogProps> = ({ caption, slides, details, para1, para2 }) => {
    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,

            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom'
        })
    }, [])

    const options = {
        type: 'loop',
        autoplay: true,
        interval: 3000,
        pauseOnHover: false,
        resetProgress: false,
    }

    const words = caption.split(' ');
    const lastWord = words.pop();
    const firstPart = words.join(' ');

    const slidesItems: SlidesProps[] = slides;

    const detailsItems: DetailsProps[] = details

    const paraItems: ParaProps[] = para2

    return (
        <main>
            <div className='item-wrapper'>
                <div className='caption flex justify-center'>
                    <h2 className='font-semibold text-center'>
                        {firstPart}&nbsp;
                        <span>{lastWord}</span>
                    </h2>
                </div>
                <Splide
                    aria-label="carousel"
                    options={options}
                    hasTrack={false}
                    className="slider"
                >
                    <div style={{ position: 'relative' }}>
                        <SplideTrack className="splide-track">
                            {slidesItems.map((slide, index) => (
                                <SplideSlide key={index} className="splide-slide">
                                    <img src={slide.src} alt={slide.alt} className='slide' />
                                </SplideSlide>
                            ))}
                        </SplideTrack>
                    </div>
                </Splide>
                <div className='blContent flex justify-center'>
                    <div className='blContent-wrapper'>
                        <div className='det_des text-base font-semibold'>
                            <div
                                className='details aos-init aos-animate'
                                data-aos='fade-up'
                                data-aos-duration='1000'
                            >
                                {detailsItems.map((detail, index) => (
                                    <div key={index} className='detail-items'>
                                        <p>{detail.title}</p>
                                        <p className='font-medium'>{detail.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className='description aos-init aos-animate'
                                data-aos='fade-up'
                                data-aos-duration='1000'
                            >
                                <h3 className='text-base font-semibold'>Description</h3>
                                <p className='text-base font-medium'>
                                    {para1}
                                </p>
                            </div>
                        </div>
                        <div className='para'>
                            {paraItems.map((para, index) => (
                                <p
                                    key={index}
                                    data-aos='fade-up'
                                    data-aos-duration='1000'
                                    className='aos-init aos-animate text-base font-medium text-justify'
                                >
                                    {para.para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}