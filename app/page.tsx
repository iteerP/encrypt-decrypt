"use client";

import React, { useState } from "react";
import Image from "next/image";
import StartPage from "./components/StartPage";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="relative h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Game background */}
      <Image
        src={"/background.webp"}
        alt="game background"
        className="absolute -z-[1] object-cover md:object-center lg:object-[0%_40%]"
        fill
        priority
      />

      {/* Start Page */}
      <AnimatePresence>
        {!gameStart && <StartPage setGameStart={setGameStart} />}
      </AnimatePresence>
    </div>
  );
}
