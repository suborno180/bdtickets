"use client";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchButton = () => {
  const filterTickets = useSelector((state: RootState) => state.filterTickets);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!filterTickets.goingFrom || !filterTickets.goingTo || !filterTickets.journeyDate) {
        toast.error('Please fill in all fields', { position: "top-center" });
        return;
      }
    setIsLoading(true);
    const searchUrl = `/bus/search/${filterTickets.goingFrom.toLowerCase()}-to-${filterTickets.goingTo.toLocaleLowerCase()}/?journeyDate=${filterTickets.journeyDate}`;
    // Perform your search or navigation logic here
    router.push(searchUrl); // Redirect to searchUrl
  };

  return (
    <>
      <ToastContainer  />
      <button
        onClick={handleSearch}
        disabled={isLoading}
        className={`bg-red-600 hover:bg-red-700 p-3 px-10 rounded-lg text-white ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Searching...' : 'Search Bus'}
      </button>
    </>
  );
};

export default SearchButton;