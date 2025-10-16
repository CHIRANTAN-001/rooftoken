import React, { Fragment } from 'react';
import PropertyImage from '../../../public/images/png/property.png';
import Image from 'next/image';
import Grid from '../../../public/icon/Grid';
import EthereumIcon from '../../../public/icon/EthereumIcon';
import DirhamIcon from '../../../public/icon/DirhamIcon';
import Button from './Button';
import { Property } from '@/constants/types';

type PropertyCardProps = {
  data: Property;
  isOwned?: boolean;
};

const PropertyCard = ({ data, isOwned = false }: PropertyCardProps) => {
  const getButtonText = (propertyType: string): string => {
    switch (propertyType) {
      case 'rent':
        return 'Rent';
      case 'purchase':
        return 'Buy Now';
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full h-[276px] rounded-xl overflow-hidden">
      {/* Main Property Image */}
      <Image
        src={PropertyImage}
        alt="Property Image"
        width={312}
        height={276}
        className="w-full h-full object-cover rounded-xl"
      />

      {/* Gradient blur at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[170px]">
        <div
          className="w-full h-full backdrop-blur-xl"
          style={{
            maskImage:
              'linear-gradient(to top, rgba(255, 250, 255, 0.12) 100%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to top, black 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Bakcground Overlay */}
      <div className="bg-gray-5 inset-0 absolute " />

      {/* ERC Token Identifier */}
      <div className="absolute right-2 top-2 w-[75px] h-[34px] bg-gray-50 backdrop-blur-50 rounded-[5px] flex justify-center items-center">
        <span className="text-ghost-white font-seminormal text-sm">
          {data.token_standard}
        </span>
      </div>

      {/* Property Details */}
      <div className="absolute px-5 bottom-0 left-0 w-full h-[162px]">
        <span className="text-white font-semimedium text-xl">{data?.name}</span>
        <div className="flex items-center gap-x-2 mt-[10px]">
          <Grid />
          <span className="text-gray-300 font-normal text-sm">
            {data?.location}
          </span>
        </div>

        {isOwned ? (
          <div className='flex flex-col gap-y-[9px] mt-[15px]'>
            <Button variant='card-btn' type='submit' weight='normal' className='h-[35px]'>
              Sell
            </Button>
            <Button variant='card-btn-2' type='submit' weight='normal' className='h-[35px]'>
              Rent Out
            </Button>
          </div>
        ) : (
          <Fragment>
            <div className="h-[1px] bg-gray-100 mt-[17px]" />

            <div className="w-full flex justify-between items-center pt-4">
              <div className="flex flex-col gap-y-[6px]">
                <div className="flex items-center gap-x-[6px]">
                  <EthereumIcon />
                  <span className="text-white font-normal text-sm">
                    {data.price_eth} ETH
                  </span>
                </div>
                <div className="flex items-center gap-x-[6px]">
                  <DirhamIcon />
                  <span className="text-white/60 font-normal text-sm">
                    {data?.price_dirham}
                  </span>
                </div>
              </div>

              <Button variant="card-btn" className="w-fit px-10 py-[11.5px]">
                {getButtonText(data.type)}
              </Button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
