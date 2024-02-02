import { Cursor } from "./components/cursor/Cursor";
import { Header } from "./components/header/Header";
import { Ticker } from "./components/ticker/Ticker";

export default function Home() {
  return (
    <div
        id="home"
        className="content"
        // style={{
        //     display: "block"
        // }}
    >
        <Cursor />
        <Ticker />
        <Header />
    </div>
  );
}
