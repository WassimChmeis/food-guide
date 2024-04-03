import { useState, useEffect } from "react";
import Card from "./Card";

const Categories = () => {
  const [foodCategories, setFoodCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        const result = await response.json();
        setFoodCategories(result);
        // console.log(foodCategories);
      } catch (error) {
        console.log(error);
        // setError(error);
        // setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className=" w-full px-6 flex flex-col justify-center items-center ">
        <h1 className=" text-[34px]"> Categories</h1>
        <div className="my-16"></div>
        <div className="flex flex-wrap gap-7 justify-center items-center z-10">
          {foodCategories.categories && foodCategories.categories.length > 0 ? (
            foodCategories.categories.map((item) => (
              <Card key={item.idCategory + item.strCategory} data={item} />
            ))
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
