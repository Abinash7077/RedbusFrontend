import { React, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState(false);

  const data1 = [username, password];
  console.log(data1);
  const authentication=(e)=>{
    e.preventDefault()
    dispatchEvent({
      type:"login",
      
     
      
    })
    setAuth(true)

  
    
  }
  console.log(auth)
  

  return (
    <div
      className=" w-[70%] h-[60.5vh] mx-auto  flex items-center  justify-center 
    "
    >
      <div className="w-[50%] bg-gray-300 flex items-center justify-center flex-col p-8   ">
        <img
          src="img/rose-320868_640.jpg"
          className="w-[80px] h-[40px] rounded m-3   "
          alt=""
        />
        <div className=" bg-white p-4 text-[12px] w-[80%] rounded text-2xl   h-fit">
          <form >
            <div className="name w-[100%]   ">
              <p>Username or Email Address</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-2 border-gray-400 border-solid rounded w-[100%] my-2  "
              />
            </div>
            <div className="name w-[100%]   ">
              <p></p>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-gray-400 border-solid rounded w-[100%]  my-2 "
              />
            </div>
            <div className="remember flex justify-between items-center w-[100%] my-2  ">
              <input
                type="checkbox"
                name="remember"
                className="w-[50px]"
                id="remember"
              />
              <label htmlFor="remember">Remember Me</label>
              <div className="button">
                <input
                  type="submit" value="Login"
                  className="px-3 py-1 rounded bg-[#0d39b1] text-white " onClick={authentication}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[50%]">
        {" "}
        <img src="img/Login.jpg  " className=" truncate w-[100%] " alt="" />
      </div>
    </div>
  );
};

export default Login;
