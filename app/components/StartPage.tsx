"use client";

import React from "react";
import { motion } from "motion/react";

export default function StartPage() {
  return (
    <motion.div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl md:text-8xl text-center bg-blue-950 p-8 rounded-xl select-none">
        Encrypt Decrypt
      </h1>
      <button className="min-w-[300px] w-[30vw] mt-6 text-4xl md:text-5xl bg-blue-400 duration-500 py-4 border-[3px] border-blue-400 hover:bg-blue-500 hover:rounded-xl hover:border-blue-900">
        Start
      </button>
    </motion.div>
  );
}
