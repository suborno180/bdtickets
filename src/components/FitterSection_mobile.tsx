import Image from "next/image";
import React from "react";
import LocationPickerComponents from "./LocationPickerComponents";
import FilterTab from "./FilterTab";
import DatePickerComponents from "./DatePickerComponents";
  
export interface ApiData {
  _id: string,
  division: string,
  divisionbn: string,
  coordinates: string
}

const FitterSection = ({apiData}: {apiData: any}) => {
  const citiesData = [
    { name: "Rajshahi" },
    { name: "Dhaka" },
    { name: "Chittagong" },
    // Add more cities as needed
  ];
  const tabsData = [
    { label: "BUS", icon: "/bus-alt-copy.svg" },
    { label: "AIR", icon: "/air-alt-copy2.svg" },
    { label: "SHIP", icon: "/launch-alt-copy2.svg" },
    { label: "HOTEL", icon: "/hotel-2-copy.svg" },
    { label: "DEALS", icon: "/offer-alt-copy2.svg" },
  ];
  
  // console.log(apiData);
  

  return (
    <>
      <div className="w-full">
        <div className="min-h-52 w-full relative">
          <div className="absolute top-0 left-0 min-h-full w-full bg-[url(/banner-web.png)] bg-center bg-cover bg-no-repeat"></div>
          <div className="absolute top-0 left-0 min-h-full w-full bg-black/50"></div>
        </div>
        <div className="w-full min-h-64 bg-gray-200">
          <FilterTab tabs={tabsData} />
          <div className="w-full h-full py-4 px-4 md:px-8 flex flex-col gap-4">
            <LocationPickerComponents />
            <DatePickerComponents goingFrom="Amuna" cities={citiesData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FitterSection;
