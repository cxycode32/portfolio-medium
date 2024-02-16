import { Cursor } from "../components/cursor/Cursor";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MailButton } from "../components/mail/MailButton";
import { Ticker } from "../components/ticker/Ticker";
import { Portfolio } from "./Portfolio";

export default function PortfolioPage() {
  return (
    <div
        id="portfolio"
        className="content"
        style={{
            display: "block"
        }}
    >
        <Cursor />
        <Ticker />
        <Header />
        <Portfolio />
        <MailButton />
        <Footer />
    </div>
  );
}
