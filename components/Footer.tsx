import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col items-center justify-center py-4 mt-7">
      <div>{currentYear} © Porsche Inter Auto Romania</div>
      <div>
        <Link href="https://myriad-tech.ro" target={ "_blank"}>
          Alexandru Maftei
        </Link>{" "}
        - Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Footer;
