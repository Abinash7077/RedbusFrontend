import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import Card from '../Component/Card'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const[from,setFrom]=useState('')
  const[to,setTo]=useState('')
  const[date,setDate]=useState('')

  function onClickHandle(){
    
    toast("Searching the bus")
  }
  return (
    <section className="home">
      <div className="w-[100%] h-[70vh] bg-[url('../public/img/scene4.jpg')] bg-contain bg-repeat bg-center flex items-center justify-center flex-col bg-fixed ">
        <form>
          <select
            name="from"
            id="from"
            className="border-2 mr-1 border-gray-400 border-solid rounded w-[200px] h-[80px] text-[18px] font-bold "
            placeholder="from"
            onChange={(e)=>setFrom(e.target.value)}
            value={from}
           
          >
            <option value="">From</option>
            <option value="mumbai" className="text-[15px]  font-bold">
              mumbai
            </option>
            <option value="mumbai" className="text-[15px]">
              mumbai
            </option>
            <option value="mumbai" className="text-[15px]">
              mumbai
            </option>

          </select>
       
          <select
            name="from"
            id="from"
            className="border-2 mr-1 border-gray-400 border-solid rounded w-[200px] h-[80px] text-[18px] font-bold"
            onChange={(e)=>setTo(e.target.value)}
            value={to}
          >
            <option value="">To</option>
            <option value="mumbai" className="text-[12px]">
              mumbai
            </option>
            <option value="mumbai" className="text-[15px]">
              mumbai
            </option>
            <option value="mumbai" className="text-[15px]">
              mumbai
            </option>
          </select>
          <input
            type="date"
            name=""
            id=""
            className="border-2 border-gray-400 border-solid rounded w-[200px] h-[80px] text-[18px] font-bold"
            onChange={(e)=>setDate(e.target.value)}
            value={date}
          />
        </form>
        <div className="flex items-center justify-center mt-5">
          <NavLink to="/Available"> <button className="bg-orange-500 font bold text-[18px] px-12 py-1 text-white rounded hover:bg-sky-500 hover:text-white hover:border-2 hover:border-solid hover:border-white   "onClick={onClickHandle}>
            Search
          </button></NavLink>
         
         
        </div>
        <ToastContainer />
      </div>

      <h2 className="text-center text-[35px] py-12 font-bold ">Travel with world's largest bus</h2>
      <p>{from}</p>
      <p>{to}</p>
      <p>{date}</p>
      <div className="w-[70%] h-[40vh] bg-white mx-auto  mb-14 ">
        <div className="row w-full h-fit flex items-center justify-between gap-4  ">
    
          
        <Card
        img="img/scene6.jpg"
        h3="2000+"
        p="Most Recent views"
        />
        <Card
        img="img/scene8.jpg"
        h3="3500+"
        p="Most Recent views"
        />
        <Card
        img="img/scene7.jpg"
        h3="4000+"
        p="Most Recent views"
        />
        </div>

      </div>
    </section>
  );
};

export default Home;
