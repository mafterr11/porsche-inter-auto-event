import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative flex flex-col items-center justify-center py-4">
      <div>{currentYear} © Porsche Inter Auto Romania</div>
      <div>
        <Link href="https://myriad-tech.ro" className="font-bold">
          Myriad Tech
        </Link>{" "}
        - Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Footer;
