import { cn } from '@/utils/cn'
import { LocationDiscover } from 'iconsax-reactjs'
import React from 'react'
import Button from './ui/Button'
import { useAtom } from 'jotai'
import { isPopoverOpenAtom } from '@/state/AppState'

const SearchBar = () => {
  const [, setIsPopoverOpen] = useAtom(isPopoverOpenAtom)

  return (
    <div
      className='w-full relative'
      onClick={() => setIsPopoverOpen(true)}
      // onBlur={() => setIsPopoverOpen(false)}
    >
      <input
        type="text"
        className={cn(
          "bg-gray-100 pl-[38px] pr-[80px] h-10 rounded-[10px] w-full focus:outline-none",
          "font-normal text-sm text-ghost-white placeholder:text-ghost-white/28"
        )}
        placeholder='Find apartments nearby you'
        // disabled
      />

      {/* Icon */}
      <div className='absolute left-[11px] top-[11px]'>
        <LocationDiscover
          size="18"
          color="var(--color-ghost-white)"
        />
      </div>

      <div className='absolute right-[11px] top-[6px]'>
        <Button
          variant='primary-shadow'
          className='py-[10px] h-[30px] px-[9px]'
          weight='normal'
          type='sm'
        >
          ⌘ + K
        </Button>
      </div>
    </div>
  )
}

export default SearchBar