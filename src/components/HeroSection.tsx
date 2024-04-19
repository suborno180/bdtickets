import React from "react";
import FitterSectionMobile from "./FitterSection_mobile";
import FitterSection from "./FitterSection";

const HeroSection = async () => {
  const getDivisionApiRes = await fetch("https://bdapis.com/api/v1.1/divisions")
  const DivisionJsonData = await getDivisionApiRes.json()
  // console.log(DivisionJsonData.data);
  
  return (
    <div className="w-full">
      <div className="hidden md:block">
        <FitterSection/>
      </div>
      <div className="md:hidden">
        <FitterSectionMobile apiData={DivisionJsonData.data} />
      </div>
    </div>
  );
};

export default HeroSection;
