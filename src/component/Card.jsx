import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function card({width,color,start,para,hover}) {
  
  return (
    <div className={`min-h-[30rem]  ${width} ${color} rounded-[20px] p-4 m-[1px] flex flex-col justify-between ${hover}  ease-in-out duration-300`}>
      <div className='top hover:p-1  ease-in-out duration-300'>
        <div className='flex items-center justify-between'>
        <p className='text-lg font-light'>up Next:Projects </p>
        <IoIosArrowRoundForward />
        </div>
         <h1 className='text-3xl font-semibold tracking-tight w-52 pt-4'>Projects & Case Studies</h1>
      </div>
<div className='down'>
  {start === true && 
  <>
  <h1 className='text-[5vw] font-bold font-["satoshi"] tracking-tight'>Start a Project</h1>
<button className='py-2 px-4 rounded-full border border-slate-200 font-medium '>Contact us</button>
</>
}
{para == true &&
<>
<p>From Brands to Websites, our work speaks for itself.</p>
</>}

</div>
    </div>
  )
}

export default card
