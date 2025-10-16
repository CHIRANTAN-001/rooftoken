import { isPopoverOpenAtom } from '@/state/AppState'
import { useAtom } from 'jotai'
import React from 'react'
import SearchBar from './SearchBar'
import { Dialog, DialogContent, DialogTitle } from './ui/dialog'
import { propertyData } from '@/constants/propertyData'
import { Property } from '@/constants/types'
import Image from 'next/image'

import PropertyImage from '../../public/images/png/property.png'
import { cn } from '@/utils/cn'

const PropertySuggestion = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useAtom(isPopoverOpenAtom)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        e.stopPropagation()
        setIsPopoverOpen(!isPopoverOpen)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='w-full relative'>
      <SearchBar />

      {isPopoverOpen && (
        <Dialog open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <DialogContent className="sm:max-w-[350px] h-[400px] p-2 overflow-y-auto bg-black-200" showCloseButton={false}>
            <DialogTitle className='hidden'/>
            <div className="sticky top-0 z-10">
              <input
                type="text"
                name=""
                id=""
                className={cn(
                  "bg-gray-100 px-3 h-8 rounded-[5px] w-full focus:outline-none",
                  "font-normal text-xs text-ghost-white placeholder:text-ghost-white/28"
                )}
                placeholder='Find apartments'
              />
            </div>
            <div className="overflow-y-auto h-full scrollbar-hide flex flex-col gap-y-2">
              {propertyData?.map((property: Property) => (
                <div key={property.id} className="flex items-start gap-x-2 ">
                  <Image
                    src={PropertyImage}
                    alt="Property Image"
                    width={200}
                    height={188}
                    className="w-[100px] h-[88px] object-cover rounded-[5px]"
                  />
                  <div className='flex flex-col gap-y-1'>
                    <span className='text-ghost-white text-sm font-medium truncate'>
                      {property.name}
                    </span>
                    <span className='text-gray-300 text-xs font-normal truncate'>
                      {property.location}
                    </span>
                    <div
                      className={cn(
                        'w-[67px] h-[26px] bg-gray-50 rounded-[3px] backdrop-blur-[37.5px] hover:bg-ghost-white hover:text-primary hover:scale-105 transition-all ease-in-out',
                        'flex items-center justify-center cursor-pointer',
                        'mt-[13px]',
                        "text-ghost-white font-seminormal text-[10px]"
                      )}
                    >
                      {property.type === 'rent' ? 'Rent' : 'Buy Now'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

export default PropertySuggestion