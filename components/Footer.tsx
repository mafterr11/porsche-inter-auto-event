import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-4 mt-7">
     {currentYear} © Porsche Inter Auto Romania - Toate drepturile rezervate.
    </div>
  );
};

export default Footer;
