import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center gap-y-2">
      <div className="relative h-24 w-24">
        <Image
          src="/logo.png"
          fill
          alt="logo"
          priority
          sizes="(max-width: 768px) 100vw, 24rem" // Add the sizes prop
        />
      </div>
      <h1 className="text-3xl p-5">Porsche Inter Auto</h1>
    </div>
  );
};

export default Header;
