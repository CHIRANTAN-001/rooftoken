import { FilterOption } from '@/constants/types'
import { cn } from '@/utils/cn';
import React from 'react'

type TabComponentProps = {
  filterOptions: FilterOption[];
  currentValue: string;
  handleFilterChange: (value: string) => void
}

const TabComponent = (
  { filterOptions, currentValue, handleFilterChange }: TabComponentProps
) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {filterOptions.map((option: FilterOption, index: number) => (
        <div
          key={index}
          className={cn(
            "h-[46px] px-[17px] transition-all duration-300 ease-in-out",
            "rounded-[5px] text-sm flex items-center justify-center cursor-pointer",
            `${currentValue.includes(option.value) ? 'bg-primary text-ghost-white' : 'bg-orange-200 border border-orange-300 text-primary'}`
          )}
          onClick={() => handleFilterChange(option.value)}
        >
          <span>
            {option.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default TabComponent