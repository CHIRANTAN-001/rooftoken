import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ArrowDown2 } from 'iconsax-reactjs';
import Image from 'next/image';
import React from 'react';

const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openConnectModal,
        openAccountModal,
        openChainModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected = ready && account && chain;

        return (
          <div className='flex items-center gap-x-2'>
            {connected && chain && (
              <button
                onClick={openChainModal}
                type="button"
                className='bg-gray-10 px-4 h-10 rounded-[5px] flex justify-center items-center cursor-pointer'
              >
                <div
                  className='flex items-center gap-x-[6px]'
                >
                  {chain.hasIcon && (
                    <Image
                      src={chain.iconUrl || '/default-chain-icon.png'}
                      alt={chain.name || 'Chain icon'}
                      width={100}
                      height={100}
                      className="size-4 object-cover rounded-[5px]"
                    />
                  )}
                  <span className='text-ghost-white text-sm font-normal'>
                    {chain?.name?.slice(0,3).toUpperCase()}
                  </span>
                  <ArrowDown2
                    size="16"
                    color="var(--primary)"
                  />
                </div>
              </button>
            )}
            <button
              onClick={connected ? openAccountModal : openConnectModal}
              type="button"
              className='bg-gray-10 px-4 h-10 rounded-[5px] flex justify-center items-center cursor-pointer'
            >
              {connected ? (
                <div
                  className='flex items-center gap-x-[6px]'
                >
                  <span className='text-ghost-white text-sm font-normal'>
                    {account?.displayName}
                  </span>
                  <ArrowDown2
                    size="16"
                    color="var(--primary)"
                  />
                </div>
              ) : (
                <span className='text-ghost-white text-sm font-normal'>
                  Connect Wallet
                </span>
              )}
            </button>
          </div>

        );

      }}
    </ConnectButton.Custom>
  )
};

export default WalletConnectButton;
