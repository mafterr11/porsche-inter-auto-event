"use client";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

const SuccessMessage = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  useEffect(() => setShowConfetti(true));

  const handleRestart = () => {
    window.location.reload(); // This will refresh the page
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Confetti
        active={showConfetti}
        config={{ elementCount: 200, spread: 90 }}
      />
      <h2 className="text-2xl font-semibold text-white">Succes!</h2>
      <p className="text-neutral-300">Ați transmis informațiile cu succes</p>
      <button
        onClick={handleRestart}
        className="mt-4 rounded-md bg-[#384967] px-4 py-2 text-white hover:bg-[#384967]/80 f"
      >
        Acasă
      </button>
    </div>
  );
};

export default SuccessMessage;
