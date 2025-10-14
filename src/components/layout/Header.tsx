import { Location } from 'iconsax-reactjs';
import React from 'react';
import Button from '../ui/Button';
import ProfileImage from '../../../public/images/png/profile.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="grid grid-cols-3 items-center">
      {/* Current Location */}
      <div className="flex items-center gap-x-[10px]">
        <div className="size-10 rounded-[5px] bg-gray-200 flex justify-center items-center">
          <Location size="18" color="#FC5130" variant="Bold" />
        </div>
        <span className="font-normal text-sm text-ghost-white">
          Dubai Marina, Dubai, UAE
        </span>
      </div>

      {/* Searchbar */}
      <div>
        <input
          type="text"
          name=""
          id=""
          className="bg-gray-100 p-[11px] rounded-[10px] w-full"
        />
      </div>

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
        <Button variant="primary" className="px-4 py-2">
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;
