"use client";

import React from "react";
import { motion } from "motion/react";
import SubstitutionAlgorithmCard from "../components/(SelectSubstitutionAlgorithmsPage)/Card";
import substitutionAlgorithmsData from "../components/(SelectSubstitutionAlgorithmsPage)/substitution-algorithms.json";

export default function page() {
  const substitutionAlgorithms =
    substitutionAlgorithmsData["substitution_algorithms"];

  return (
    <motion.div
      transition={{ delay: 1 }}
      className="h-screen w-screen flex justify-center items-center"
    >
      <div className="h-[70vh] w-[85vw] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 p-4 overflow-y-auto">
        {substitutionAlgorithms.map((substitutionAlgorithm, idx) => (
          <SubstitutionAlgorithmCard
            key={idx}
            delay={idx * 0.1}
            algorithmName={substitutionAlgorithm}
          />
        ))}
      </div>
    </motion.div>
  );
}
