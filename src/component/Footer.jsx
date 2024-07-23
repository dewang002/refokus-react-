import React from "react";

function Footer() {
  return (
    <div className="container md:mx-auto pb-10 md:pb-0 md:h-[30vh] w-full md:gap-0 gap-10 flex flex-col md:flex-row items-center justify-between text-white">
      <div className="w-1/2 md:h-full ">
        <h1 className="md:text-[9rem] text-4xl md:pl-20 font-bold md:font-medium">Refokus.</h1>
      </div>
      <div className="md:w-1/2 h-[80%] md:flex justify-evenly items-start  md:pl-10">
        <div className="text-zinc-500 pb-8">
            <h1 className="md:text-xl text-2xl font-light md:pb-10 pb-4">Social</h1>
            {["Instagram", "Twitter", "LinkedIn"].map((elem,index)=> <h3 key={index}>{elem}</h3>)}
        </div>
        <div>
            <h1 className="md:text-xl text-2xl font-light md:pb-10 pb-4">Sitemap</h1>
            {["Home","Works","Careers","Contact"].map((elem,index)=><h3 key={index} className="leading-7">{elem}</h3>)}
        </div>
        <p className="w-60 text-center md:text-start font-semibold pt-[11%]">Refokus is driven by desin and empowered by technology
        <br /> <button className="py-2 px-4 text-color font-semibold bg-purple-500 mt-4 rounded-full">W Enteprise partner</button>
        </p>
      </div>
    </div>
  );
}

export default Footer;
