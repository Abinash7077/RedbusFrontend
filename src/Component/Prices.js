import {React,useState} from 'react'


const Prices = (props) => {
    const [active,setActive]=useState("prev")
    const handleClick=()=>{
        setActive((prev)=>!prev)
    }
  return (
    <form action=""><div className={active?"bg-white w-[70px] h-fit py-1 px-1 mr-3  shadow-[0px_0px_4px_1px_gray] rounded flex items-center  ":"bg-green-400 w-[70px] h-fit py-1 px-1 mr-3  shadow-[0px_0px_4px_1px_gray] rounded flex items-center"} onClick={handleClick}>
    <input type="radio"  className='mr-2 w-4 h-4'/>
    <label htmlFor={props.price}>{props.price}</label>
    
  </div></form>
    
  )
}

export default Prices
