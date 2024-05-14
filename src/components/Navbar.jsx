/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { MdSegment, MdClear } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { Link } from "react-router-dom";
import SearchableDropdown from "./SearchableDropdown";
import { useNavigate } from "react-router-dom";

const Navbar = ({ list, bgColor, searchableInput }) => {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    setNav(!nav);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    console.log(event.target.text);
    if (event.target.text === "Home") {
      navigate("/");
    }
  };

  return (
    <div
      className={` ${bgColor} z-30  fixed w-full flex justify-between items-center mx-auto px-5 md:px-12 text-gray-700  h-20 shadow-md mb-1 `}
    >
      <Link to={"/"}>
        <h1 className=" font-bold text-xl flex items-center">
          Food Guide
          <IoFastFood className="text-[35px] text-red-500" />
        </h1>
      </Link>

      <div className="hidden md:block">
        <SearchableDropdown />
      </div>

      <ul className="font-semibold text-[17px] sm:flex hidden">
        {list.map((item, index) => (
          <li key={item + index} className="p-3">
            <a
              href={`#${item}`}
              onClick={(event) => handleClick(event, item)}
              className="hover:text-blue-500 transition-colors "
            >
              {item}
            </a>
          </li>
        ))}
        {/* <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "home")}
            className="hover:text-blue-500 transition-colors "
          >
            Home
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "about")}
            className="hover:text-blue-500 transition-colors"
          >
            About
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "projects")}
            className="hover:text-blue-500 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="p-3">
          <a
            href="#"
            onClick={(event) => handleClick(event, "contact")}
            className="hover:text-blue-500 transition-colors"
          >
            Contact
          </a>
        </li> */}
      </ul>
      <div onClick={handleNav} className="text-3xl block  sm:hidden">
        <MdSegment />
      </div>
      <div
        className={
          nav
            ? " fixed left-0 top-0 w-full opacity-95 bg-[#f8f8f8]  ease-in-out duration-300"
            : " ease-linear duration-500 fixed left-[-100%] top-0"
        }
      >
        <div className=" p-6 sm:hidden h-screen">
          <div onClick={handleNav} className="text-4xl  burger sm:hidden">
            <MdClear />
          </div>

          <ul className="p-4  text-center pt-24">
            <div>
              <SearchableDropdown />
            </div>
            {list.map((item, index) => (
              <li
                key={item + index}
                className="p-4 border-b py-6 font-semibold border-b-gray-600 "
              >
                <a href="#" onClick={(event) => handleClick(event, item)}>
                  {item}
                </a>
              </li>
            ))}
            {/* <li className="p-4 border-b py-6 font-semibold border-b-gray-600 ">
              <a href="#" onClick={(event) => handleClick(event, "home")}>
                Home
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "about")}>
                About
              </a>
            </li>
            <li className="p-4 border-b py-6 font-semibold border-b-gray-600">
              <a href="#" onClick={(event) => handleClick(event, "projects")}>
                Projects
              </a>
            </li>

            <li className="p-4 border-b py-6 font-semibold">
              <a href="#" onClick={(event) => handleClick(event, "contact")}>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
