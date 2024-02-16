import { Cursor } from "../components/cursor/Cursor";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MailButton } from "../components/mail/MailButton";
import { Ticker } from "../components/ticker/Ticker";
import { About } from "./About";

export default function AboutPage() {
  return (
    <div
        id="about"
        className="content"
        style={{
            display: "block"
        }}
    >
        <Cursor />
        <Ticker />
        <Header />
        <About />
        <MailButton />
        <Footer />
    </div>
  );
}
