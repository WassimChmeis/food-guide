import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import reactLogo from "../assets/react.svg";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import axios from "axios";

import Footer from "../components/Footer";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className=" min-h-screen bg-[#f8f8f8]">
      <Navbar
        bgColor={"bg-[#f8f8f8]"}
        list={["Home", "Categories", "Contact"]}
      />
      <div className=" font-Madimi px-3 md:px-6">
        <div className=" pt-3"></div>
        <div id="Home">
          <Hero />
        </div>
        <div className="mb-8 border-b-2"></div>
        <div id="Categories">
          <Categories />
        </div>
      </div>
      <div className=" my-56"></div>
      <div id="Contact">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
