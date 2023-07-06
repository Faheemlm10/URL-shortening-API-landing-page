import React from "react";
import BodyWorking from "../images/illustration-working.svg";
import Image from "next/image";
import Form from "./Form";
import Information from "./Information";

const Body = () => {
  return (
    <>
      <div className="pl-[7rem] flex justify-between mt-[2rem]">
        <div className="w-[50%]">
          <div className="font-bold text-[5rem] leading-[5.5rem] w-[85%]">
            More than just shorter links
          </div>
          <div className="mt-[1rem] text-[Gray] text-[1.2rem] w-[75%]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className="text-white mt-[1.5rem] font-[600] bg-Cyan rounded-[3rem] px-[2.2rem] py-[0.8rem]">
            Get Started
          </button>
        </div>
        <div className="relative w-[45%]">
          <Image
            src={BodyWorking}
            alt="Body Desk"
            className="absolute left-[5rem] top-[-2rem]"
          />
        </div>
      </div>
      <div
        className="mt-[13rem] w-[100%] py-[5rem] relative "
        style={{
          background: "rgba(128, 128, 128, 0.1)",
        }}
      >
        <Form />
        <Information />
      </div>
    </>
  );
};

export default Body;
