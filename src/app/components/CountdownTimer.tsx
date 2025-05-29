'use client';

import React, { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +targetDate - +new Date();
    if (difference <= 0) {
      return null;
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft) {
    return <span className="text-red-500 font-semibold">Offer Expired!</span>;
  }

  const formatTimeUnit = (unit: number, label: string) => (
    <div className="text-center bg-[#fffc] rounded-[3px] py-0.5 px-1.5 md:px-1 text-[#1b281d]">
      <p className="leading-4.5 text-sm font-bold">{String(unit).padStart(2, '0')}</p>
      <p className="leading-2.5 text-[8px]">{label}</p>
    </div>
  );

  return (
    <div className="flex items-center justify-center text-[#fffc] gap-2.5">
      {formatTimeUnit(timeLeft.hours, 'Hrs')}
      <>:</>
      {formatTimeUnit(timeLeft.minutes, 'Min')}
      <>:</>
      {formatTimeUnit(timeLeft.seconds, 'Sec')}
    </div>
  );
};

export default CountdownTimer;