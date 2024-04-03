import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { LuBeef } from "react-icons/lu";
// import { GiChickenOven } from "react-icons/gi";
// import { LuDessert } from "react-icons/lu";
// import { GiSheep } from "react-icons/gi";
// import { GiTacos } from "react-icons/gi";
// import { GiPig } from "react-icons/gi";
// import { IoFishSharp } from "react-icons/io5";

const Card = ({ data }) => {
  function handleCardClick() {
    localStorage.setItem("userData", JSON.stringify(data));
  }

  // Truncate the paragraph to show only the first 27 characters
  const truncatedDescription =
    data.strCategoryDescription.slice(0, 120) +
    (data.strCategoryDescription.length > 120 ? "..." : "");

  return (
    <div
      className=" border-2  rounded-xl shadow hover:border-[#ef4444] transition-all hover:"
      onClick={handleCardClick}
    >
      <Link to={`/category/${data.strCategory}`}>
        <div
          className=" rounded-xl sm:w-[300px] max-w-64 sm:max-w-72 h-[356px] p-4 bg-[#f8f8f8]   "
          key={data.strCategory + data.idCategory}
        >
          {/* <div className="text-[#ff3c3c]">
          {data.strCategory === "Beef" && <LuBeef className=" text-[150px]" />}
          {data.strCategory === "Chicken" && (
            <GiChickenOven className=" text-[150px]" />
          )}

          {data.strCategory === "Dessert" && (
            <LuDessert className=" text-[150px]" />
          )}
          {data.strCategory === "Lamb" && <GiSheep className=" text-[150px]" />}
          {data.strCategory === "Miscellaneous" && (
            <GiTacos className=" text-[150px]" />
          )}
          {data.strCategory === "Pork" && <GiPig className=" text-[150px]" />}
          {data.strCategory === "Seafood" && (
            <IoFishSharp className=" text-[150px]" />
          )}
        </div> */}

          <img src={data.strCategoryThumb} />

          <br />
          <h3 className="text-[23px] mb-3">
            {" "}
            <span className=" border-b-2 border-cyan-500">
              {data.strCategory}{" "}
            </span>{" "}
          </h3>
          <p className="text-[#706f7b] font-minor">{truncatedDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
