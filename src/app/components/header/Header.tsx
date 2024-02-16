import Image from 'next/image'
import { Dribbble, Twitter, Instagram } from 'iconoir-react'
import { ReactNode } from 'react'
import './Header.css'

interface navItemProps {
    href: string,
    dataWord: string,
    text: string
}

interface contactItemProps {
    icon: ReactNode
}

interface leftSidebarItemProps {
    href: string,
    text: string
}

export const Header: React.FC = () => {

    const iconSize: number = 24;

    const navItem: navItemProps[] = [
        {
            href: "../../",
            dataWord: "Home",
            text: "Home"
        },
        {
            href: "../../about",
            dataWord: "About",
            text: "About"
        },
        {
            href: "../../portfolio",
            dataWord: "Portfolio",
            text: "Portfolio"
        },
        {
            href: "../../skills",
            dataWord: "Skills",
            text: "Skills"
        },
        {
            href: "../../contact",
            dataWord: "Contact",
            text: "Contact"
        },
    ]

    const contactItem: contactItemProps[] = [
        {
            icon: <Dribbble height={iconSize} width={iconSize} />,
        },
        {
            icon: <Twitter height={iconSize} width={iconSize} />,
        },
        {
            icon: <Instagram height={iconSize} width={iconSize} />,
        }
    ]

    const leftSidebarItem: leftSidebarItemProps[] = [
        {
            href: "../../",
            text: "Home"
        },
        {
            href: "../../about",
            text: "About"
        },
        {
            href: "../../portfolio",
            text: "Portfolio"
        },
        {
            href: "../../skills",
            text: "Skills"
        },
        {
            href: "../../contact",
            text: "Contact"
        }
    ]

    return (
        <header className='header flex justify-between'>
            <div id="logo">
                <a href='../../'>
                    <Image
                        src="https://wpriverthemes.com/HTML/uniiq/assets/images/dLogo.svg"
                        alt="logo"
                        width={80}
                        height={80}
                    />
                </a>
            </div>
            <nav className="left-sidebar flex self-center gap-6">
                {navItem.map((item, index) => (
                    <p key={index} className='overflow-hidden'>
                        <a href={item.href} data-word={item.dataWord}>
                            {item.text}
                        </a>
                        {index < navItem.length ?
                            <span className='line'></span>
                            :
                            ''
                        }
                    </p>
                ))}
            </nav>
            <div className="contact items-center">
                {contactItem.map((item, index) => (
                    <a key={index} href="#">
                        {item.icon}
                    </a>
                ))}
            </div>
            <div className="menu-icon-wrapper">
                <div className='menu-icon flex flex-col items-end'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='mobile-hamburger'>
                    <div className='left-sidebar'>
                        <p>Menu</p>
                        <ul>
                            {leftSidebarItem.map((item, index) => (
                                <li key={index}>
                                    <a href={item.href}>
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='social'></div>
                </div>
            </div>
        </header>
    )
}