
"use client"
import React from 'react'
import EthereumIconLarge from '../../../../public/icon/EthereumIconLarge'
import DirhamIconMedium from '../../../../public/icon/DirhamIconMedium'
import EthereumIconMedium from '../../../../public/icon/EthereumIconMedium'

type Balance = {
  type: string;
  amount: number;
}

const balance: Balance[] = [
  { type: 'available', amount: 145.52 },
  { type: 'order', amount: 5 },
]

const BalancePage = () => {
  return (
    <div className='bg-gray-1 rounded-lg pl-[30px] pt-[19px] pb-[17px] pr-[23px]'>
      <div className='flex flex-wrap justify-between items-start'>
        {/* First section */}
        <div className='pt-[11px]'>
          <span className='font-seminormal text-white text-2xl'>
            Wallet balance
          </span>

          <div className='flex flex-col gap-y-[10px] pt-[30px]'>
            <div className='flex items-center gap-x-[13px]'>
              <EthereumIconLarge />
              <span className='font-normal text-white text-[30px]'>145.52 ETH</span>
            </div>

            <div className='flex items-center gap-x-[13px]'>
              <DirhamIconMedium />
              <span className='font-normal text-white/60 text-[21px]'>1394392.14</span>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className='flex items-center gap-x-[19px]'>
          {balance?.map((item: Balance, index: number) => (
            <div key={index} className='bg-ghost-white/4 w-[202px] h-[187px] rounded-lg px-4'>
              <div className='flex flex-col gap-y-[38px] pt-[25px]'>
                <span className='font-normal text-[21px] text-white'>{item.type === 'available' ? 'Available' : 'In order'}</span>
                <div className='flex items-center gap-x-[6px]'>
                  <EthereumIconMedium />
                  <span className='font-normal text-white text-[22px]'>{item.amount} ETH</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default BalancePage