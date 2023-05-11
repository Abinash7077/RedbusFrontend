import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../auth/Login";
import { useStateValue } from "../StateProvider";


const HeaderRight = () => {
  const[auth,setAuth]=useState(false)
  

  

  return (
    <div className="header-right ">
      {!auth? <div className=""><NavLink to="/login" className="text-[17px] font-bold capitalize mr-4">Login
        </NavLink>
        <NavLink to="/register " className="text-[17px] font-bold capitalize" >Register</NavLink> </div>: <div className="">
        <NavLink to="/register" className="text-[17px] font-bold capitalize" >myProfile</NavLink> </div>}  
    </div>
  );
};

export default HeaderRight;
