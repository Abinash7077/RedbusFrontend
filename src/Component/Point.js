import React from 'react';

const Point = (props) => {
  return (
    <div className=""><h2 className="font-bold text-[18px] pb-1">{props.h2}</h2>
    <div className="">
      <div className="flex items-center ">
        <input type="radio" name="morning" id="morning" className="w-4 h-4 "/>
        <label htmlFor="morning" className="pl-3">
          {props.morning}
        </label>
      </div>
      <div className="flex items-center ">
        <input type="radio" name="morning" id="morning" className="w-4 h-4" />
        <label htmlFor="morning" className="pl-3">
         {props.after}
        </label>
      </div>
      <div className="flex items-center ">
        <input type="radio" name="morning" id="morning" className="w-4 h-4"/>
        <label htmlFor="morning" className="pl-3 ">
          {props.evening}
        </label>
      </div>
      <p className="w-[100%] h-[1px] bg-black my-4   "></p>
    </div></div>
  );
}

export default Point;
