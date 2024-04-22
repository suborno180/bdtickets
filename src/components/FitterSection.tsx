"use client";
import React from "react";
import LocationPickerComponents from "./LocationPickerComponents";
import DatePickerComponents from "./DatePickerComponents";
import { IoIosArrowRoundForward } from "react-icons/io";
import FilterTab from "./FilterTab";
import { useDispatch } from "react-redux";
import {
  setGoingFrom,
  setGoingTo,
  setJourneyDate,
} from "@/redux/features/filterTicketsSlice";
import SearchButton from "./SearchButton";

const FitterSection = () => {
  const dispatch = useDispatch();
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

  const locations = [
    {
      from: "Dhaka",
      to: "Chittagong",
      fare: 1100,
      date: "2024-06-11",
    },
    {
      from: "Dhaka",
      to: "Barisal",
      fare: 900,
      date: "2024-05-14",
    },
    {
      from: "Dhaka",
      to: "Coxs-Bazar",
      fare: 900,
      date: "2024-05-15",
    },
    {
      from: "Barisal",
      to: "Chittagong",
      fare: 900,
      date: "2024-05-14",
    },
    {
      from: "Barisal",
      to: "Rajshahi",
      fare: 1900,
      date: "2024-05-28",
    },
];

  const exchangeCityHandeler = (from: string, to: string, date: string) => {
    dispatch(setGoingFrom(from));
    dispatch(setGoingTo(to));
    dispatch(setJourneyDate(date));
  };
  return (
    <div className="w-full min-h-[600px] bg-[url(/banner-web.png)] bg-center bg-cover bg-no-repeat relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-lg mx-auto rounded-lg p-8 translate-y-10">
            {/* Your content goes here */}
            <div className="max-w-[70%] lg:max-w-[50%] min-h-[70px] mx-auto bg-white rounded-xl rounded-b-none">
              <div className="p-4">
                <FilterTab tabs={tabsData} />
              </div>
            </div>
            <div className="w-full h-52 p-10 pb-0 bg-white rounded-xl grid grid-rows-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <LocationPickerComponents />
                </div>
                <div>
                  <DatePickerComponents goingFrom="Amuna" cities={citiesData} />
                </div>
              </div>
              <div className="w-full grid grid-rows-2">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-black text-[11px]">
                      Trending Searches:
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {locations.map((e) => {
                      return (
                        <>
                          <div
                            className="p-2 py-1 text-black bg-gray-200 hover:bg-gray-300 rounded-md text-[10px] flex items-center gap-1 cursor-pointer"
                            onClick={() => exchangeCityHandeler(e.from, e.to, e.date)}
                          >
                            <span>{e.from}</span>
                            <IoIosArrowRoundForward size={15} />
                            <span>{e.to}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="grid place-content-center translate-y-5">
                  <SearchButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitterSection;
