import React, { useState } from "react";
import Button from "./Button";
import { FaCircle } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
function Nav() {
  const [show, setshow] = useState(false);
  const handleopen = ()=>(
    setshow(true)
  )
  const handleclose = ()=>(
    setshow(false)
  )
  return (
    <div className="container p-2 mx-auto  text-white flex justify-between border-b-[1px]">
      <div className="nleft hidden md:flex gap-16">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-6 items-center justify-center ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a key={index} className="flex items-center gap-1" href="">
              {index === 1 && (
                <span className=" inline-block h-2 w-2 rounded-full bg-green-600  "></span>
              )}
              {elem.length == 0 && (
                <span
                  key={index}
                  className="inline-block h-5 w-[2px] bg-zinc-200"
                ></span>
              )}
              {elem}
            </a>
          ))}
        </div>
      </div>
      <Button />
{/* --------------------------mobile nav 👇---------------- */}
   {show?<div className="md:hidden  h-[100%] w-full bg-black absolute pt-10 top-0 left-0 z-[999]">
     <div onClick={()=>handleclose()} className="text-[10vw] absolute right-0 top-5"> <CiCircleRemove /></div>
     {["Home", "Work", "Culture","News"].map((elem, index) => (
            <a key={index} className="flex flex-col items-center pt-10 text-4xl " href="">
              {elem}
            </a>
          ))}
   </div>:<div className="md:hidden  flex items-center justify-between h-8 w-full"> 
   <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
   <div onClick={()=>handleopen()}><FaCircle /></div>
    </div>  }


    </div>
  );
}

export default Nav;
