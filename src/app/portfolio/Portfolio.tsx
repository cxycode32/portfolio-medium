"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Portfolio.css'

interface articleItemProps {
    href: string,
    img: string,
    alt: string,
    title: string,
    aos?: string,
    duration?: string,
    subtitle: string,
    aos2?: string,
}

export const Portfolio: React.FC = () => {
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

    const articleItem: articleItemProps[] = [
        {
            href: "../blog/blog1",
            img: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1c.png",
            alt: "img1",
            title: "01/ AROUND THE WORLD",
            subtitle: "MARCH 16, 2023",
        },
        {
            href: "../blog/blog2",
            img: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp2c.png",
            alt: "img2",
            title: "02/ BIG FOUR",
            aos: "fade-right",
            duration: "1000",
            subtitle: "APRIL 09, 2023",
            aos2: "fade-left",
        },
        {
            href: "../blog/blog3",
            img: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp3c.png",
            alt: "img3",
            title: "03/ IN THE TOP",
            aos: "fade-right",
            duration: "1000",
            subtitle: "MAY 06, 2023",
            aos2: "fade-left",
        },
        {
            href: "../blog/blog4",
            img: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp4c.png",
            alt: "img4",
            title: "04/ NO WAY OUT",
            aos: "fade-right",
            duration: "1000",
            subtitle: "JUNE 24, 2023",
            aos2: "fade-left",
        },
    ]

    return (
        <main className='flex justify-center'>
            <div className='item-wrapper'>
                <div className='articles'>
                    {articleItem.map((item, index) => (
                        <a key={index} href={item.href}>
                            <article className='flex'>
                                <div className='image-wrapper flex'>
                                    <div className='hover-img'>
                                        <Image
                                            src={item.img}
                                            alt={item.alt}
                                            width={200}
                                            height={200}
                                            className='article-img'
                                        />
                                    </div>
                                    {item.aos ? (
                                        <h1
                                            className='aos-init aos-animate'
                                            data-aos={item.aos}
                                            data-aos-duration={item.duration}
                                        >
                                            {item.title}
                                        </h1>
                                    ) : (
                                        <h1>
                                            {item.title}
                                        </h1>
                                    )}
                                </div>
                                <div className='subtitle-wrapper overflow-hidden'>
                                    {item.aos ? (
                                        <span
                                            className='aos-init aos-animate'
                                            data-aos={item.aos2}
                                            data-aos-duration={item.duration}
                                        >
                                            {item.subtitle}
                                        </span>
                                    ) : (
                                        <span data-hover={item.subtitle}>
                                            {item.subtitle}
                                        </span>
                                    )}
                                </div>
                            </article>
                        </a>
                    ))}
                </div>
            </div>
        </main>
    )
}