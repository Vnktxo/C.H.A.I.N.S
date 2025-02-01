import React from 'react';
import Image from 'next/image';

const HeroCard = ({ title, description, textColor, bgColor, image }) => {
  return (
    <div className="w-full h-full max-w-[25rem] mx-auto border rounded-[20px] flex flex-col ">
      <div
        className={`${bgColor} rounded-t-[20px] flex justify-center  xl:h-[200px] relative  h-[200px]`}>
        <Image
          src={image}
          alt={title}
          className={` px-[1rem] left-1/2  -translate-x-1/2 w-full aspect-auto xl:h-[240px] absolute bottom-0 h-[220px]`}
        />
      </div>
      <div className="px-[1.5rem]   py-[3.25rem]  rounded-b-[20px] border-[#d7d7d7]  ">
        <h2
          className={` font-CabinetGrotesk-Bold leading-[1]  mb-5 text-[1.75rem] ${textColor}`}>
          {title}
        </h2>
        <p className="text-[16px]  font-sans  leading-[1.5]">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
