import React from "react";
import shortedDesktop from "../images/bg-shorten-desktop.svg";

const Form = () => {
  return (
    <form
      className=" mt-[-9rem] bg-DarkViolet rounded-[.5rem] h-[8rem] mx-[7rem] flex justify-center items-center gap-[2rem]"
      style={{
        backgroundImage: `url(${shortedDesktop.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <input
        type="text"
        className="bg-white w-[70%] h-[3rem] rounded-[.5rem] px-[1rem]"
        placeholder="Shorten a link here..."
      />
      <button
        className="bg-Cyan font-[600] text-[white] h-[3rem] rounded-[0.5rem] px-[2rem]"
        type="submit"
      >
        Shorten It!
      </button>
    </form>
  );
};

export default Form;
