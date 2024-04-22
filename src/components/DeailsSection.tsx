import React from "react";
import DealsCard from "./ui/DealsCard";

const DeailsSection = () => {
  return (
    <>
      <section className="my-10 p-4 lg:p-0">
        <div className="container max-w-[1200px] mx-auto">
          <h1 className="text-3xl mb-6 text-center font-bold">Flash Deals</h1>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DealsCard />
            <DealsCard />
            <DealsCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default DeailsSection;
