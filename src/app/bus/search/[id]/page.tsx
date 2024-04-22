import Image from "next/image";
import React from "react";
import LocationCard from "../LocationCard";
import TicketCard from "@/components/ui/TicketCard";
import TicketSection from "../TicketSection";

const page = ({ params }: { params: { id: string } }) => {


  const dataString = params.id;
  const location = dataString
    .split("-")
    .map((location) => location.charAt(0).toUpperCase() + location.slice(1));





  return (
    <div className="w-full min-h-screen bg-gray-200">
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
      <TicketSection from={location[0]} to={location[2]} />
      

    </div>
  );
};

export default page;
