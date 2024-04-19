"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full py-4 z-10 ${
        isScrolled
          ? "bg-white shadow-md transition-all"
          : "bg-white/50 transition-all backdrop-blur-sm"
      }`}
      initial={false}
      animate={{
        y: isScrolled ? 0 : 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <Image
              className="h-8 mr-4"
              src="/logo-new-2.png"
              alt="Logo"
              width={150}
              height={100}
            />
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 p-2 text-[13px] hover:text-red-600">
                <Image src="/bus-black-icons.svg" alt="icons" width={25} height={25}  /> 
                BUS
            </a>
            <a href="#" className="flex items-center gap-2 p-2 text-[13px] hover:text-red-600">
                <Image src="/bus-black-icons.svg" alt="icons" width={25} height={25}  /> 
                BUS
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </motion.header>
  );
};

export default Header;
