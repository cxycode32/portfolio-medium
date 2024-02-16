import { Cursor } from "./components/cursor/Cursor";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { MailButton } from "./components/mail/MailButton";
import { Main } from "./components/main/Main";
import { Ticker } from "./components/ticker/Ticker";

export default function Home() {
  return (
    <div
        id="home"
        className="content"
        style={{
            display: "block"
        }}
    >
        <Cursor />
        <Ticker />
        <Header />
        <Main />
        <MailButton />
        <Footer />
    </div>
  );
}
