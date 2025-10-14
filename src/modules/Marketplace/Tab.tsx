import Button from '@/components/ui/Button';
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
    <div className="flex justify-between items-center pt-5">
      <span className="text-white font-seminormal text-2xl">
        Discover Properties
      </span>

      <div className="flex flex-wrap items-center gap-2">
        {filterOptions.map((option: FilterOption, index: number) => (
          <Button
            key={index}
            variant={
              propertyType === option.value ? 'primary' : 'primary-stroke'
            }
            className="h-[46px] px-[17px]"
            onClick={() => handleFilterChange(option.value)}
          >
            {option.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
