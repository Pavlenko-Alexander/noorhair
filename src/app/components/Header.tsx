import React from 'react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';

interface HeaderProps {
  logoSrc: string;
  targetDate: Date;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, targetDate }) => {
  return (
    <header className="font-roboto w-full bg-[#1b281d]">
      <div className="max-w-[460px] px-2.5 mx-auto md:max-w-7xl md:px-[15px] flex flex-col">
        <div className="p-1.5  gap-6 flex items-center justify-center">
          <h1 className="leading-none text-[#fdfcfb] md:text-sm text-[11px] text-center">
            EXISTING CUSTOMER DEAL ENDING IN 6 HOURS
          </h1>{' '}
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
      <div className="pt-2 pb-2.5 md:py-4 bg-[#fff]">
        <Image
          src={logoSrc}
          alt="Logo"
          width={150}
          height={50}
          className="object-contain block mx-auto w-29 md:w-[167px] h-auto"
        />
      </div>
    </header>
  );
};

export default Header;
