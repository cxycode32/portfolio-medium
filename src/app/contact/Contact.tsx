"use client"

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Contact.css'

export const Contact: React.FC = () => {
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

    return (
        <main className='flex justify-center'>
            <div className='item-wrapper'>
                <div className='caption'>
                    <h2 className='text-3xl font-semibold text-center'>
                        Get In Touch
                        <br />
                        Let&#8217;s Work
                        <span>Together&#33;</span>
                    </h2>
                </div>
                <div className='about-image flex justify-center'>
                    <Image
                        src="https://wpriverthemes.com/HTML/uniiq/assets/images/contact.png"
                        alt="img"
                        width={200}
                        height={200}
                        className='image'
                    />
                </div>
                <div className='form-content row justify-between'>
                    <form
                        className='flex flex-col col-md-6 aos-init aos-animate'
                        method='POST'
                        action='../assets/js/mailer.php'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div
                            className='alert alert-success messenger-box-contact__msg'
                            style={{
                                display: 'none'
                            }}
                            role='alert'
                        ></div>
                        <input placeholder='Name' name='name' id='full-name'></input>
                        <input placeholder='Email' name='email' id='email'></input>
                        <input placeholder='Subject' name='subject' id='subject'></input>
                        <textarea placeholder='Message' name='message'></textarea>
                        <button type='submit'>SEND</button>
                    </form>
                    <div
                        className='para col-md-5 aos-init aos-animate'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <p>
                            Thank you for your interest in reaching out to us. We welcome inquiries, feedback,
                            collaboration opportunities you may have. Please feel free to get in touch with us using the
                            contact detail information provided below. We look forward to hearing from you!
                        </p>
                        <p>
                            Connect with us on social media for updates, inspiration, and insights. You can find us on
                            facebook at uniiq. We encourage you to follow, engage, and share our content. We love
                            hearing from our community!
                        </p>
                    </div>
                </div>
                <footer className='row justify-between'>
                    <div
                        className='reach col-md-3 aos-init aos-animate'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className='phone'>Phone</div>
                        <div>
                            &#43;&nbsp;1&#8722;987&#8722;654&#8722;300
                            <br/>
                            &#43;&nbsp;1&#8722;923&#8722;654&#8722;800
                        </div>
                    </div>
                    <div
                        className='reach col-md-3 aos-init aos-animate'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className='email'>Email</div>
                        <div>
                            bluebase@gmail.com
                            <br/>
                            bluebasesupport@gmail.com
                        </div>
                    </div>
                    <div
                        className='reach col-md-3 aos-init aos-animate'
                        data-aos='fade-up'
                        data-aos-duration='1500'
                    >
                        <div className='address'>Address</div>
                        <div>
                            31st Avenue&#44;&nbsp;Downtown
                            <br/>
                            754/18 New Jersey&#44;&nbsp;United States
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}