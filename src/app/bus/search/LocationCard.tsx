"use client"
import React from "react";
import { useSearchParams } from "next/navigation";

interface LocationCardProps {
    from: string;
    to: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ from, to }) => {
    const searchParams = useSearchParams();
    const date = searchParams.get('journeyDate');
    
    const formatDate = (inputDate: string): string => {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate: string = new Date(inputDate).toLocaleDateString('en-GB', options);
        return formattedDate;
    };

    return (
        <div>
            <div className="max-w-[350px] p-4 text-white min-h-20 bg-white/20">
                <p>ONWARD</p>
                <strong>
                    {from} to {to} {date ? `On ${formatDate(date)}` : ''}
                </strong>
            </div>
        </div>
    );
};

export default LocationCard;