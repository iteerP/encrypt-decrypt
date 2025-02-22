"use client";

import React from "react";
import { motion } from "motion/react";

export default function page() {
  return (
    <motion.div
      transition={{ delay: 0.5 }}
      className="h-screen grid place-content-center text-6xl"
    >
      ENCRYPTION ALGORITHMS
    </motion.div>
  );
}
