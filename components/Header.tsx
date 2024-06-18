import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="relative w-screen ">
      <div onClick={() =>  window.location.reload()} className="flex flex-col items-center justify-center gap-y-2 ">
        <div  className="relative h-24 w-24 hover:cursor-pointer">
          <Image
            src="/logo.png"
            fill
            alt="logo"
            priority
            sizes="(max-width: 768px) 100vw, 24rem" // Add the sizes prop
          />
        </div>
        <h1 className="p-5 text-3xl hover:cursor-pointer">Porsche Inter Auto</h1>
      </div>
    </div>
  );
};

export default Header;
