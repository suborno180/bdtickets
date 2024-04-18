"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

interface City {
  name: string;
}

interface LocationPickerProps {
  goingFrom: string;
  cities: City[];
}

const LocationPickerComponents: React.FC<LocationPickerProps> = ({
  goingFrom,
  cities,
}) => {
  const [isCityFromPickerActive, setCityFromPickerActive] = useState(false);
  const [isCityToPickerActive, setCityToPickerActive] = useState(false);

  const handelFromCityPickerActive = () => {
    setCityFromPickerActive(true);
    handelToCityPickerDeactive();
  };
  const handelFromCityPickerDeactive = () => {
    setCityFromPickerActive(false);
  };

  const handelToCityPickerActive = () => {
    setCityToPickerActive(true);
    handelFromCityPickerDeactive();
  };
  const handelToCityPickerDeactive = () => {
    setCityToPickerActive(false);
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-14 bg-white rounded-md border-[0.5px] border-red-600 grid grid-cols-2">
        <div className="w-full h-full border-0 border-red-600 border-r relative">
          <div
            className="w-full h-full px-4 cursor-pointer"
            onClick={handelFromCityPickerActive}
          >
            <div>
              <span className="text-black text-[10px]">GOING FROM</span>
            </div>
            <div>
              <span className="font-bold text-black text-[12px]">
                {goingFrom}
              </span>
            </div>
          </div>
          {isCityFromPickerActive && (
            <div>
              <div className="fixed z-50 md:absolute top-0 left-0 md:top-20 md:left-6 w-full md:min-w-72 md:rounded-md  md:max-w-72  md:max-h-80 bg-white shadow-lg overflow-hidden">
                <div className="w-full min-h-12 flex border-b-2">
                  <div className="min-w-12 min-h-12 hidden md:grid place-content-center text-black ">
                    <LuSearch />
                  </div>
                  <div
                    className="min-w-12 min-h-12 grid place-content-center md:hidden text-black cursor-pointer hover:bg-gray-100 rounded-full"
                    onClick={handelFromCityPickerDeactive}
                  >
                    <IoMdArrowRoundBack />
                  </div>
                  <div className="w-full h-full">
                    <input
                      type="text"
                      className="w-full h-12 text-black px-2 focus:outline-none"
                      placeholder="Search by city"
                    />
                  </div>
                  <div
                    className="min-w-12 min-h-12 hidden md:grid place-content-center text-black cursor-pointer hover:bg-gray-100 rounded-full"
                    onClick={handelFromCityPickerDeactive}
                  >
                    <RxCross2 />
                  </div>
                </div>
                <div className="w-full h-full">
                  <ul className="w-full min-h-[90vh] max-h-64 overflow-y-auto">
                    {cities.map((city, index) => (
                      <li
                        key={index}
                        className="text-black p-4 hover:bg-gray-100 cursor-pointer"
                        onClick={handelFromCityPickerDeactive}
                      >
                        {city.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <button className="w-[25px] h-[25px] border border-red-600 p-1 absolute top-[25%] -right-[13px] bg-white rounded-full hover:bg-red-200 focus:scale-90">
            {/* Exchange button */}
            <Image
              src="/swap-red-light.svg"
              alt="exchange-icons"
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className="w-full h-full relative">
          <div
            className="w-full h-full px-6 cursor-pointer"
            onClick={handelToCityPickerActive}
          >
            <div>
              <span className="text-black text-[10px]">GOING TO</span>
            </div>
            <div>
              <span className="font-bold text-black text-[12px]">
                Destination
              </span>
            </div>
          </div>
          {isCityToPickerActive && (
            <div>
              <div className="fixed z-50 md:absolute top-0 left-0 md:top-20 md:left-6 w-full md:min-w-72 md:rounded-md  md:max-w-72  md:max-h-80 bg-white shadow-lg overflow-hidden">
                <div className="w-full min-h-12 flex border-b-2">
                  <div className="min-w-12 min-h-12 hidden md:grid place-content-center text-black ">
                    <LuSearch />
                  </div>
                  <div
                    className="min-w-12 min-h-12 grid place-content-center md:hidden text-black cursor-pointer hover:bg-gray-100 rounded-full"
                    onClick={handelToCityPickerDeactive}
                  >
                    <IoMdArrowRoundBack />
                  </div>
                  <div className="w-full h-full">
                    <input
                      type="text"
                      className="w-full h-12 text-black px-2 focus:outline-none"
                      placeholder="Search by city"
                    />
                  </div>
                  <div
                    className="min-w-12 min-h-12 hidden md:grid place-content-center text-black cursor-pointer hover:bg-gray-100 rounded-full"
                    onClick={handelToCityPickerDeactive}
                  >
                    <RxCross2 />
                  </div>
                </div>
                <div className="w-full h-full">
                  <ul className="w-full min-h-[90vh] max-h-64 overflow-y-auto">
                    {cities.map((city, index) => (
                      <li
                        key={index}
                        className="text-black p-4 hover:bg-gray-100 cursor-pointer"
                        onClick={handelToCityPickerDeactive}
                      >
                        {city.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPickerComponents;
