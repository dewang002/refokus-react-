import React from "react";

function Footer() {
  return (
    <div className="container mx-auto h-[30vh] w-full  flex items-center justify-between text-white">
      <div className="w-1/2 h-full ">
        <h1 className="text-[9rem] pl-20 font-medium">Refokus.</h1>
      </div>
      <div className="w-1/2 h-[80%] flex justify-evenly items-start  pl-10">
        <div className="text-zinc-500">
            <h1 className="text-xl font-light pb-10">Social</h1>
            {["Instagram", "Twitter", "LinkedIn"].map((elem,index)=> <h3 key={index}>{elem}</h3>)}
        </div>
        <div>
            <h1 className="text-xl font-light pb-10 ">Sitemap</h1>
            {["Home","Works","Careers","Contact"].map((elem,index)=><h3 key={index} className="leading-7">{elem}</h3>)}
        </div>
        <p className="w-60 font-semibold pt-[11%]">Refokus is driven by desin and empowered by technology
        <br /> <button className="py-2 px-4 text-color font-semibold bg-purple-500 mt-4 rounded-full">W Enteprise partner</button>
        </p>
      </div>
    </div>
  );
}

export default Footer;
