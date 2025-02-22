"use client";

import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

type SubstitutionAlgorithmCardProps = {
  algorithmName: string;
  algorithmDescription: string;
  redirectLink: string;
  delay: number;
};

export default function SubstitutionAlgorithmCard({
  algorithmName,
  algorithmDescription,
  redirectLink,
  delay,
}: SubstitutionAlgorithmCardProps) {
  const router = useRouter();

  return (
    <motion.button
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ delay: delay, ease: "easeOut", duration: 0.5 }}
      className="w-full aspect-[4/3] h-full min-h-[200px] sm:min-h-[200px] bg-blue-300 flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-lg hover:bg-blue-400 duration-300 opacity-90 hover:opacity-100 border-2 border-black"
      onClick={() => {
        setTimeout(() => router.push(redirectLink), 500);
      }}
    >
      <h1 className="text-2xl md:text-3xl select-none">{algorithmName}</h1>
      <p className="font-thin mt-4 px-8">{algorithmDescription}</p>
    </motion.button>
  );
}
