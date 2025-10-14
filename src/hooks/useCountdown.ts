import React from 'react';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const useCountdown = (targetDate: Date): Countdown => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] =
    React.useState<Countdown>(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;
