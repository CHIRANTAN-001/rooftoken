import useCountdown from '@/hooks/useCountdown';
import React from 'react';

const BidCounter = () => {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const bidEndDate = new Date('2025-10-15T23:59:59');
  const { days, hours, minutes, seconds } = useCountdown(bidEndDate);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2">
      {[days, hours, minutes, seconds].map((value: number, index: number) => (
        <div
          key={index}
          className="bg-gray-50 size-[49px] rounded-[6px] flex justify-center items-center"
        >
          <span className="font-seminormal text-ghost-white text-[26px]">
            {formatNumber(value)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BidCounter;
