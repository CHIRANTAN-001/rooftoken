"use client"

import React from 'react'
import WalletContainer from '@/components/layout/WalletContainer'
import PropertyCard from '@/components/ui/PropertyCard'
import { propertyData } from '@/constants/propertyData'
import { Property } from '@/constants/types'
import { useAtom } from 'jotai'
import { isSidebarOpenAtom } from '@/state/AppState'


const OwnedPropertiesPage = () => {

  const [isSidebarOpen,] = useAtom(isSidebarOpenAtom)

  return (
    <WalletContainer heading='Your Properties'>
      <div className={`grid ${isSidebarOpen ? 'grid-cols-3' : 'grid-cols-4'} gap-[25px] pt-[34px] transition-all`}>
        {propertyData.map((property: Property, index: number) => (
          <PropertyCard
            key={index}
            isOwned
            data={property}
          />
        ))}
      </div>
    </WalletContainer>
  )
}

export default OwnedPropertiesPage