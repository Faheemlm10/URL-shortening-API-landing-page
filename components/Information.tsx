import React from "react";
import recognitionImage from "../images/icon-brand-recognition.svg";
import detailedRecordsImage from "../images/icon-detailed-records.svg";
import customizableImage from "../images/icon-fully-customizable.svg";
import Image from "next/image";
import PopUp from "./PopUp";

const Information = () => {
  return (
    <div className="px-[7rem] mt-[7rem] flex flex-col">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <h2 className="font-bold text-[2rem]">Advanced Statistics</h2>
        <p className="text-[Gray] text-[1rem] w-[35%]">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex justify-between mt-[4rem]">
        <PopUp
          image={recognitionImage}
          title={"Brand Recognition"}
          description={`Boost your brand recognition with each click. Generic links don't mean a
          thing. Branded links help instill confidence in your content.`}
          marginTop={0}
        />
        <PopUp
          image={detailedRecordsImage}
          title={"Detailed Records"}
          description={`Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`}
          marginTop={4}
        />
        <PopUp
          image={customizableImage}
          title={"Fully Customizable"}
          description={`Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`}
          marginTop={8}
        />
      </div>
    </div>
  );
};

export default Information;
