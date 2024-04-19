"use client";
import { setJourneyDate } from "@/redux/features/filterTicketsSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

interface City {
  name: string;
}

interface LocationPickerProps {
  goingFrom: string;
  cities: City[];
}

const DatePickerComponents: React.FC<LocationPickerProps> = ({
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

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (
        event.target.closest(".city-picker") === null &&
        (isCityFromPickerActive || isCityToPickerActive)
      ) {
        handelFromCityPickerDeactive();
        handelToCityPickerDeactive();
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isCityFromPickerActive, isCityToPickerActive]);

  const dispatch = useDispatch();
  const filterTickets = useSelector((state: RootState) => state.filterTickets);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // You can perform any additional actions here, such as updating other state variables or making API calls.
  };

  const handelDate = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setJourneyDate(value))
    
  }

  return (
    <div className="w-full">
      <div className="w-full min-h-14 bg-white rounded-md border-[0.5px] border-red-600 grid grid-cols-2">
        <label htmlFor="datePicker" className="w-full h-full border-0 border-red-600 border-r relative">
          <div
            className="w-full h-full px-4 cursor-pointer"
            onClick={handelFromCityPickerActive}
          >
            <div>
              <span className="text-black text-[10px]">JOURNEY DATE</span>
            </div>
     
            <input onChange={handelDate} type="date" className="text-black text-[12px] bg-transparent outline-none font-bold" name="" id="datePicker"  />
          </div>
          

          
        </label>
        <div className="w-full h-full relative">
          <div className="w-full px-6 h-full  cursor-pointer">
            <div>
              <div>
                <span className="text-black text-[10px]">RETURN DATE</span>
              </div>
              <div>
                <span className="font-bold text-black text-[12px]">
                  Select date
                </span>
              </div>
            </div>
          </div>
          {/* deactive */}
          <div className="absolute top-0 left-0 w-full h-full bg-white/80 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DatePickerComponents;

