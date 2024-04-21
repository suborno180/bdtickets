import Image from "next/image";
import React from "react";
import LocationCard from "../LocationCard";

const page = ({ params }: { params: { id: string } }) => {
  const ButTicketsJsonData = [
    {
      butName: "PURBASHA PARIBAHAN",
      slug: "EID 120 ALAM-CHUA-DHK (PATURIA) Non AC",
      from: "Alamdanga",
      to: "Gabtoli",
      departureTime: "9:15pm",
      arrivalTime: "1:45am",
      seatsAvailable: "4",
      price: 650.0,
    },
    {
      butName: "Green Line Paribahan",
      slug: "Shyamoli-Dhaka Chittagong Volvo AC",
      from: "Dhaka",
      to: "Chittagong",
      departureTime: "10:30pm",
      arrivalTime: "5:30am",
      seatsAvailable: "10",
      price: 1200.0,
    },
    {
      butName: "Shohag Paribahan",
      slug: "Super Deluxe Bus Service",
      from: "Chittagong",
      to: "Sylhet",
      departureTime: "11:00pm",
      arrivalTime: "7:00am",
      seatsAvailable: "6",
      price: 800.0,
    },
    {
      butName: "Sakura Paribahan",
      slug: "Dhaka to Khulna Non-AC Bus",
      from: "Dhaka",
      to: "Khulna",
      departureTime: "8:00pm",
      arrivalTime: "4:00am",
      seatsAvailable: "8",
      price: 700.0,
    },
    {
      butName: "Hanif Enterprise",
      slug: "Volvo AC Deluxe Service",
      from: "Sylhet",
      to: "Dhaka",
      departureTime: "9:45pm",
      arrivalTime: "6:45am",
      seatsAvailable: "12",
      price: 1000.0,
    },
  ];

  const dataString = params.id;
  const location = dataString
    .split("-")
    .map((location) => location.charAt(0).toUpperCase() + location.slice(1));

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="w-full min-h-64 bg-[url(/banner-bg-sm.webp)] bg-center bg-no-repeat bg-cover flex items-center justify-start relative">
        <div className="w-full absolute top-0 left-0 min-h-64 bg-black/50"></div>
        <div className="w-full absolute top-0 left-0 min-h-64">
          <div className="container mx-auto  pt-24">
            <LocationCard from={location[0]} to={location[2]} />
          </div>
        </div>
      </div>
      <div className="w-full min-h-16 bg-white">
        <div className="container mx-auto"></div>
      </div>
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-[800px] min-h-[400px] bg-white mx-auto rounded-2xl shadow-md grid place-content-center">
          <div className="flex flex-col items-center justify-center text-center">
            <Image src="/404.svg" alt="" width={300} height={250} />
            <h1 className="text-2xl font-bold my-4">{`Sorry, we didn't find any routes for your search.`}</h1>
            <div>
              {location[0]} {`=>`} {location[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
