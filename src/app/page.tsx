import Image from "next/image";
import { Cursor } from "./components/Cursor";

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
    </div>
  );
}
