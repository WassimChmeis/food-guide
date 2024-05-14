import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MealCard = ({ data }) => {
  return (
    <div className=" border-2  rounded-xl shadow hover:scale-105 transition-all w-[90%] sm:w-[250px] max-w-64 sm:max-w-72 h-[330px]">
      <Link to={`/dish/${data.idMeal}`}>
        <div
          className="    flex flex-col justify-center   "
          key={data.strMeal + data.idMeal}
        >
          <LazyLoadImage
            className=" rounded-xl rounded-bl-none rounded-br-none  w-full border-2 object-bottom "
            src={data.strMealThumb}
          />
          <div className="my-2"></div>
          <div className=" text-left  text-[16px] mb-3 px-2">
            {"Dish: "}
            <span className=" font-minor text-[#706f7b]">
              {(data.strMeal.length > 35 &&
                data.strMeal.slice(0, 35) + "...") ||
                data.strMeal}
            </span>{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealCard;
