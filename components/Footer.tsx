// components/Footer.js

import { lockNloaded } from "@/hooks/useMultiplestepForm";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>Porsche Inter Auto Romania</div>
      <div>
        <Link href="https://myriad-tech.ro" className="font-bold">
          Myriad Tech
        </Link>{" "}
        © Toate drepturile rezervate.
      </div>
    </div>
  );
};

export default Footer;