"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Main.css'

interface mainItemProps {
    href: string,
    layout: string,
    dataWord: string,
    img: string,
    alt: string,
    dataHover: string,
    text: string,
    textStyle: string,
    aosStyle?: string,
    aosDuration?: string
}

export const Main: React.FC = () => {
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

    const mainItem: mainItemProps[] = [
        {
            href: "./project-page2.html",
            layout: "portrait",
            dataWord: "PROJECT SEVEN",
            img: "/images/h-1.png",
            alt: "img1",
            dataHover: "01/PROJECT SEVEN",
            text: "PROJECT SEVEN",
            textStyle: ""
        },
        {
            href: "./blog-single5.html",
            layout: "landscape",
            dataWord: "ARCHIFACT",
            img: "/images/h-2.png",
            alt: "img2",
            dataHover: "02/ARCHIFACT",
            text: "ARCHIFACT",
            textStyle: "text-sm-end"
        },
        {
            href: "./project-page4.html",
            layout: "landscape",
            dataWord: "CODY FIVE",
            img: "/images/h-3.png",
            alt: "img3",
            dataHover: "03/CODY FIVE",
            text: "CODY FIVE",
            textStyle: "",
            aosStyle: "fade-up",
            aosDuration: "1000"
        },
        {
            href: "./project-page3.html",
            layout: "portrait",
            dataWord: "UNITERM S",
            img: "/images/h-4.png",
            alt: "img4",
            dataHover: "04/UNITERM S",
            text: "UNITERM S",
            textStyle: "text-sm-end",
            aosStyle: "fade-left",
            aosDuration: "1000"
        },
        {
            href: "./blog-single6.html",
            layout: "landscape",
            dataWord: "MINUTES X",
            img: "/images/h-5.png",
            alt: "img5",
            dataHover: "05/MINUTES X",
            text: "MINUTES X",
            textStyle: "",
            aosStyle: "fade-right",
            aosDuration: "1000"
        },
        {
            href: "./project-page1.html",
            layout: "portrait",
            dataWord: "SHADOW COM",
            img: "/images/h-6.png",
            alt: "img6",
            dataHover: "06/SHADOW COM",
            text: "SHADOW COM",
            textStyle: "",
            aosStyle: "fade-up",
            aosDuration: "1000"
        },
        {
            href: "./blog-single5.html",
            layout: "landscape",
            dataWord: "BOMBRADER",
            img: "/images/h-7.png",
            alt: "img7",
            dataHover: "07/BOMBRADER",
            text: "BOMBRADER",
            textStyle: "text-sm-end",
            aosStyle: "fade-left",
            aosDuration: "1000"
        }
    ]

    return (
        <main className='flex justify-center'>
            <div className='item-wrapper'>
                {mainItem.map((item, index) => (
                    item.aosStyle ? (
                        <div key={index}
                            className='items aos-init aos-animation'
                            data-aos={item.aosStyle}
                            data-aos-duration={item.aosDuration}
                        >
                            <a href={item.href}>
                                <div className={`image ${item.layout}`} data-word={item.dataWord}>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        width={100}
                                        height={100}
                                        className='image-animation'
                                        objectFit='cover'
                                        priority
                                    />
                                </div>
                                <div className='project-name'>
                                    <p className={`text-lg font-medium tracking-widest ${item.textStyle}`} data-hover={item.dataHover}>
                                        {item.text}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ) : (
                        <div key={index} className='items'>
                            <a href={item.href}>
                                <div className={`image ${item.layout}`} data-word={item.dataWord}>
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        width={100}
                                        height={100}
                                        className='image-animation'
                                        objectFit='cover'
                                        priority
                                    />
                                </div>
                                <div className='project-name'>
                                    <p className={`text-lg font-medium tracking-widest ${item.textStyle}`} data-hover={item.dataHover}>
                                        {item.text}
                                    </p>
                                </div>
                            </a>
                        </div>
                    )
                ))}
            </div>
        </main>
    )
}