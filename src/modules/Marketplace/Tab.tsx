import { cn } from '@/utils/cn';
import React from 'react';

type TabProps = {
  propertyType: string;
  handleFilterChange: (value: string) => void;
};

type FilterOption = {
  name: string;
  value: string;
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

      <div className="flex flex-wrap items-center gap-2">
        {filterOptions.map((option: FilterOption, index: number) => (
          <div
            key={index}
            className={cn(
              "h-[46px] px-[17px] transition-all duration-300 ease-in-out",
              "rounded-[5px] text-sm flex items-center justify-center cursor-pointer",
              `${propertyType === option.value ? 'bg-primary text-ghost-white' : 'bg-orange-200 border border-orange-300 text-primary'}`
            )}
            onClick={() => handleFilterChange(option.value)}
          >
            <span>
              {option.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
