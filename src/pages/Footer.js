import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdBus } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import {FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer  h-fit bg-gray-300       ">
      <div className="footer grid grid-cols-7 py-2 pt-[24px] px-[25px] w-[80%] mx-auto">
        <div className="grid1 col-span-4 ">
            <h1 className="text-orange-700 font-bold text-[32px] capitalize flex items-center   "><IoMdBus/>Reserve</h1>
            <p>When You have a choice Reserve.</p>
            <p>Reserve offers bus tickets booking</p>
            <p>through its website, IOS, and androids</p>
            <p>mobile apps for all mojnaor cities.</p>

            <NavLink to="https://www.redbus.in/info/contactus" target="blank" className="pt-[15px]">reserve.bus@reserve.com</NavLink>
        </div>
        <div className="grid2">
          <h1 className="text font-bold text-[20px] pb-[10px]  ">About</h1>
          <nav>
            <ul>
              <li className="list-none hover:text-blue-700 hover:text-[18px]">
                <NavLink>About Us</NavLink>
              </li>
              <li className="list-none  hover:text-blue-700 hover:text-[18px] ">
                <NavLink>Contact Us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid3">
          <h1 className="text-[20px] font-bold pb-[10px]">Useful Link</h1>
          <nav>
            <ul>
              <li className="text-17px list-none  hover:text-blue-700 hover:text-[18px]   ">
                <NavLink>Careers</NavLink>{" "}
              </li>
              <li className="text-17px list-none  hover:text-blue-700 hover:text-[18px]  ">
                <NavLink>FAQ</NavLink>
              </li>
              <li className="text-17px list-none   hover:text-blue-700 hover:text-[18px] ">
                <NavLink>T & C</NavLink>
              </li>
              <li className="text-17px list-none  hover:text-blue-700 hover:text-[18px]  ">
                <NavLink>Privacy Policy</NavLink>
              </li>
              <li className="text-17px list-none   hover:text-blue-700 hover:text-[18px] ">
                <NavLink>Blog</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid4">
          <h1 className="text-[20px] font-bold pb-[10px]">Useful Link</h1>
          <nav>
            <ul className="flex items-center gap-5">
              <li className="text-17px list-none flex items-center justify-center text-sky-600 text-[16px] hover:text-red-600 bg-white w-[30px] h-[30px] rounded-[50%]    ">
                <NavLink to="https://twitter.com/redBus_in" target="blank">
                 <BsTwitter/>
                 
                </NavLink>
              </li>
              <li className="text-17px list-none flex items-center justify-center text-sky-600 text-[18px] bg-white w-[30px] h-[30px] rounded-[50%] hover:text-red-600 ">
                <NavLink to="https://www.facebook.com/redBus.in/" target="blank">
                <FaFacebookF/>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="text-gray-700 bg-gray-700" />
      <div className="copyRight flex justify-center items-center w-[100%] h-[45px]  "><p>All Right Reserve-2022</p></div>
    </div>
  );
};

export default Footer;
