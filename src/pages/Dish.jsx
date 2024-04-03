import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from "react-player/youtube";
import Footer from "../components/Footer";

const Dish = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleReady = (event) => {
    console.log("Player is ready:", event);
  };

  const handlePlay = (event) => {
    console.log("Video is playing:", event);
  };

  const handleError = (error) => {
    console.error("Error playing video:", error);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const result = await response.json();

        setData(result.meals[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar
        bgColor={"bg-[#f8f8f8]"}
        list={["Home", "About", "Project", "Contact"]}
      />

      <div className="bg-[#f8f8f8] text-center md:text-left px-3 md:px-12    ">
        <div className="py-16"></div>

        <div className="flex lg:flex-row flex-col font-minor  gap-x-10 gap-y-3">
          <div className=" flex justify-start md:items-start flex-col  lg:w-1/2">
            <h1 className=" text-3xl">
              {data.strMeal} ({data.strCategory})
            </h1>
            <div className="text-[#706f7b]">Origin: {data.strArea}</div>

            <h1 className="hidden md:block font-bold text-[20px] mt-5">
              Instructions:{" "}
            </h1>
            <p className="text-[#706f7b] hidden md:block ">
              {data.strInstructions}
            </p>
          </div>
          <div className=" flex justify-center max-h-[450px]  lg:w-1/2">
            <img
              className=" rounded-lg  w-full object-cover  "
              src={data.strMealThumb}
            />
          </div>
          <h1 className=" md:hidden font-bold text-[20px] mt-8">
            Instructions:{" "}
          </h1>
          <p className="text-[#706f7b]  md:hidden ">{data.strInstructions}</p>
        </div>
        <div className="flex flex-col justify-center  text-[30px] font-Madimi py-10">
          <div className=" w-full border-t-2 mt-6 "></div>
          <h1 className=" text-center mb-7  my-9">Ingredients </h1>

          <div className=" flex flex-col md:flex-row font-minor text-gray-500 gap-12">
            <div className="md:w-1/2 pt-3  w-full flex justify-center items-start order-2 md:order-1  ">
              <ReactPlayer
                config={{
                  youtube: {
                    playerVars: {
                      origin: "http://localhost:5173",
                    },
                  },
                }}
                onReady={handleReady}
                onPlay={handlePlay}
                onError={handleError}
                width={"95%"}
                controls={true}
                url={data.strYoutube}
              />
            </div>
            <ul className=" text-left text-[15px] w-full md:w-1/2 flex flex-col pl-12  mx-auto  list-disc sm:text-[22px] order-1 md:order-2 ">
              {data.strIngredient1 && (
                <li className="">
                  {data.strMeasure1} {data.strIngredient1}
                </li>
              )}

              {data.strIngredient2 && (
                <li className="">
                  {data.strMeasure2} {data.strIngredient2}
                </li>
              )}

              {data.strIngredient3 && (
                <li className="">
                  {data.strMeasure3} {data.strIngredient3}
                </li>
              )}

              {data.strIngredient4 && (
                <li className="">
                  {data.strMeasure4} {data.strIngredient4}
                </li>
              )}

              {data.strIngredient5 && (
                <li className="">
                  {data.strMeasure5} {data.strIngredient5}
                </li>
              )}

              {data.strIngredient6 && (
                <li className="">
                  {data.strMeasure6} {data.strIngredient6}
                </li>
              )}

              {data.strIngredient7 && (
                <li className="">
                  {data.strMeasure7} {data.strIngredient7}
                </li>
              )}

              {data.strIngredient8 && (
                <li className="">
                  {data.strMeasure8} {data.strIngredient8}
                </li>
              )}

              {data.strIngredient9 && (
                <li className="">
                  {data.strMeasure9} {data.strIngredient9}
                </li>
              )}
              {data.strIngredient10 && (
                <li className="">
                  {data.strMeasure10} {data.strIngredient10}
                </li>
              )}

              {data.strIngredient11 && (
                <li className="">
                  {data.strMeasure11} {data.strIngredient11}
                </li>
              )}

              {data.strIngredient12 && (
                <li className="">
                  {data.strMeasure12} {data.strIngredient12}
                </li>
              )}

              {data.strIngredient13 && (
                <li className="">
                  {data.strMeasure13} {data.strIngredient13}
                </li>
              )}

              {data.strIngredient14 && (
                <li className="">
                  {data.strMeasure14} {data.strIngredient14}
                </li>
              )}

              {data.strIngredient15 && (
                <li className="">
                  {data.strMeasure15} {data.strIngredient15}
                </li>
              )}
              {data.strIngredient16 && (
                <li className="">
                  {data.strMeasure16} {data.strIngredient16}
                </li>
              )}

              {data.strIngredient17 && (
                <li className="">
                  {data.strMeasure17} {data.strIngredient17}
                </li>
              )}

              {data.strIngredient18 && (
                <li className="">
                  {data.strMeasure18} {data.strIngredient18}
                </li>
              )}

              {data.strIngredient19 && (
                <li className="">
                  {data.strMeasure19} {data.strIngredient19}
                </li>
              )}

              {data.strIngredient20 && (
                <li className="">
                  {data.strMeasure20} {data.strIngredient20}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dish;
