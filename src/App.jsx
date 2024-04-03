import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import axios from "axios";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Dish from "./pages/Dish";
function App() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/dish/:id" element={<Dish />} />
      </Routes>
    </>
  );
}

export default App;
