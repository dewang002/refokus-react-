import React from 'react'
import Button from './Button'

function Nav() {
  return (
    <div className='container p-2 mx-auto  text-white flex justify-between border-b-[1px]'>
      <div className='nleft flex gap-16'>
        <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
     <div className='flex gap-6 items-center justify-center '>
    {["Home","Work","Culture","","News"].map((elem,index)=>(
        <a key={index} className='flex items-center gap-1' href="">
{index === 1 && (<span  className=' inline-block h-2 w-2 rounded-full bg-green-600  '></span>)}
{elem.length==0&& (<span  key={index} className='inline-block h-5 w-[2px] bg-zinc-200'></span>)}
            {elem}</a>
   
   ))}
     </div>
      </div>
      <Button />
    </div>
  )
}

export default Nav
