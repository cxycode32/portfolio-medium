import { Cursor } from "@/app/components/cursor/Cursor";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { MailButton } from "@/app/components/mail/MailButton";
import { Ticker } from "@/app/components/ticker/Ticker";
import { SlidesProps, DetailsProps, ParaProps, Blog } from "../Blog";

export default function BlogPage1() {

    const slidesItems: SlidesProps[] = [
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp4c.png",
            alt: "img1"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp4r.png",
            alt: "img2"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp4l.png",
            alt: "img3"
        },
    ]

    const detailsItems: DetailsProps[] = [
        {
            title: "Year",
            subtitle: "2020"
        },
        {
            title: "Author",
            subtitle: "Team One"
        },
        {
            title: "Category",
            subtitle: "Blog"
        },
        {
            title: "Service",
            subtitle: "Embelem"
        },
    ]

    const paraItems: ParaProps[] = [
        {
            para: "Creative problem solving involves breaking free from conventional thinking patterns. We'll discuss the value of thinking outside the box, challenging assumptions, and exploring unconventional approaches. By encouraging ourselves to think beyond boundaries, we can discover innovative solutions that may have previously seemed impossible."
        },
        {
            para: "No man is an island, and the same holds true for problem solving. Collaboration and diverse perspectives are powerful tools in finding a way out of seemingly insurmountable situations. We'll explore the benefits of teamwork, brainstorming sessions, and seeking input from different disciplines and backgrounds. Through collaboration, we can tap into a collective intelligence that sparks fresh ideas and new perspectives.By encouraging ourselves to think beyond boundaries, we can discover innovative solutions that may have previously seemed impossible."
        },
        {
            para: "Failure is often seen as a dead-end, but in reality, it's a stepping stone towards success. We'll discuss the importance of embracing failure, learning from mistakes, and iterating on ideas. By viewing failures as valuable feedback and opportunities for growth, we can refine our problem-solving approach and uncover unexpected solutions."
        },
    ]

    return (
        <div
            id="portfolioDetail"
            className="content"
            style={{
                display: "block"
            }}
        >
            <Cursor />
            <Ticker />
            <Header />
            <Blog
                caption="NO WAY OUT"
                slides={slidesItems}
                details={detailsItems}
                para1="In life, we often encounter situations where it feels like there's no way out. Whether it's a personal challenge, a professional hurdle, or a creative roadblock, the feeling of being trapped can be overwhelming. However, it's important to remember that there is always a solution waiting to be discovered. In this blog, we will delve into the power of creative problem solving and how it can help us find our way when it seems like there is no way out.identifying its root causes, and gaining a comprehensive perspective. By accepting the situation and acknowledging its complexities, we set the stage for creative problem solving."
                para2={paraItems}
            />
            <MailButton />
            <Footer />
        </div>
    );
}
