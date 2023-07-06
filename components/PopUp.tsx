import React from "react";
import Image from "next/image";
import recognitionImage from "../images/icon-brand-recognition.svg";

interface PopUpProps {
  image: string;
  title: string;
  description: string;
  marginTop: number;
}

const PopUp = ({ image, title, description, marginTop }: PopUpProps) => {
  return (
    <div
      style={{ marginTop: `${marginTop}rem` }}
      className="w-[23rem] h-[18rem] bg-white rounded-[1rem] relative flex flex-col px-[2rem]"
    >
      <div className="h-[5rem] w-[5rem] mt-[-2.5rem] bg-VeryDarkViolet rounded-full p-[1.25rem] flex items-center justify-center">
        <Image src={image} alt="logo" className="" />
      </div>
      <h3 className="mt-[2rem] font-bold text-[1.1rem]">{title}</h3>
      <div className="text-[1rem] mt-[1rem] text-GrayishViolet">
        {description}
      </div>
    </div>
  );
};

export default PopUp;
