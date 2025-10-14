import Image from 'next/image';
import React from 'react';
import PropertyImage from '../../../public/images/png/property.png';
import Grid from '../../../public/icon/Grid';
import { cn } from '@/utils/cn';
import BidCounter from '@/components/ui/BidCounter';
import EthereumIcon from '../../../public/icon/EthereumIcon';
import Button from '@/components/ui/Button';

const AuctionCard = () => {
  return (
    <div className="bg-gray-1 rounded-[10px] p-[6px]">
      <div className="flex items-center gap-x-[14px]">
        {/* Left Side */}
        <Image
          src={PropertyImage}
          alt="Property Image"
          width={200}
          height={188}
          className="w-[100px] h-[88px] object-cover rounded-[5px]"
        />

        {/* Right Side */}
        <div className="flex flex-col py-[9px]">
          <span className="font-semimedium text-white text-[17px]">
            Flat #1202, Palm Tower
          </span>
          <div className="flex items-center gap-x-2">
            <Grid />
            <span className="font-normal text-xs text-gray-300">
              Dubai Marina, Dubai, UAE
            </span>
          </div>

          <div
            className={cn(
              'w-[67px] h-[26px] bg-gray-50 rounded-[3px] backdrop-blur-[37.5px]',
              'flex items-center justify-center',
              'mt-[13px]'
            )}
          >
            <span className="text-ghost-white font-seminormal text-[10px]">
              Ownership
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[10px]">
          <span className="font-normal text-[10px] text-white ml-[6px]">
            Ends in
          </span>
          <BidCounter />
        </div>

        <div className="flex flex-col">
          <span className="font-normal text-ghost-white text-[10px] text-right">
            Highest bid
          </span>

          <div className="flex items-center justify-end gap-x-[6px] pt-[6px]">
            <EthereumIcon />
            <span className="font-normal text-sm text-ghost-white">30 ETH</span>
          </div>

          <Button
            variant="primary-shadow"
            className="w-[97px] h-9 mt-[10px]"
            type="xs"
            weight="normal"
          >
            Bid
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
