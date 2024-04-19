import React from "react";
import FitterSectionMobile from "./FitterSection_mobile";
import FitterSection from "./FitterSection";

const HeroSection = () => {
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <FitterSection/>
      </div>
      <div className="md:hidden">
        <FitterSectionMobile />
      </div>
    </div>
  );
};

export default HeroSection;
