"use client";

import React, { useState } from "react";
import StartPage from "./components/StartPage";
import { AnimatePresence } from "motion/react";

export default function Home() {
  const [gameStart, setGameStart] = useState(false);

  return (
    <div className="relative h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Start Page */}
      <AnimatePresence>
        {!gameStart && <StartPage setGameStart={setGameStart} />}
      </AnimatePresence>
    </div>
  );
}
