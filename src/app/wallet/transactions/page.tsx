"use client"

import WalletContainer from '@/components/layout/WalletContainer'
import React from 'react'

const TransactionPage = () => {
  return (
    <WalletContainer heading='Transaction History'>
      <div className='flex flex-col gap-y-5 pt-5'>
        {Array.from({ length: 10 }).map((_, index) => (
          <TransactionInfo key={index} />
        ))}
      </div>
    </WalletContainer>
  )
}

export default TransactionPage


const TransactionInfo = () => {
  return (
    <div className='grid grid-cols-3 items-center bg-ghost-white/4 rounded-lg py-[31px] px-[27px]'>
      <div className='flex flex-col'>
        <span className='font-medium text-white text-xl'>Purchase</span>
        <span className='font-semilight text-gray-500 text-sm'>Flat #1196, Palm Tower</span>
      </div>

      <div className='flex justify-center items-center'>
        <span className='font-medium text-xl text-gray-500'>07/09/2025</span>
      </div>

      <div className='flex flex-col justify-end'>
        <span className='font-medium text-xl text-ghost-white text-right'>30 ETH</span>
        <div className='flex justify-end'>
          <div className='w-[83px] bg-primary rounded-[4px] px-5 py-2 flex justify-center items-center'>
            <span className='font-seminormal text-ghost-white text-xs text-right'>Completed</span>
          </div>
        </div>
      </div>
    </div>
  )
}