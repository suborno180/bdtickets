import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { LuSearch } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

interface City {
  name: string;
}

interface LocationPickerProps {
  cities: City[];
}

const LocationPicker = ({ cities }: LocationPickerProps) => {
  return (
    <div className="fixed md:absolute top-0 left-0 md:top-20 md:left-6 w-full md:min-w-72 md:rounded-md md:max-w-72 md:max-h-80 bg-white shadow-lg overflow-hidden">
      <div className="w-full min-h-12 flex border-b-2">
        <div className="min-w-12 min-h-12 hidden md:grid place-content-center text-black">
          <LuSearch />
        </div>
        <div
          className="min-w-12 min-h-12 grid place-content-center md:hidden text-black cursor-pointer hover:bg-gray-100 rounded-full"
          
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
      </div>
      <div className="w-full h-full">
        <ul className="w-full min-h-[90vh] max-h-64 overflow-y-auto">
          {cities.map((city, index) => (
            <li
              key={index}
              className="text-black p-4 hover:bg-gray-100 cursor-pointer"
            >
              {city.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocationPicker;
