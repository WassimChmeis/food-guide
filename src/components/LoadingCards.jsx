import React from "react";

const LoadingCards = () => {
  return (
    <div className=" animate-pulse border-2  rounded-xl shadow transition-all w-[90%] sm:w-[250px] max-w-64 sm:max-w-72 h-[330px]">
      <div className="    flex flex-col justify-center h-full   ">
        <div className=" h-4/5 bg-gray-300 rounded-xl rounded-bl-none rounded-br-none  w-full border-2 object-bottom "></div>

        <div className=" h-1/5 text-left  text-[16px] mb-3 px-2">
          <br />
          <div className=" mb-4 rounded-3xl h-3 w-full bg-gray-300"></div>
          <div className="rounded-3xl h-3 w-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCards;
