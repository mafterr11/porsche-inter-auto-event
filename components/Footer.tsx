import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative flex flex-col items-center justify-center py-4">
      <div className="lg:max-xl:absolute inset-0 bg-black/40" />
      <div className="lg:max-xl:relative">{currentYear} © Porsche Inter Auto Romania</div>
      <div className="lg:max-xl:relative">
        <Link href="https://myriad-tech.ro" className="font-bold">
          Myriad Tech
        </Link>{" "}
        - Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Footer;
