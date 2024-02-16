"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import { CircleProps, Circle } from '../components/percentage/Circle'
import { BarProps, Bar } from '../components/percentage/Bar'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Skills.css'

export const Skills: React.FC = () => {
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

    const circleItems: CircleProps[] = [
        {
            dataCircle: 75,
            dataColor1: "#525252",
            dataColor2: "#D7B065",
            progressValue: "75%",
            circleText: "PHOTOGRAPHY"
        },
        {
            dataCircle: 55,
            dataColor1: "#525252",
            dataColor2: "#D7B065",
            progressValue: "55%",
            circleText: "BRANDING"
        },
        {
            dataCircle: 70,
            dataColor1: "#525252",
            dataColor2: "#D7B065",
            progressValue: "70%",
            circleText: "DESIGNING"
        },
        {
            dataCircle: 65,
            dataColor1: "#525252",
            dataColor2: "#D7B065",
            progressValue: "65%",
            circleText: "DEVELOPING"
        }
    ]

    const barItems: BarProps[] = [
        {
            label: "HTML / CSS",
            percent: 80
        },
        {
            label: "Figma",
            percent: 90
        },
        {
            label: "Java",
            percent: 60
        },
        {
            label: "Photography",
            percent: 75
        },
        {
            label: "Branding",
            percent: 85
        },
    ]

    return (
        <main className='flex justify-center'>
            <div className='item-wrapper'>
                <div className='skill1 row justify-between'>
                    <div className='skill1-image align-self-md-center col-md-5'>
                        <Image
                            src="https://wpriverthemes.com/HTML/uniiq/assets/images/skill1.png"
                            alt="img"
                            width={100}
                            height={100}
                            className='image'
                        />
                    </div>
                    <div className='skill1-list row gap-[50px] justify-between items-center col-md-6'>
                        {circleItems.map((item, index) => (
                            <Circle
                                key={index}
                                dataCircle={item.dataCircle}
                                dataColor1={item.dataColor1}
                                dataColor2={item.dataColor2}
                                progressValue={item.progressValue}
                                circleText={item.circleText}
                            />
                        ))}
                    </div>
                </div>
                <div className='blContent'>
                    <div className='blContent-wrapper'>
                        <div
                            className='para aos-init aos-animate'
                            data-aos='zoom-in'
                            data-aos-duration='1000'
                        >
                            <p>
                                Technical skills are specific abilities that are related to a particular field or
                                industry. This section explores the importance of technical skills in today&#8217;s digital
                                age and provides insights into mastering relevant tools and technologies. Whether you&#8217;re
                                a programmer, designer, engineer, or marketer, discover the key technical skills that
                                can give you a competitive edge in your chosen profession.
                            </p>
                            <p>
                                The Skills page serves as a comprehensive resource for exploring and developing key
                                competencies that can propel you to success. By investing in your skills and
                                continuously expanding your abilities, you have the power to unlock new opportunities,
                                overcome challenges, and achieve remarkable outcomes. Embrace the journey of skill
                                development, and witness how these competencies become the foundation of your personal
                                and professional growth.Discover how to embrace curiosity, cultivate a growth mindset,
                                and unleash your creative potential in various domains.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='skill2 row justify-between'>
                    <div className='skill2-list self-center'>
                        {barItems.map((item, index) => (
                            <Bar
                                key={index}
                                label={item.label}
                                percent={item.percent}
                            />
                        ))}
                    </div>
                    <div
                        className='skill2-image aos-init aos-animate'
                        data-aos='fade-left'
                        data-aos-duration='1000'
                    >
                        <Image
                            src="https://wpriverthemes.com/HTML/uniiq/assets/images/skill2.png"
                            alt="img"
                            width={500}
                            height={500}
                            className='image'
                        />
                    </div>
                </div>
                <div className='blContent'>
                    <div className='blContent-wrapper'>
                        <div
                            className='para aos-init aos-animate'
                            data-aos='fade-up'
                            data-aos-duration='1000'
                        >
                            <p>
                                In today&#8217;s fast-paced and ever-changing world, adaptability and resilience are critical
                                skills to navigate through challenges and uncertainties. Learn how to embrace change,
                                think creatively, and thrive in dynamic environments. Explore strategies for managing
                                stress, bouncing back from setbacks, and maintaining a positive mindset in the face of
                                adversity.Critical thinking and problem-solving skills are highly sought-after abilities
                                across industries. This section explores techniques for analyzing complex situations,
                                evaluating information, and making sound decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}