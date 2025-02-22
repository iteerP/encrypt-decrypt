"use client";

import React from "react";
import { motion } from "motion/react";
import SubstitutionAlgorithmCard from "../components/(SelectSubstitutionAlgorithmsPage)/Card";
import substitutionAlgorithmsData from "../components/(SelectSubstitutionAlgorithmsPage)/substitution-algorithms.json";
import { useRouter } from "next/navigation";

export default function SubstitutionAlgorithms() {
  const substitutionAlgorithms =
    substitutionAlgorithmsData["substitution_algorithms"];

  const router = useRouter();
  const handleSelect = (algorithm: string) => {
    router.push(`/game?algorithm=${algorithm.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <motion.div className="h-screen w-screen flex justify-center items-center">
      <div className="h-[70vh] w-[85vw] grid grid-cols-1 sm:grid-cols-2 gap-16 p-4 overflow-y-auto">
        {substitutionAlgorithms.map((substitutionAlgorithm, idx) => (
          <SubstitutionAlgorithmCard
            key={idx}
            algorithmName={substitutionAlgorithm.algorithmName}
            algorithmDescription={substitutionAlgorithm.algorithmDescription}
            handleSelect={handleSelect}
            delay={idx * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}
