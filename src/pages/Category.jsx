import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MealCard from "../components/MealCard";
import dishImage from "../assets/-2147483648_-210100.webp";
import chickenImage from "../assets/pngtree-grilled-chicken-on-a-black-plate-png-image_9163866.png";
import dessert from "../assets/photo_2024-03-28_23-26-11.jpg";
import lamb from "../assets/-2147483648_-210105.webp";
import pasta from "../assets/spaghetti-with-basil-and-cheese-on-black-plate-isolated-on-a-transparent-background-png.jpg";
import seafood from "../assets/assiette-1012x1024.webp";
import broccolli from "../assets/WEB-0215-SOUPS-161.webp";
import salad from "../assets/photo_2024-03-29_00-56-09.jpg";
import breakfast from "../assets/Copina_Co_Savory_Breakfast_Plate_JPG.jpg";
import goat from "../assets/1200-by-1200-images-3.jpg";
import sideDish from "../assets/image.webp";
import pork from "../assets/Best-Ever-Air-Fryer-Pork-Chops.jpg";
import LoadingCards from "../components/LoadingCards";
import axios from "axios";
import Footer from "../components/Footer";

const Category = () => {
  const [data, setData] = useState({});
  //   const [loading, setloading] = useState(true);
  const { id } = useParams();
  const [bio, setbio] = useState({});

  //   useEffect(() => {
  //     setloading(true);
  //     async function fetchData() {
  //       try {
  //         const response = await fetch(
  //           `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
  //         );
  //         const result = await response.json();
  //         setData(result);
  //         setbio(JSON.parse(localStorage.getItem("userData")));
  //         // console.log(bio);
  //         // console.log(localStorage.getItem("userData"));
  //         setloading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }

  //     fetchData();
  //   }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then((response) => {
        setData(response.data);
        setbio(JSON.parse(localStorage.getItem("userData")));
        // setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar
        bgColor={"bg-[#f8f8f8]"}
        list={["Home", "About", "Project", "Contact"]}
      />
      <div className="bg-[#f8f8f8] font-Madimi ">
        <div className="py-8"></div>
        <div className=" flex mx-10 gap-8  my-20   ">
          <div className=" text-center md:text-start md:w-1/2">
            <h1 className=" mb-5 text-[40px]">{id}</h1>
            <p className="text-[#706f7b] font-minor">
              {bio.strCategoryDescription}
            </p>
          </div>
          <div className=" hidden md:flex  w-1/2  justify-center items-center py-5   lg:border-2  rounded-3xl">
            {id === "Beef" && (
              <img className="w-[300px] h-[300px]" src={dishImage} />
            )}
            {id === "Chicken" && (
              <img className="w-[300px] h-[300px]" src={chickenImage} />
            )}
            {id === "Dessert" && (
              <img className="w-[300px] h-[300px] rounded-full" src={dessert} />
            )}
            {id === "Lamb" && (
              <img
                className="w-[300px] h-[300px] opacity-95 rounded-full"
                src={lamb}
              />
            )}
            {id === "Pasta" && (
              <img className="w-[300px] h-[300px]  rounded-full" src={pasta} />
            )}

            {id === "Seafood" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={seafood}
              />
            )}
            {id === "Starter" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={broccolli}
              />
            )}
            {id === "Vegan" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={salad}
              />
            )}
            {id === "Vegetarian" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={salad}
              />
            )}
            {id === "Breakfast" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={breakfast}
              />
            )}
            {id === "Goat" && (
              <img className="w-[300px] h-[300px]    rounded-full" src={goat} />
            )}
            {id === "Side" && (
              <img
                className="w-[300px] h-[300px]    rounded-full"
                src={sideDish}
              />
            )}
            {id === "Pork" && (
              <img className="w-[300px] h-[300px]    rounded-full" src={pork} />
            )}
          </div>
        </div>
        <div className="border-t-2 flex flex-col items-center mx-8 ">
          <h1 className="mt-10 text-[30px]">
            Explore <span className="text-red-500">{id}</span> Recipes
          </h1>
          <div className="flex flex-wrap gap-7 justify-center items-center z-10  py-20 ">
            {data.meals && data.meals.length > 0 ? (
              data.meals.map((item) => (
                <MealCard key={item.idMeal} data={item} />
              ))
            ) : (
              <div className=" min-w-96 flex flex-wrap gap-7 justify-center items-center z-10  py-20">
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
                <LoadingCards />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-7"></div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
