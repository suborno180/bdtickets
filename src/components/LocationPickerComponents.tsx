"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { ApiData } from "./FitterSection_mobile";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setGoingFrom, setGoingTo } from "@/redux/features/filterTicketsSlice";

interface LocationPickerProps {
  goingFrom: string;
  cities: any;
  apiData?: any;
}

const LocationPickerComponents: React.FC<LocationPickerProps> = ({
  goingFrom,
  cities,
  apiData,
}) => {
  const [isCityFromPickerActive, setCityFromPickerActive] = useState(false);
  const [isCityToPickerActive, setCityToPickerActive] = useState(false);
  const [isApiData, setApiData] = useState<ApiData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://bdapis.com/api/v1.1/divisions")
      .then((res) => res.json())
      .then((json) => setApiData(json.data));
  }, []);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredApiData = isApiData.filter((student) =>
    student.division.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handelGoingFromList = (event: ChangeEvent<HTMLInputElement>) => {
    const { innerText } = event.target;
    setCityFromPickerActive(false);
    // redux function
    dispatch(setGoingFrom(innerText));
  };
  const handelGoingToList = (event: ChangeEvent<HTMLInputElement>) => {
    const { innerText } = event.target;
    setCityToPickerActive(false);
    // redux function
    dispatch(setGoingTo(innerText));
  };

  // Redux

  const dispatch = useDispatch();
  const filterTickets = useSelector((state: RootState) => state.filterTickets);

  const exchangeCityHandeler = (from: string, to: string) => {
    dispatch(setGoingFrom(to));
    dispatch(setGoingTo(from));
    
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
                {filterTickets.goingFrom.length <= 0
                  ? "Select City"
                  : filterTickets.goingFrom}
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
                      value={searchTerm}
                      onChange={handleSearch}
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
                    {filteredApiData.map((city, index) => (
                      <li
                        key={index}
                        className="text-black p-4 hover:bg-gray-100 cursor-pointer"
                        onClick={handelGoingFromList}
                      >
                        {city.division}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <button
            className="w-[25px] h-[25px] border border-red-600 p-1 absolute top-[25%] -right-[13px] z-10 bg-white rounded-full hover:bg-red-200 focus:scale-90"
            onClick={() =>
              exchangeCityHandeler(
                filterTickets.goingFrom,
                filterTickets.goingTo
              )
            }
          >
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
          <div className="w-full px-6 h-full  cursor-pointer">
            <div onClick={handelToCityPickerActive}>
              <div>
                <span className="text-black text-[10px]">GOING TO</span>
              </div>
              <div>
                <span className="font-bold text-black text-[12px]">
                  {filterTickets.goingTo.length <= 0
                    ? "Select City"
                    : filterTickets.goingTo}
                </span>
              </div>
            </div>
          </div>
          {isCityToPickerActive && (
            // location picker input search box
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
                      value={searchTerm}
                      onChange={handleSearch}
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
                    {filteredApiData.map((city, index) => (
                      <li
                        key={index}
                        className="text-black p-4 hover:bg-gray-100 cursor-pointer"
                        onClick={handelGoingToList}
                      >
                        {city.division}
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
