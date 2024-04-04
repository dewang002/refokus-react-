import React from 'react'
import {motion} from "framer-motion"

const Marquee = ({images,direction}) => {

  return (
    <div className='flex py-4 h-16  w-full overflow-hidden'>
<motion.div initial={{x : direction==='left'?'0%':'-100%'}} animate={{x:direction==='left'?'-100%':'0%'}} transition={{
  ease: "linear",
  duration: 13,
  repeat: Infinity
}}className='flex items-center gap-16 w-full shrink-0 '>
      {images.map((items,index) => <img key={index} className='h-8 '  src={items.url} alt="" /> )}
</motion.div>
<motion.div initial={{x : direction==='left'?'0':'-100%'}} animate={{x:direction==='left'?'-100%':'0'}} transition={{
  ease: "linear",
  duration: 13,
  repeat: Infinity
}}className='flex items-center  gap-16 w-full shrink-0'>
      {images.map((items,index) => <img key={index} className='h-8 shrink-0'  src={items.url} alt="" /> )}
</motion.div>    
    </div>
  )
}

export default Marquee

