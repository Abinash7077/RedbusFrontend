import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import Box1 from '../info/Box1';


const Payment = () => {
  return (
    <div className='w-[60%] mx-auto my-3 mb-4 relative z-40  py-6 px-10 shadow-[0px_0px_4px_1px_gray]   '>
        <div className="flex flex-col items-center justify-center py-1
         ">
        <AiOutlineCheck className='text-6xl text-green-600 border-2 border-solid border-green-600 px-2 py-2 rounded-[50%] '/>
        <h1 className='font-bold text-3xl'>Booking has been confirmed</h1>
        <p>Ticket ID: <span className='pl-2'>56UHRFT</span></p>
        <p>Payment ID: <span className='pl-2'>2545-326E3-7HHH</span></p>
        <p>Passenger Details: <span className='pl-2'>Megha Agarwal, F, 25yrs</span></p>
        <p>Contact Details: <span className='pl-2'>9192958458</span></p>
        
        </div>
        <Box1 className=""/>
        
        
      
    </div>
  );
}

export default Payment;
