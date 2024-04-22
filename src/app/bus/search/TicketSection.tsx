"use client"
import TicketCard from '@/components/ui/TicketCard';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

interface BusData {
  butName: string;
  slug: string;
  from: string;
  to: string;
  date: string;
  departureTime: string;
  arrivalTime: string;
  seatsAvailable: string;
  price: number;
}

const TicketSection: React.FC<{ from: string; to: string }> = ({ from, to }) => {
  const searchParams = useSearchParams();
  const date = searchParams.get('journeyDate');

  const [filteredData, setFilteredData] = useState<BusData[]>([]);

  const ButTicketsJsonData = [
    {
      butName: "PURBASHA PARIBAHAN",
      slug: "EID 120 ALAM-CHUA-DHK (PATURIA) Non AC",
      from: "Dhaka",
      to: "Rajshahi",
      date: "2024-05-01",
      departureTime: "9:15pm",
      arrivalTime: "1:45am",
      seatsAvailable: "4",
      price: 650.0,
    },
    {
      butName: "PURBASHA PARIBAHAN",
      slug: "EID 120 ALAM-CHUA-DHK (PATURIA) Non AC",
      from: "Dhaka",
      to: "Rajshahi",
      date: "2024-05-01",
      departureTime: "10:25pm",
      arrivalTime: "3:30am",
      seatsAvailable: "4",
      price: 650.0,
    },
    {
      butName: "Green Line Paribahan",
      slug: "Shyamoli-Dhaka Chittagong Volvo AC",
      from: "Dhaka",
      to: "Barisal",
      date: "2024-05-14",
      departureTime: "10:30pm",
      arrivalTime: "5:30am",
      seatsAvailable: "10",
      price: 1200.0,
    },
    {
      butName: "Shohag Paribahan",
      slug: "Super Deluxe Bus Service",
      from: "Dhaka",
      to: "Coxs-Bazar",
      date: "2024-05-15",
      departureTime: "11:00pm",
      arrivalTime: "7:00am",
      seatsAvailable: "6",
      price: 800.0,
    },
    {
      butName: "Sakura Paribahan",
      slug: "Barisal to Chittagong Non-AC Bus",
      from: "Barisal",
      to: "Chittagong",
      date: "2024-05-14",
      departureTime: "8:00pm",
      arrivalTime: "4:00am",
      seatsAvailable: "8",
      price: 700.0,
    },
    {
      butName: "Hanif Enterprise",
      slug: "Volvo AC Deluxe Service",
      from: "Barisal",
      to: "Rajshahi",
      date: "2024-05-28",
      departureTime: "9:45pm",
      arrivalTime: "6:45am",
      seatsAvailable: "12",
      price: 1000.0,
    },
  ];

  // Filter data based on 'from' and 'to'
  const filteredResults = ButTicketsJsonData.filter((item) => item.from.toLowerCase() === from.toLowerCase() && item.to.toLowerCase() === to.toLowerCase() && item.date === date);



  return (
    <>
      <div className="container max-w-[1200px] py-4 mx-auto">
        <div className="flex flex-col gap-4">
          {filteredResults.map((ticket, index) => (
            <TicketCard
              key={index}
              travelAgency={ticket.butName}
              route={ticket.slug}
              departureTimes={{
                startingPoint: ticket.from,
                endPoint: ticket.to,
                departures: [ticket.departureTime]
              }}
              price={`৳${ticket.price}`}
            />
          ))}
        </div>
      </div>

      {/* Show the "No data found" section if filteredData is empty */}
      {filteredResults.length <= 0 && (
        <div className="container mx-auto py-20 px-4">
          <div className="max-w-[800px] min-h-[400px] bg-white mx-auto rounded-2xl shadow-md grid place-content-center">
            <div className="flex flex-col items-center justify-center text-center p-4">
              <Image src="/404.svg" alt="" width={300} height={250} />
              <h1 className="text-2xl font-bold my-4">{`Sorry, we didn't find any routes for your search.`}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketSection;
