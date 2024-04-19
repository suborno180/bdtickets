"use client"
import Image from "next/image";
import React, { useState } from "react";

interface Tab {
  label: string;
  icon: string;
}

interface FilterTabProps {
  tabs: Tab[];
}

const FilterTab: React.FC<FilterTabProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full min-h-12 bg-white md:bg-transparent md:border md:border-red-600 md:rounded-md md:overflow-hidden  grid place-content-center">
      <div className="-translate-y-[50%] md:translate-y-0 flex items-center justify-center md:gap-0">
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={activeTab === index ? { background: '#ffcece' } : undefined}
            className={`p-4 shadow-lg bg-white  text-black rounded-lg min-w-[70px] md:w-full scale-90 md:scale-100 flex flex-col md:flex-row md:gap-1 md:rounded-none md:shadow-none items-center justify-center group hover:bg-red-100`}
            onClick={() => handleTabClick(index)}
          >
            <Image src={tab.icon} alt={tab.label} width={20} height={20} />
            <span className={`text-[10px] font-bold ${activeTab === index && 'text-red-400'}`}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTab;