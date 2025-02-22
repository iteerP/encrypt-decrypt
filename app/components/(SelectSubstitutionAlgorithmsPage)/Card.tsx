"use client";

import React from "react";
import { motion } from "motion/react";

type SubstitutionAlgorithmCardProps = {
  algorithmName: string;
  delay: number;
};

export default function SubstitutionAlgorithmCard({
  algorithmName,
  delay,
}: SubstitutionAlgorithmCardProps) {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ delay: delay, ease: "easeOut", duration: 1 }}
      className="w-full aspect-[4/3] h-full min-h-[200px] sm:min-h-[200px] bg-blue-300 flex items-center justify-center text-white text-xl font-bold shadow-lg rounded-lg"
    >
      <p className="select-none">{algorithmName}</p>
    </motion.div>
  );
}
