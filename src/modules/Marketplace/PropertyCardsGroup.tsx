import React from 'react';
import PropertyCard from '@/components/ui/PropertyCard';
import { propertyData } from '@/constants/propertyData';
import { Property } from '@/constants/types';

const PropertyCardsGroup = ({ propertyType }: { propertyType: string }) => {
  const filteredData =
    propertyType === 'all'
      ? propertyData.filter((item) => item.type !== 'bid')
      : propertyData.filter((item) => item.type === propertyType);

  return (
    <div className="grid grid-cols-3 gap-[15px] pt-[23px]">
      {filteredData?.map((item: Property, index: number) => (
        <PropertyCard key={index} data={item} />
      ))}
    </div>
  );
};

export default PropertyCardsGroup;
