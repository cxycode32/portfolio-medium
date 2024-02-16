import { Cursor } from "../components/cursor/Cursor";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MailButton } from "../components/mail/MailButton";
import { Ticker } from "../components/ticker/Ticker";
import { Skills } from "./Skills";

export default function SkillsPage() {
  return (
    <div
        id="skills"
        className="content"
        style={{
            display: "block"
        }}
    >
        <Cursor />
        <Ticker />
        <Header />
        <Skills />
        <MailButton />
        <Footer />
    </div>
  );
}
