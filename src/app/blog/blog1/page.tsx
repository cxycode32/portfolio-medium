import { Cursor } from "@/app/components/cursor/Cursor";
import { Footer } from "@/app/components/footer/Footer";
import { Header } from "@/app/components/header/Header";
import { MailButton } from "@/app/components/mail/MailButton";
import { Ticker } from "@/app/components/ticker/Ticker";
import { Blog } from "../Blog";

export default function BlogPage1() {
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
        <Blog />
        <MailButton />
        <Footer />
    </div>
  );
}
