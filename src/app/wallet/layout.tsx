"use client"

import Image from 'next/image'
import React from 'react'
import ProfileImage from '../../../public/images/png/profile.png'
import WalletConnectButton from '@/components/wallet/WalletConnectButton'
import Sidebar from '@/components/layout/Sidebar'
import TabComponent from '@/components/ui/TabComponent'
import { usePathname, useRouter } from 'next/navigation'
import { FilterOption } from '@/constants/types'


const filterOptions: FilterOption[] = [
  { name: 'Balance', value: 'balance' },
  { name: 'Transactions', value: 'transactions' },
  { name: 'Owned Properties', value: 'owned-properties' },
];

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleFilterChange = (val: string): void => {
    router.push(`/wallet/${val}`);
  }

  return (
    <Sidebar hideAuctionSection>
      <div className='pl-5 pr-[39px]'>
        <div className='flex justify-end'>
          <div className="flex justify-end gap-x-[6px]">
            <div className="bg-yellow rounded-[5px] flex justify-center items-center">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                width={100}
                height={100}
                className="size-10 object-cover"
              />
            </div>
            <WalletConnectButton />
          </div>
        </div>
        <div className='mt-[1px]'>
          <span className='font-semimedium text-white text-[40px]'>
            Wallet
          </span>
        </div>
        <div className='pt-[29.5px]'>
          <TabComponent
            filterOptions={filterOptions}
            currentValue={pathName}
            handleFilterChange={handleFilterChange}
          />
       </div>
        <div className='pt-[15.5px]'>
          {children}
        </div>
      </div>
  </Sidebar>
  )
}

export default WalletLayout