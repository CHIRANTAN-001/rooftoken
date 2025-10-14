import React from 'react';

const Logo = ({ isName }: { isName?: boolean }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="bg-primary shadow-inset-black w-[50px] h-[50px] rounded-[5px] flex justify-center items-center">
        <span className="text-ghost-white font-mid-semibold text-[30px]">
          R
        </span>
      </div>
      {isName && (
        <span className="text-ghost-white text-base font-medium">
          RoofToken
        </span>
      )}
    </div>
  );
};

export default Logo;
