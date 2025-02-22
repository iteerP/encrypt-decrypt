"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import caesarCipherEncrypt from "@/utility/substitution-algorithms/caeser-cypher";
import atbashCipherEncrypt from "@/utility/substitution-algorithms/atbash-cipher";
import rot13Encrypt from "@/utility/substitution-algorithms/rot13";
import polybiusEncrypt from "@/utility/substitution-algorithms/polybius-encrypt";

const algorithms = {
  caesar: {
    name: "Caesar Cipher",
    encrypt: (text: string) => caesarCipherEncrypt(text, 3),
    description: "Shifts letters by a fixed amount (e.g., A → D for shift 3).",
  },
  atbash: {
    name: "Atbash Cipher",
    encrypt: (text: string) => atbashCipherEncrypt(text),
    description:
      "Reverses the alphabet (A ↔ Z, B ↔ Y, etc.), making it simple to decrypt.",
  },
  rot13: {
    name: "ROT13",
    encrypt: (text: string) => rot13Encrypt(text),
    description:
      "A variation of the Caesar cipher that shifts each letter by 13 places.",
  },
  polybius: {
    name: "Polybius Square",
    encrypt: (text: string) => polybiusEncrypt(text),
    description:
      "Replaces letters with coordinates from a 5x5 grid (e.g., A = 11, B = 12).",
  },
};

export default function GamePage() {
  const searchParams = useSearchParams();
  const algorithmKey = searchParams.get("algorithm") || "caesar";
  const algorithm =
    algorithmKey in algorithms
      ? algorithms[algorithmKey as keyof typeof algorithms]
      : algorithms["caesar"];

  const [showStartModal, setShowStartModal] = useState(true);
  const [showEndModal, setShowEndModal] = useState(false);
  const [timer, setTimer] = useState(180); // 3-minute timer (in seconds)
  const [score, setScore] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState("");
  const [userInput, setUserInput] = useState("");

  // Start timer when modal is closed
  const startGame = () => {
    setShowStartModal(false);
    generateChallenge(); // Generate the first challenge
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowEndModal(true);
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Generate random words and encrypt/decrypt them
  const generateChallenge = () => {
    const words = ["HELLO", "WORLD", "NEXTJS", "REACT", "TYPESCRIPT"];
    const word = words[Math.floor(Math.random() * words.length)];
    const encrypt = Math.random() > 0.5; // 50% chance to encrypt or decrypt

    if (encrypt) {
      setCurrentChallenge(algorithm.encrypt(word));
    } else {
      setCurrentChallenge(word); // Show decrypted word, user must enter the encrypted form
    }
  };

  // Handle user answer submission
  const handleSubmit = () => {
    if (userInput.toUpperCase() === currentChallenge) {
      setScore((prev) => prev + 1);
      generateChallenge();
      setUserInput("");
    }
  };

  return (
    <div className="h-screen p-6 grid place-content-center">
      <div className="flex flex-col justify-center items-center p-10 md:p-16 bg-white rounded-xl border-2 md:border-4 border-black">
        <h1 className="text-3xl font-bold text-center">
          {algorithm.name} Game
        </h1>
        <p className="mt-2 text-lg">
          Time Left: {Math.floor(timer / 60)}:
          {String(timer % 60).padStart(2, "0")}
        </p>
        <p className="mt-4 text-xl font-semibold">
          Challenge: {currentChallenge}
        </p>

        <input
          className="border p-2 mt-4 text-lg"
          placeholder="Enter your answer"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 mt-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Start Modal */}
      {showStartModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">{algorithm.name}</h2>
            <p className="mt-2">{algorithm.description}</p>
            <button
              className="bg-green-500 text-white p-3 mt-4"
              onClick={startGame}
            >
              Start Game
            </button>
          </div>
        </div>
      )}

      {/* End Modal */}
      {showEndModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <p className="mt-2 text-lg">
              Your Score: <strong>{score}</strong>
            </p>
            <button
              className="bg-blue-500 text-white p-3 mt-4"
              onClick={() => {
                setScore(0);
                setTimer(180);
                setShowStartModal(true);
                setShowEndModal(false);
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
