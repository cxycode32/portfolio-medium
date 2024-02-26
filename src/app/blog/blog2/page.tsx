import { Cursor } from "@/app/components/cursor/Cursor";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { MailButton } from "@/app/components/mail/MailButton";
import { Ticker } from "@/app/components/ticker/Ticker";
import { SlidesProps, DetailsProps, ParaProps, Blog } from "../Blog";

export default function BlogPage1() {

    const slidesItems: SlidesProps[] = [
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp2c.png",
            alt: "img1"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp2r.png",
            alt: "img2"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp2l.png",
            alt: "img3"
        },
    ]

    const detailsItems: DetailsProps[] = [
        {
            title: "Year",
            subtitle: "2022"
        },
        {
            title: "Author",
            subtitle: "Bombrader"
        },
        {
            title: "Category",
            subtitle: "Blog"
        },
        {
            title: "Service",
            subtitle: "Negative"
        },
    ]

    const paraItems: ParaProps[] = [
        {
            para: "We start our journey by tracing the origins of the Big Four. These firms, namely Deloitte, Pricewater house Coopers (PwC), Ernst & Young (EY), and KPMG, have roots dating back over a century. We'll explore the fascinating stories of their founders, the mergers and acquisitions that led to their establishment, and how they grew into the giants they are today."
        },
        {
            para: "The Big Four provide an extensive range of services that go beyond traditional accounting. We'll dive into the diverse offerings these firms bring to the table, such as audit and assurance, tax advisory, management consulting, risk assessment, financial advisory, and more. Understanding the breadth and depth of their services will shed light on how they navigate the complex needs of their clients.Additionally, we'll discuss the challenges and opportunities that arise from their international operations and how they adapt to diverse business environments."
        },
        {
            para: "The influence of the Big Four extends far beyond the accounting world. We'll uncover their significant role in shaping industries across the board, from finance and technology to healthcare and energy. We'll delve into case studies and examples that highlight how their expertise and guidance have transformed businesses, driven innovation, and impacted economies on a global scale."
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
                caption="BIG FOUR"
                slides={slidesItems}
                details={detailsItems}
                para1="In the business landscape, there are a few names that stand out prominently, representing immense influence, global reach, and unrivaled expertise. Known as the Big Four, these four accounting and professional services firms have established themselves as the industry's powerhouses. In this blog post, we will delve into the world of the Big Four, exploring their history, services, and the significant role they play in shaping the business world. In this blog post, we will delve into the world of the Big Four, exploring their history, services, and the significant role they play in shaping the business world."
                para2={paraItems}
            />
            <MailButton />
            <Footer />
        </div>
    );
}
