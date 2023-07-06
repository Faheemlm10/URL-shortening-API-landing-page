import Image from "next/image";
import Nav from "../components/Nav";
import Body from "../components/Body";

export default function Home() {
  return (
    <div className="overflow-x-hidden h-[100vh]">
      <Nav />
      <Body />
    </div>
  );
}
