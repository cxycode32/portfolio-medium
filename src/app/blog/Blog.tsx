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

interface SlidesProps {
    src: string,
    alt: string,
}

interface DetailsProps {
    title: string,
    subtitle: string,
}

export const Blog: React.FC = () => {
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
        interval: 2000,
        pauseOnHover: false,
        resetProgress: false,
    }

    const slidesItems: SlidesProps[] = [
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1c.png",
            alt: "img1"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1r.png",
            alt: "img2"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1l.png",
            alt: "img3"
        },
    ]

    const detailsItems: DetailsProps[] = [
        {
            title: "Year",
            subtitle: "2023"
        },
        {
            title: "Author",
            subtitle: "Al Ashfaq"
        },
        {
            title: "Category",
            subtitle: "Blog"
        },
        {
            title: "Service",
            subtitle: "Hype Solutions"
        },
    ]

    return (
        <main>
            <div className='item-wrapper'>
                <div className='caption flex justify-center'></div>
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
                                        <p>{detail.subtitle}</p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className='description aos-init aos-animate'
                                data-aos='fade-up'
                                data-aos-duration='1000'
                            >

                            </div>
                        </div>
                        <div className='para'></div>
                    </div>
                </div>
            </div>
        </main>
    )
}