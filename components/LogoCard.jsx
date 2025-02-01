import React from 'react';
import Image from 'next/image';

const LogoCard = ({ logo }) => {
  return (
    <div className="w-[64px] h-[64px] p-3 md:w-[100px] md:h-[100px] flex-shrink-0 rounded-[0.8rem] md:p-[24px] flex items-center justify-center  shadow-logocard border border-[#24244f] relative after:content-[''] logo">
      <Image src={logo} alt="Logo" />
    </div>
  );
};

export default LogoCard;
