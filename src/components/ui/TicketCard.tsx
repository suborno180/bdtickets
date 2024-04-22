import React from 'react';

interface DepartureTimes {
  startingPoint: string;
  endPoint: string;
  departures: string[];
}

interface TicketCardProps {
  travelAgency: string;
  route: string;
  departureTimes: DepartureTimes;
  price: string;
}

const TicketCard: React.FC<TicketCardProps> = ({ travelAgency, route, departureTimes, price }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="w-full p-6 grid grid-cols-3 bg-white">
        <div className="w-full flex flex-col gap-2">
          <div>
            <h1 className="text-red-500">{travelAgency}</h1>
            <p className="text-[12px]">{route}</p>
          </div>
          <div>
            <p className="text-[12px]">Starting Point: <span className="text-red-500">{departureTimes.startingPoint}</span></p>
            <p className="text-[12px]">End Point: <span className="text-red-500">{departureTimes.endPoint}</span></p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3">
          {departureTimes.departures.map((departure, index) => (
            <div key={index} className="flex flex-col gap-1 p-4 border border-x border-dotted border-r-0 border-y-0 border-gray-400 w-full">
              <div>
                <h2 className="uppercase font-bold text-[13px]">Departure Time</h2>
              </div>
              <div>
                <h2 className="text-red-500">{departure}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex items-center justify-center">
            <h1 className="text-2xl font-bold text-red-500">{price}</h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div>
              <button className="uppercase p-2 px-4 bg-red-500 hover:bg-red-600 text-white">View Details</button>
              <span className="text-[11px] text-red-500 italic">Cancellation Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;