import React from 'react';
import AuctionCard from './AuctionCard';

const AuctionModule = () => {
  return (
    <div className="">
      <div className="flex items-center gap-x-3">
        <span className="font-seminormal text-2xl text-white">
          Live Auction
        </span>
        <span className="relative flex size-3 justify-center items-center">
          <span className="absolute inline-flex size-6 rounded-full bg-green-200 animate-[livePulse_1.2s_infinite] animate-delay-300"></span>
          <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
      </div>

      <div className="flex flex-col gap-y-[9px] pt-[22px] overflow-y-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <AuctionCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default AuctionModule;
