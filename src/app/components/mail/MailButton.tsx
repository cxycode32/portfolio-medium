import { Mail, Dribbble, Twitter, Instagram } from 'iconoir-react'
import { ReactNode } from 'react'
import './MailButton.css'

interface contactItemProps {
    icon: ReactNode
}

export const MailButton: React.FC = () => {

    const iconSize: number = 24;

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

    return (
        <div id="connect" className="animation-spin connect-spin">
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
                            <Mail height={iconSize} width={iconSize} className='self-center' />
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