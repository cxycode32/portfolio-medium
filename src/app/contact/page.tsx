import { Cursor } from "../components/cursor/Cursor";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MailButton } from "../components/mail/MailButton";
import { Ticker } from "../components/ticker/Ticker";
import { Contact } from "./Contact";

export default function ContactPage() {
  return (
    <div
        id="contact"
        className="content"
        style={{
            display: "block"
        }}
    >
        <Cursor />
        <Ticker />
        <Header />
        <Contact />
        <MailButton />
        <Footer />
    </div>
  );
}
