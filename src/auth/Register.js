import {React,useState} from 'react';
import {useNavigate} from "react-router-dom"

const Register = () => {
  const navigate=useNavigate()
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[number,setNumber]=useState("")
  const[password,setPassword]=useState("")
  const data1=[username,email,password,number]
  
 
  const registeredUser=async(e)=>{
    e.preventDefault()
    const response=await fetch('http://localhost:4040/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        
      },
      body:JSON.stringify({
        username,
        email,
        password,number
      })
    })
    

    const data=await response.json()
    console.log(data)
    
    alert('Registered Successfully')
    /* navigate('/Login') */
    
  }
 
  return (
    <div className=" w-[70%] h-[60.5vh] mx-auto  flex items-center  justify-center">
         <div className="w-[50%]">
      {" "}
      <img src="img/Login.jpg  " className=" truncate w-[100%] " alt="" />
    </div>
    <div className="w-[50%] bg-gray-100 flex items-center justify-center flex-col p-8   ">
      <img
        src="img/rose-320868_640.jpg"
        className="w-[80px] h-[40px] rounded m-3   "
        alt=""
      />
      <div className=" bg-white p-4 text-[17px] w-[80%] rounded    h-fit">
        <form onSubmit={registeredUser}>
          <div className="name w-[100%]   ">
            <p>Username:</p>
            <input type="text"  value={username} onChange={(e)=>setUsername(e.target.value)} className="border-2 border-gray-400 border-solid rounded w-[100%]   "  required/>
          </div>
          <div className="name w-[100%]   ">
            <p>Email Address:</p>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border-2  border-gray-400 border-solid rounded w-[100%]   " required />
          </div>
          <div className="name w-[100%]   ">
            <p>Mob:</p>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} className="border-2 border-gray-400 border-solid rounded w-[100%]   " required />
          </div>
          <div className="name w-[100%]  mb-2 ">
            <p>Password:</p>
            <input type="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border-2 border-gray-400 border-solid rounded w-[100%]   " required  />
            
          
          </div>
          
          
          
           
            <div className="button bg-[#0d39b1]">
              
              <input type='submit' value="Sign Up" className="px-3 py-1  w-[100%] text-white "/>
              
          
          </div>
        </form>
      </div>
    </div>
   
  </div>
   
  );
}

export default Register;
