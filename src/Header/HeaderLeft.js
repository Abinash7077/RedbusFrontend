import React from 'react';
import { NavLink } from "react-router-dom";
import { IoMdBus } from "react-icons/io";

const HeaderLeft = () => {
  return (
   
         <div className="header-left flex justify-between  items-center md:gap-10">
          <NavLink to="/">
            <h1 className=" text-orange-600 text-[25px] font-bold capitalize flex items-center "><IoMdBus/>
              reserve
            </h1>
          </NavLink>
          <NavLink to="/Ticket">
            <h1 className="  text-[17px] font-bold capitalize ">
              Ticket
            </h1>
          </NavLink>
          <NavLink to="/Contact">
            <h1 className="  text-[17px] font-bold capitalize ">
              Contact Us
            </h1>
          </NavLink>
        </div>
      
   
  );
}

export default HeaderLeft;
