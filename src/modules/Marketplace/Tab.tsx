import TabComponent from '@/components/ui/TabComponent';
import { FilterOption } from '@/constants/types';
import React from 'react';

type TabProps = {
  propertyType: string;
  handleFilterChange: (value: string) => void;
};

const filterOptions: FilterOption[] = [
  { name: 'All', value: 'all' },
  { name: 'One-Click Purchase', value: 'purchase' },
  { name: 'For Rent', value: 'rent' },
];

const Tab = ({ propertyType, handleFilterChange }: TabProps) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white font-seminormal text-2xl">
        Discover Properties
      </span>
      <TabComponent
        filterOptions={filterOptions}
        currentValue={propertyType}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default Tab;
