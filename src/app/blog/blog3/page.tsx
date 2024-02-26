import { Cursor } from "@/app/components/cursor/Cursor";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { MailButton } from "@/app/components/mail/MailButton";
import { Ticker } from "@/app/components/ticker/Ticker";
import { SlidesProps, DetailsProps, ParaProps, Blog } from "../Blog";

export default function BlogPage1() {

    const slidesItems: SlidesProps[] = [
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp3c.png",
            alt: "img1"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp3r.png",
            alt: "img2"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp3l.png",
            alt: "img3"
        },
    ]

    const detailsItems: DetailsProps[] = [
        {
            title: "Year",
            subtitle: "2025"
        },
        {
            title: "Author",
            subtitle: "Sembors"
        },
        {
            title: "Category",
            subtitle: "Blog"
        },
        {
            title: "Service",
            subtitle: "Lemonis"
        },
    ]

    const paraItems: ParaProps[] = [
        {
            para: "In this blog post, we explore the concept of a growth mindset and how it can transform your life. Discover how to embrace challenges, overcome obstacles, and view failures as stepping stones to success. Learn powerful techniques to develop resilience, embrace continuous learning, and unlock your full potential."
        },
        {
            para: "Success is often the result of consistent positive habits. In this article, we uncover the secrets to building and maintaining habits that propel you towards your goals. Explore strategies for effective time management, habit formation, and creating a productive daily routine that maximizes your efficiency and accelerates your progress.Self-discipline is a key trait possessed by high achievers. In this blog post, we delve into the art of self-discipline and self-control. Discover techniques to overcome procrastination, eliminate distractions, and stay focused on your priorities. Unlock the ability to make consistent progress and achieve remarkable results."
        },
        {
            para: "Success is not solely an individual pursuit; it's also about building meaningful connections. In this article, we discuss the importance of nurturing relationships and creating a supportive network. Discover the art of networking, effective communication, and building strong relationships that contribute to your success."
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
                caption="IN THE TOP"
                slides={slidesItems}
                details={detailsItems}
                para1="Welcome to In the Top, a blog dedicated to unraveling the secrets behind achieving success in various aspects of life. Whether it's personal development, career growth, or pursuing your passions, this blog is your guide to reaching new heights. Get ready to explore the strategies, insights, and inspirational stories that will empower you to elevate your life and emerge at the top. In the first article, we dive into the importance of setting clear and meaningful goals. Learn how to identify your passions, define your objectives, and create a roadmap that will guide you towards success."
                para2={paraItems}
            />
            <MailButton />
            <Footer />
        </div>
    );
}
