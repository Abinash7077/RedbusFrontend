import React from 'react';
import {BsFillHouseDoorFill } from "react-icons/bs";

const Box1 = () => {
  return (
    <div className="Box1 border-2 border-gray-400 border-solid p-3 px-10 rounded">
    <div className="box1heading flex items-center">
      <h2 className="font-bold text-[20px]   ">Intercity Smart Bus</h2>
      <p className="bg-green-900 px-2 rounded mx-2 flex items-center text-white    ">
       
        <BsFillHouseDoorFill className="w-[20px] h-[20px] mr-2 rounded-[50%]"/>
        <span>4.5</span>
      </p>
      <p className="text-gray-900 text-[15px]   ">Ratings</p>
    </div>
    <p className="py-[10px]">
      A/C Seater (2+1) | 24 Seats Lefts |  2 Seats{" "}
    </p>
    <div className="date flex items-center text-[13px] font-bold">
    <p className="flex items-center py-auto">
      <span>22:45</span>
      <span className="mx-2">16 NOV</span>
      
    </p>
    <p className="w-[35px] h-[1px] bg-black mx-2 mt-[5px]"></p>
    <p className="flex items-center">
      <span>22:45</span>
      <span className="mx-2">16 NOV</span>
      
    </p>
   
    </div>
    <div className="address flex items-center gap-20 text-[14px] font-semibold mt-3">
        <div className=" flex flex-col">
            <p>Pune</p>
            <p>Purusottampur</p>

        </div>
        <div className=" flex flex-col font-semibold">
            <p>BBSR</p>
            <p>Rasulgarh</p>

        </div>
    </div>
   
  </div>
   
  );
}

export default Box1;
