import React from "react";
import Point from "../Component/Point";
import Session from "../Component/Session";
import AvailBox1 from "../Component/AvailBox1";
import Prices from "../Component/Prices";
import BusData from "../Component/data";

const AvailableBus = () => {
 
  return (
    <section className="w-full h-fit bg-slate-200 py-6">
      <div className="flex  justify-between flex-wrap w-[80%] mx-auto  ">
        <div className="w-[25%]">
          <div className="filter px-3 flex items-center justify-between rounded border-slate-700 border-2 border-solid py-2">
            <li className="font-bold text-[16px] list-none  ">Filter</li>
            <li className="font-bold text-[16px] list-none  ">Clear All</li>
          </div>
          <div className="my-3 ">
            <div className="rounded border-slate-700 border-2 border-solid px-3 py-3 pb-6">
              <Session
                h2="Deparature Time"
                morning="Morning Session"
                evening="Evening Session"
                after="Afternoon Session"
              />
              <p className="w-[100%] h-[1px] bg-black my-4   "></p>
              <Session
                h2="Arrival Time"
                morning="Morning Session"
                evening="Evening Session"
                after="Afternoon Session"
              />
              <p className="w-[100%] h-[1px] bg-black my-4   "></p>
              {/*start for pickup and drop */}
              <Point
                h2="Pick up Point"
                morning="K.para"
                evening="BBS"
                after="CTC"
              />
              <Point
                h2="Drop Point"
                morning="P.Pur"
                evening="sahaspur"
                after="Madhapur"
              />
              {/* end pick up and drop */}
              <Session
                h2="Bus ratings"
                morning="4 star and above"
                evening="2 star and 3 star"
                after="1 star"
              />
              <p className="w-[100%] h-[1px] bg-black my-4   "></p>
              <Session
                h2="Most search bus"
                morning="Zing bus"
                evening="Intercity exp"
                after="Orange travels"
              />
            </div>
          </div>
        </div>

        {/* right side bar for bus available */}
        <div className="w-[70%] h-[90vh] rounded border-slate-700 border-2 border-solid">
          {BusData?.map((item)=>
            <AvailBox1
            name={item.BusName}
            id={item.id}
            from={item.From}
            to={item.To}
            
            daysRunOn={item.DaysRunOn}
            TimeInterval={item.TimeInterval}  

/>
          )}
          
          {/* seat component */}
          <div className=" px-10 py-3">
            <h2 className="text-[22px] font-bold   ">Select Seats</h2>
            <div className=" flex items-center my-3">
              <label htmlFor="seat" className="mr-6 text-lg">
                Seat Price
              </label>
              <Prices
              price="All"
              value="All"
              />
              <Prices
              price="100"
              value="100"
              />
              <Prices
              price="200"
              value="200"
              />
            </div>
          </div>
          {/* seat component end */}
        </div>
      </div>
    </section>
  );
};

export default AvailableBus;
