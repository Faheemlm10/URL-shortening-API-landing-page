import React from "react";
import Image from "next/image";
import Logo from "../images/logo.svg";

const Nav = () => {
  return (
    <div className="px-[7rem] py-[2rem] flex justify-between ">
      <div className="flex gap-[3rem] items-center">
        <div>
          <Image src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-[2rem] text-[Gray] font-bold text-[0.9rem]">
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
      </div>
      <div className="flex gap-[2rem] text-[Gray] font-bold text-[.9rem] items-center">
        <div>Login</div>
        <div className="text-white font-[600] bg-Cyan px-[1rem] py-[0.5rem] rounded-[1rem]">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Nav;
