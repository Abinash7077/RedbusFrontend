import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="col w-[30%] hover:w-[40%] transition duration-150ms z-20  relative shadow-[0px_0px_4px_1px_gray] rounded pb-3 "><img src={props.img} alt="card1" className='h-fit '/><div className=" text-center"><h3 className="font-bold text-[20px] ">{props.h3}</h3><p className="text-slate-500 ">{props.p}</p></div></div>
    
      
    </>
  )
}

export default Card
