"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function Game() {
  const searchParams = useSearchParams();
  const algorithm = searchParams.get("algorithm");

  return (
    <div className="h-screen p-6">
      <h1 className="text-3xl font-bold">Substitution Cipher Game</h1>
      {algorithm ? (
        <p className="text-lg mt-4">
          Selected Algorithm: <strong>{algorithm}</strong>
        </p>
      ) : (
        <p className="text-lg mt-4 text-red-500">No algorithm selected</p>
      )}
    </div>
  );
}
