import Image from "next/image";
import StartPage from "./components/StartPage";

export default function Home() {
  return (
    <div className="relative h-screen text-white flex flex-col items-center justify-center">
      {/* Game background */}
      <Image
        src={"/background.webp"}
        alt="game background"
        className="absolute -z-[1] object-cover md:object-center lg:object-[0%_40%]"
        fill
        priority
      />

      <StartPage />
    </div>
  );
}
