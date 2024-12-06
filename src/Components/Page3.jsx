import React from "react";

const Page3 = ({ image, heading, paragraph, icon, no }) => {
  return (
    <div>
      <div className="flex flex-col gap-10 ml-44 mb-40 ">
        <div className="w-[160px] h-[180px] flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-[160px] h-[180px]" 
          />
        </div>
        <h1 className="font-extrabold text-2xl text-white">{heading}</h1>
        <p className="font-semibold text-xl w-[350px] text-white">{paragraph}</p>
        <div className="flex flex-row gap-2">
          <div className="text-green-600 text-3xl">{icon}</div>
          <div className="font-bold text-white text-2xl">{no}</div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
