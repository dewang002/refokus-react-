import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button() {
  return (

      <button className='w-32 hidden  bg-white text-zinc-900 md:flex items-center justify-between rounded-full p-2'>
        <span className='text-base font-semibold uppercase text-zinc-600'> click</span>
      <BsArrowReturnRight />
      </button>
    
  )
}

export default Button
