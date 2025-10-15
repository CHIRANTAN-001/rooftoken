import useCountdown from '@/hooks/useCountdown';
import React from 'react';

const BidCounter = () => {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const bidEndDate = new Date('2025-10-19T23:59:59');
  const { hours, minutes, seconds } = useCountdown(bidEndDate);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2">
      {[hours, minutes, seconds].map((value: number, index: number) => (
        <div key={index} className='flex flex-col gap-y-1'>
          <div
            className="bg-gray-50 size-[49px] backdrop-blur-[60px] rounded-[6px] flex justify-center items-center"
          >
            <span className="font-seminormal text-ghost-white text-[26px]">
              {formatNumber(value)}
            </span>
          </div>
          <span className='text-ghost-white text-xs font-normal text-center'>
            {index === 0 ? 'hrs' : index === 1 ? 'mins' : 'secs'}
          </span>
      </div>
      ))}
    </div>
  );
};

export default BidCounter;
