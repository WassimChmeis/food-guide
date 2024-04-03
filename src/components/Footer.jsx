import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FaGithub, FaInstagram, FaConnectdevelop } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="py-16 border-t bg-gray-950 opacity-100 border-gray-600 md:flex justify-between text-[18px] font-normal md:px-10 px-3 text-white">
        <div className="flex justify-center items-center mb-3 md:mb-0">
          © 2024 Wassim.
          <FaConnectdevelop className="text-red-600 text-[29px]" />
        </div>
        <div className="flex-row  justify-center items-center mb-4 md:mb-0">
          <div className="flex justify-center items-center">
            <SlLocationPin />
            Beirut, Lebanon
          </div>
          <div className="flex justify-center items-center">
            <MdEmail />
            <h4>Mail: wassimchmeis@gmail.com</h4>
          </div>
        </div>
        <div className="flex text-[25px] justify-center items-center gap-3 transition-colors">
          <a
            className=" hover:text-orange-400"
            href="https://github.com/WassimChmeis"
            target="_blanck"
          >
            <FaGithub />
          </a>
          <a
            className=" hover:text-orange-400"
            href="https://www.linkedin.com/in/wassim-chmeis-988678236/"
            target="_blanck"
          >
            <BsLinkedin />
          </a>
          <a
            className=" hover:text-orange-400"
            href="https://www.instagram.com/wassimchmeis/"
            target="_blanck"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
