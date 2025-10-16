import React from 'react'

type WalletContainerProps = {
  children: React.ReactNode;
  heading: string
}

const WalletContainer = ({ children, heading }: WalletContainerProps) => {
  return (
    <div className='bg-ghost-white/5 rounded-lg p-[30px]'>
      <span className='font-seminormal text-white text-2xl'>{heading}</span>
      {children}
    </div>
  )
}

export default WalletContainer