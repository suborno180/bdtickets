import React from "react";
import FitterSectionMobile from "./FitterSection_mobile";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block"></div>
      <div className="">
        <FitterSectionMobile />
      </div>
    </div>
  );
};

export default HeroSection;
