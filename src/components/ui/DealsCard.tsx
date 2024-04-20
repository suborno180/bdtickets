import Image from "next/image";
import React from "react";

const DealsCard = () => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <article className="overflow-hidden rounded-lg border group border-gray-100 bg-white shadow-sm">
        <div className="w-full h-full max-h-[250px] overflow-hidden">
        <Image
          alt="image"
          src="/0c6298c1-14b4-442c-8a48-a4c30712ee53.jpeg"
          className="h-56 w-full object-cover group-hover:scale-105 transition-all"
          width={250}
          height={250}
        />
        </div>

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
            Relax Transport Eid Campaign
            </h3>
          </a>


          <div className="w-full flex items-center justify-between py-4"> 
                <div>
                    <button className="bg-red-600 hover:bg-red-700 rounded-md text-white p-2 px-4">BOOK NOW</button>
                </div>
                <div>

                </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DealsCard;
