// import React from "react";
import image from "../assets/image_2024-03-26_16-25-44.png";

const Hero = () => {
  return (
    <>
      <div className="flex  w-[100%] py-16  ">
        <div className=" md:w-1/2 my-14    text-[#111827]  mx-auto   flex flex-col justify-center items-center text-center md:text-start md:items-start  ">
          <h2 className="text-[22px]">Pick Your Dish</h2>
          <h1 className="text-[34px] max-w-[600px]">
            Your <span className="text-[#ef4444]">Neighborhood</span> Spot for
            Comfort Food Classics
          </h1>
          <div className="my-3"></div>
          <h3 className=" text-[#706f7b] font-minor max-w-[600px]">
            Enjoy quick and tasty dinner recipes that save you time and effort.
            Discover easy meals perfect for friends and family right here.
          </h3>
          <div className="my-4"></div>
          <div className="flex gap-x-4">
            <button className=" transition-all hover:bg-[#ff8a53] py-2 px-5 bg-[#ef4444] text-white rounded">
              Book Food
            </button>
            <button className=" hover:bg-transparent border-2 hover:text-black transition-all  border-black py-2 px-5 bg-black text-white rounded">
              Learn more
            </button>
          </div>
        </div>
        <img
          className="lg:w-[550px] lg:h-[550px] md:w-[350px]  md:h-[350px] mx-auto md:w1/2 md:block hidden "
          src={image}
        />
      </div>
    </>
  );
};

export default Hero;
