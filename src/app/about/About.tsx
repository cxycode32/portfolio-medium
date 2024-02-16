import Image from 'next/image'
import './About.css'

interface detailItemsProps {
    year: string,
    subtitle: string,
    title: string,
}

export const About: React.FC = () => {

    const eduDetailItems: detailItemsProps[] = [
        {
            year: "2004 - 2007",
            subtitle: "Bachelor Degree in Psychology",
            title: "University of California"
        },
        {
            year: "2007 - 2009",
            subtitle: "Master Degree in Designing",
            title: "University of Texas"
        },
        {
            year: "2009 - 2011",
            subtitle: "Master Degree in Psychology",
            title: "University of California"
        }
    ]

    const workDetailItems: detailItemsProps[] = [
        {
            year: "2011 - 2013",
            subtitle: "Junior UI/UX Designer",
            title: "Bluebase Technologies"
        },
        {
            year: "2013 - 2017",
            subtitle: "Senior UI/UX Designer",
            title: "Stack Solutions"
        },
        {
            year: "2017 - present",
            subtitle: "Product Designer",
            title: "Mandro Studio"
        }
    ]

    return (
        <main className='flex justify-center'>
            <div className='item-wrapper'>
                <div className='caption'>
                    <h2 className='font-semibold text-center'>
                        <span>Hello&#44;</span>
                        <br />
                        My name is Jason Williams and I am a photographer&nbsp;
                        and a senior graphic designer from New York&#46;
                    </h2>
                </div>
                <div className='about-image flex justify-center'>
                    <Image
                        src="https://wpriverthemes.com/HTML/uniiq/assets/images/about.png"
                        alt="about image"
                        width={750}
                        height={750}
                        className='image'
                        objectFit='cover'
                    />
                </div>
                <div className='blContent flex flex-col'>
                    <div className='blContent-wrapper'>
                        <div className='about-det'>
                            <div
                                className='details aos-init aos-animate'
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                {eduDetailItems.map((item, index) => (
                                    <div key={index} className='detail-items'>
                                        <p>{item.year}</p>
                                        <p>{item.subtitle}</p>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div
                                className='details aos-init aos-animate'
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                {workDetailItems.map((item, index) => (
                                    <div key={index} className='detail-items'>
                                        <p>{item.year}</p>
                                        <p>{item.subtitle}</p>
                                        <p>{item.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className='para aos-init aos-animate'
                            data-aos="fade-up"
                            data-aos-duration="1500"
                        >
                            <p>
                                Welcome to uniiq! We are a creative portfolio showcasing the uniiqueness and diversity of
                                our work. Our team is passionating a about design, innovation, and pushing boundaries to
                                deliver exceptional experiences.At uniiq, we believe that every project has a story into
                                tell. Our mission is to bring those stories to life through captivating visuals,
                                intuitive user interfaces
                            </p>

                            <p>
                                With a deep understanding of user-centered design principles, we approach each project
                                with meticulous attention to detail. We do collaborate closely with our clients to truly
                                understand their vision, objectives, and target audience. By combining our expertise
                                with cutting-edge technologies and industry best practices, we create impactful
                                solutions that make a lasting impression.Our portfolio features a diverse range of
                                projects across various industries, including e-commerce, healthcare, entertainment, and
                                more. We take pride in our ability to adapt to different brand aesthetics and project
                                requirements.
                            </p>

                            <p>
                                Beyond our passion for design, we are committed to providing a seamless and enjoyable
                                client experience. We believe into the open communication, transparency, and building
                                strong relationships with our clients. We value collaboration and consider our clients
                                as partners throughout the creative journey.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}