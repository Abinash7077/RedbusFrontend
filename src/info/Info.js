import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";

const Info = () => {
  return (
    <div className="Info w-[90%] h-fit  py-4  mx-auto   ">
      <div className="row flex justify-between gap-4">
        <div className="col w-[70%]    ">
          <Box1 />
          <Box2 />
        </div>
        <div className="col w-[30%]     ">
          <div className="payment border-2 w-[80%] border-gray-400 border-solid rounded p-8">
            <h2 className="font-bold text-[20px]   ">Fare Details</h2>
            <div className="flex items-center justify-between my-2">
                <p className="text-[16px]">Base Fare</p>
                <p className="font-bold text-[17px]">799</p>
            </div>
            <div className="flex items-center justify-between my-2">
                <p className="text-[16px]">Tax</p>
                <p className="font-bold text-[17px]">150</p>
            </div>
            <div className="flex items-center justify-between my-2">
                <p className="text-[16px]">Offer Applied</p>
                <p className="font-bold text-[17px]">80</p>
            </div>
            <hr />
            <div className="flex items-center justify-between my-2">
                <p className="text-[16px]">Total Price</p>
                <p className="font-bold text-[17px]">899</p>
            </div>
            <div className="w-[100%]   "><button className="bg-orange-500 w-[100%] text-white rounded py-1 mt-6   ">Proceed To Payment</button></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
