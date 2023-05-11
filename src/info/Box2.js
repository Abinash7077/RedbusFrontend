import React from 'react';

const Box2 = () => {
  return (
    <div className="box2 my-2">
            <h2 className="pb-2  font-bold text-2xl    ">
              Enter Travelers Details
            </h2>
            <div className="border-2 border-gray-400 border-solid p-3 rounded">
              <div className="heading font-bold text-[15px] flex items-center ">
                <h3 className=" ">Passenger 1</h3>
                <h3 className=" ml-3 ">Seat 16</h3>
              </div>
              <div className="form    ">
                <form className="">
                    <div className="form1 flex w-[100%]"><div className="name w-[25%]  ">
                    <label htmlFor="name" className="block pb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      className="border-2 w-[100%] h-8 border-gray-400 border-solid rounded    "
                    />
                  </div>

                  <div className="name ml-3 w-[25%]">
                    <label htmlFor="name" className="block pb-2">
                      Gender
                    </label>
                    
                    <select name="Gender" id="gender"  className="border-2 w-[100%] h-8 border-gray-400 border-solid rounded    ">
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                  </div>
                  <div className="w-[25%] ml-3">
                    <label htmlFor="name" className="block pb-2">
                      Age
                    </label>
                    <input
                      type="text"
                      name="Age"
                      id="age"
                      className="border-2 w-[40%] h-8 border-gray-400 border-solid rounded    "
                    />
                    
                  </div></div>
                  <div className="form2 mt-2 flex w-[100%]"><div className="name w-[25%]  ">
                    <label htmlFor="name" className="block pb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="name"
                      className="border-2 w-[100%] h-8 border-gray-400 border-solid rounded    "
                    />
                  </div>

                  <div className="name ml-3 w-[25%]">
                    <label htmlFor="name" className="block pb-2">
                      Gender
                    </label>
                    
                    <select name="Gender" id="gender"  className="border-2 w-[100%] h-8 border-gray-400 border-solid rounded    ">
                        <option value=""></option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="transgender">Transgender</option>
                    </select>
                  </div>
                 </div>
                  
                </form>
              </div>
            </div>
          </div>
  );
}

export default Box2;
