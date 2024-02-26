import { Cursor } from "@/app/components/cursor/Cursor";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { MailButton } from "@/app/components/mail/MailButton";
import { Ticker } from "@/app/components/ticker/Ticker";
import { SlidesProps, DetailsProps, ParaProps, Blog } from "../Blog";

export default function BlogPage1() {

    const slidesItems: SlidesProps[] = [
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1c.png",
            alt: "img1"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1r.png",
            alt: "img2"
        },
        {
            src: "https://wpriverthemes.com/HTML/uniiq/assets/images/bp1l.png",
            alt: "img3"
        },
    ]

    const detailsItems: DetailsProps[] = [
        {
            title: "Year",
            subtitle: "2023"
        },
        {
            title: "Author",
            subtitle: "Al Ashfaq"
        },
        {
            title: "Category",
            subtitle: "Blog"
        },
        {
            title: "Service",
            subtitle: "Hype Solutions"
        },
    ]

    const paraItems: ParaProps[] = [
        {
            para: "Step into the world of architectural wonders as we explore iconic landmarks and modern marvels. From the timeless grandeur of the Taj Mahal to the futuristic skyscrapers of Dubai, we'll take you on a journey through history, culture, and design. Discover the genius of ancient civilizations, the intricate craftsmanship of medieval cathedrals."
        },
        {
            para: "Immerse yourself in the vibrant tapestry of global cultures as we celebrate traditions and festivals from around the world. Experience the rhythmic beats of Brazilian samba during Carnival, witness the colorful Holi festivities in India, or marvel at the precision of Japanese tea ceremonies. From music and dance to food and folklore, we'll delve into the heart of diverse cultures, highlighting the shared human experiences that unite us all.and the innovative architecture shaping our cities today. Prepare to be amazed by the creativity and ingenuity of human creations."
        },
        {
            para: "Embark on a mouthwatering adventure as we explore the flavors and delicacies of different cuisines. From aromatic spices in Moroccan tagines to the delicate artistry of sushi in Japan, we'll take your taste buds on a global tour. Join us as we savor street food delights, uncover age-old recipes passed down through generations."
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
                caption="AROUND THE WORLD"
                slides={slidesItems}
                details={detailsItems}
                para1="Around the World, where we embark on a virtual journey to explore the diverse wonders and cultural delights that our planet has to offer. Join us as we delve into fascinating destinations, uncover hidden gems, and embrace the rich tapestry of global experiences. From stunning landscapes and architectural marvels to culinary adventures and captivating traditions, get ready for a whirlwind exploration of our extraordinary world.we'll showcase nature's awe-inspiring beauty. Join us as we hike through lush rainforests, stand in awe of cascading waterfalls, and immerse ourselves in the tranquility of serene lakes."
                para2={paraItems}
            />
            <MailButton />
            <Footer />
        </div>
    );
}
