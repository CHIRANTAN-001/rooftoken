import React from 'react';
import ProfileImage from '../../../public/images/png/profile.png';
import Image from 'next/image';
import WalletConnectButton from '../wallet/WalletConnectButton';
import CurrentLocation from '../CurrentLocation';
import PropertySuggestion from '../PropertySuggestion';

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center">
      {/* Current Location */}
      <CurrentLocation />

      {/* Searchbar */}
      <PropertySuggestion />

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
    </header>
  );
};

export default Header;
