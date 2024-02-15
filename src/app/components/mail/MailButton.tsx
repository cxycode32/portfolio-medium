"use client"

import { Mail, Dribbble, Twitter, Instagram } from 'iconoir-react'
import { ReactNode, useState, useRef, useEffect } from 'react'
import './MailButton.css'

interface contactItemProps {
    icon: ReactNode
}

export const MailButton: React.FC = () => {

    const iconSize1: number = 20;
    const iconSize2: number = 24;

    const [isShowing, setIsShowing] = useState(false);
    const targetRef = useRef(null);

    const contactItem: contactItemProps[] = [
        {
            icon: <Dribbble height={iconSize2} width={iconSize2} className='icon' />,
        },
        {
            icon: <Twitter height={iconSize2} width={iconSize2} className='icon' />,
        },
        {
            icon: <Instagram height={iconSize2} width={iconSize2} className='icon' />,
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsShowing(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );
        console.log("TESTING 1", observer);
        console.log("TESTING 2", targetRef);
        console.log("TESTING 3", targetRef.current);
        if (targetRef.current) {
            observer.observe(targetRef.current);
            console.log("TESTING 4", observer);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
                console.log("TESTING 5", observer);
            }
        }
    }, []);

    return (
        <div
            id="connect"
            ref={targetRef}
            className={`animation-spin ${isShowing ? 'connect-spin' : ''}`}
        >
            <div className="space"></div>
            <div className="connect-content flex">
                <section>
                    <h3 className="hide4">
                        If you want to contact me&#63;
                    </h3>
                    <h3 className="hide5">
                        Let&#39;s Work Together
                    </h3>
                    <p className="hide4">
                        Based in New York but available Worldwide. Let&#39;s Talk &#58;&#41;
                    </p>
                    <p className="hide5">
                        Available all around the world&#46;
                    </p>
                </section>
                <div className="mail-btn flex items-center">
                    <div className="animated-btn">
                        <a className="button" href="mailto:themespace@mail.com">
                            <Mail height={iconSize1} width={iconSize1} className='self-center' />
                            themespace@mail.com
                        </a>
                    </div>
                    <aside className="self-center">
                        {contactItem.map((item, index) => (
                            <a key={index} href="#">
                                {item.icon}
                            </a>
                        ))}
                    </aside>
                </div>
            </div>
        </div>
    )
}