import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            src="/images/KMUTT-Logo.png"
            alt="hero image"
            width={60}
            height={60}
          />
        </a>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
