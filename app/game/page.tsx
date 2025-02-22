import { Suspense } from "react";
import GameComponent from "@/components/(GamePage)/game-component";

export default function GamePage() {
  return (
    <Suspense
      fallback={
        <p className="h-screen grid place-content-center text-4xl text-white">
          Loading...
        </p>
      }
    >
      <GameComponent />
    </Suspense>
  );
}
