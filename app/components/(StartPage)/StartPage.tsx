"use client";

import React, { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

type StartPageProps = {
  setGameStart: Dispatch<SetStateAction<boolean>>;
};

export default function StartPage({ setGameStart }: StartPageProps) {
  const router = useRouter();

  return (
    <motion.div
      exit={{ y: ["0vh", "-5vh", "100vh"] }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-6xl md:text-8xl text-center bg-blue-950 p-8 rounded-xl select-none">
        Encrypt Decrypt
      </h1>
      <button
        onClick={() => {
          setGameStart((prev) => !prev);
          setTimeout(() => {
            router.push("/substitution-algorithms");
          }, 500);
        }}
        className="min-w-[300px] w-[30vw] mt-6 text-4xl md:text-5xl bg-blue-400 duration-500 py-4 border-[3px] border-blue-400 hover:bg-blue-500 hover:rounded-xl hover:border-blue-900 select-none"
      >
        Start
      </button>
    </motion.div>
  );
}
