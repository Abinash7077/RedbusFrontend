import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const AvailBox1 = ({name,id,From,To,DaysRunOn,TimeInterval}) => {
  return (
    /* available bus page box */
    <div className="Box1 border-2 border-gray-400 border-solid   rounded">
      <div className="flex justify-between w-[100%]  ">
        <div className="w-[80%] p-3 px-10">
          <div className="box1heading flex items-center" id={id}>
            <h2 className="font-bold text-[20px]   ">{name}</h2>
            <p className="bg-green-900 px-2 rounded mx-2 flex items-center text-white    ">
              <BsFillHouseDoorFill className="w-[20px]  h-[20px] mr-2 rounded-[50%]" />
              <span>4.5</span>
            </p>
            <p className="text-gray-900 text-[15px]   ">Ratings</p>
          </div>
          <p className="py-[10px]">
            A/C Seater (2+1) | 24 Seats Lefts | 2 Seats{" "}
          </p>
          <div className="date flex items-center text-[13px] font-bold">
            <p className="flex items-center py-auto">
              <span>{From}</span>
              <span className="mx-2">16 NOV</span>
            </p>
            <p className="w-[35px] h-[1px] bg-black mx-2 mt-[5px]"></p>
            <p className="flex items-center">
              <span>{To}</span>
              <span className="mx-2">16 NOV</span>
            </p>
          </div>
          <div className="address flex items-center gap-20 text-[14px] font-semibold mt-3">
            <div className=" flex flex-col">
              <p>{From}</p>
              <p>{To}</p>
            </div>
            <div className=" flex flex-col font-semibold">
              <p>{DaysRunOn}</p>
              <p>{TimeInterval}</p>
            </div>
          </div>
        </div>
        <div className="w-[20%] border-l-2 flex flex-col justify-center items-center border-gray-400 border-solid p-3 ">
          <h3 className="text-[17px] font-semibold    ">Seat Price</h3>
          <p>Available Now</p>
          <h2 className="text-[23px] text-black font-bold  ">$899</h2>
          <div className="flex items-center justify-center mt-3">
            <NavLink to="/Available">
              {" "}
              <button
                className="bg-orange-600 font bold text-[18px] px-12 py-1 text-white rounded hover:bg-sky-500 hover:text-white hover:border-2 hover:border-solid hover:border-white   "
                
              >
                Search
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailBox1;
