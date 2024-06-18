import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-7 flex flex-col items-center justify-center py-4">
      <div>
        {currentYear} © Creat de{" "}
        <Link href="https://myriad-tech.ro" className="font-bold">
          Myriad Tech
        </Link>
      </div>
      <div>Toate drepturile rezervate</div>
    </div>
  );
};

export default Footer;
