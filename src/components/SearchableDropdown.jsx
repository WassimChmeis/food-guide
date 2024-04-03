import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";

const SearchableDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState({});
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from API
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
        setFilteredOptions(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]);

  function handlevalue(event) {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
    // console.log(options);
  }

  function handleInputBlur() {
    setTimeout(() => {
      setSearchTerm("");
    }, 500); // Delay of 1000 milliseconds (1 second)
  }

  return (
    <div className="flex flex-col">
      <input
        onBlur={handleInputBlur}
        value={searchTerm}
        onChange={handlevalue}
        className="  md:w-[200px] lg:w-[300px]  w-full bg-[#f8f8f8] rounded-md border-gray-400 border py-2 text-left"
        placeholder="  Search Any Food"
      />

      <div className="md:w-[200px] lg:w-[300px]  w-full  mt-12 absolute opacity-90 bg-gray-100 rounded-md max-h-[400px] overflow-y-auto overflow-x-hidden scroll ">
        {searchTerm != "" && (
          <div className="  cursor-pointer  w-[300px]">
            {searchTerm.length > 0 &&
              options.meals &&
              options.meals.map((item) => (
                <Link key={item.idMeal} to={"/dish/" + item.idMeal}>
                  <option
                    value={item.idMeal}
                    className=" border-b mx-1 py-1 px-2"
                  >
                    {item.strMeal}
                  </option>
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>

    // <>
    //   <Select on onChange={handlevalue} />
    // </>
  );
};

export default SearchableDropdown;
