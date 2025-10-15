import { useCurrentAddress } from '@/hooks/useCurrentAddress'
import { Location, Refresh } from 'iconsax-reactjs'
import React from 'react'

const CurrentLocation = () => {
  const { address, loading, requestLocation } = useCurrentAddress();

  return (
    <div onClick={() => (!loading && !address) && requestLocation()} className="flex items-center gap-x-[10px]">
      <div className="size-10 rounded-[5px] bg-gray-200 flex justify-center items-center cursor-pointer">
        <Location size="18" color="#FC5130" variant="Bold" />
      </div>
      {loading ? (
        <Refresh
          size="16"
          color="var(--color-primary)"
          className='animate-spin'
        />
      ) : (
        <span className="font-normal text-sm text-ghost-white">
          {address ? address : 'Choose Location'}
        </span>
      )}
    </div>
  )
}

export default CurrentLocation