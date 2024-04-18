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
    <div className="w-full min-h-12 bg-white grid place-content-center">
      <div className="-translate-y-[50%] flex items-center justify-center md:gap-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={activeTab === index ? { background: '#ffcece' } : undefined}
            className={`p-4 shadow-lg bg-white  text-black rounded-lg min-w-[70px] scale-90 md:scale-100 flex flex-col items-center justify-center group hover:bg-red-100`}
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