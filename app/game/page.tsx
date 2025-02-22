"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import caesarCipherEncrypt from "@/utility/substitution-algorithms/caeser-cypher";
import atbashCipherEncrypt from "@/utility/substitution-algorithms/atbash-cipher";
import rot13Encrypt from "@/utility/substitution-algorithms/rot13";
import polybiusEncrypt from "@/utility/substitution-algorithms/polybius-encrypt";

const algorithms = {
  caesar: {
    name: "Caesar Cipher",
    encrypt: (text: string) => caesarCipherEncrypt(text, 3),
    description:
      "One of the oldest ciphers, used by Julius Caesar to secure military messages. It shifts letters forward by a fixed amount (default: 3). Despite its simplicity, it was effective in ancient Rome!",
  },
  atbash: {
    name: "Atbash Cipher",
    encrypt: (text: string) => atbashCipherEncrypt(text),
    description:
      "An ancient cipher from Hebrew cryptography, where A ↔ Z, B ↔ Y, etc. It's so simple that decryption requires no key—just apply it again! It was used in biblical texts to hide secret meanings.",
  },
  rot13: {
    name: "ROT13",
    encrypt: (text: string) => rot13Encrypt(text),
    description:
      "A special case of the Caesar cipher that shifts letters by 13 places. Fun fact: applying ROT13 twice returns the original text! It's often used in internet forums to obscure spoilers.",
  },
  polybius: {
    name: "Polybius Square",
    encrypt: (text: string) => polybiusEncrypt(text),
    description:
      "Developed by the Greek historian Polybius, this cipher converts letters into numbers based on a 5×5 grid (e.g., A = 11, B = 12). It was later adapted for telegraph systems and early espionage!",
  },
};

export default function GamePage() {
  const router = useRouter();

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

  const [encrypted, setEncryped] = useState(true);
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
    const words = [
      "butter",
      "fish",
      "tree",
      "tiger",
      "sky",
      "fish",
      "star",
      "cat",
      "train",
      "stone",
      "sky",
      "star",
      "ocean",
      "hope",
      "horse",
      "piano",
      "cloud",
      "candy",
      "cup",
      "rabbit",
      "cup",
      "rabbit",
      "smile",
      "run",
      "puzzle",
      "lake",
      "light",
      "silver",
      "bat",
      "butter",
      "sugar",
      "fish",
      "candy",
      "chair",
      "sugar",
      "school",
      "shadow",
      "ocean",
      "hope",
      "blue",
      "garden",
      "cat",
      "bat",
      "ocean",
      "cloud",
      "ocean",
      "star",
      "cup",
      "grape",
      "tiger",
      "map",
      "rocket",
      "bell",
      "star",
      "camera",
      "beach",
      "shadow",
      "horse",
      "candy",
      "bat",
      "house",
      "fire",
      "camera",
      "pen",
      "silver",
      "box",
      "forest",
      "beach",
      "winter",
      "dog",
      "hope",
      "castle",
      "sky",
      "camera",
      "ocean",
      "box",
      "energy",
      "chair",
      "sky",
      "rain",
      "garden",
      "tiger",
      "house",
      "ocean",
      "smile",
      "winter",
      "world",
      "cup",
      "king",
      "win",
      "door",
      "train",
      "bell",
      "cat",
      "rain",
      "bat",
      "bat",
      "game",
      "bat",
      "beach",
    ];
    const word = words[Math.floor(Math.random() * words.length)];
    setCurrentChallenge(word.toLowerCase());
    setEncryped(Math.random() > 0.5); // 50% chance to encrypt or decrypt
  };

  // Handle user answer submission
  const handleSubmit = () => {
    console.log(currentChallenge);
    if (
      (encrypted && userInput.toLowerCase() === currentChallenge) ||
      (!encrypted &&
        userInput.toLowerCase() === algorithm.encrypt(currentChallenge))
    ) {
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
          {encrypted ? "Decrypt" : "Encrypt"}:{" "}
          {encrypted
            ? algorithm.encrypt(currentChallenge).toUpperCase()
            : currentChallenge.toUpperCase()}
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
              className="bg-green-500 text-white px-6 py-3 mt-4"
              onClick={startGame}
            >
              Start Game
            </button>
            <button
              className="bg-blue-300 text-white px-6 py-3 mt-4 ml-4"
              onClick={() => {
                router.push("/substitution-algorithms");
              }}
            >
              Exit
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
