import React from "react";
import DealsCard from "./ui/DealsCard";

const DeailsSection = () => {
  return (
    <>
      <section className="my-10">
        <div className="container max-w-[1200px] mx-auto">
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
