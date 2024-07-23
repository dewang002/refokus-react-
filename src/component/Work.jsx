import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
  const [imges,setimges]=useState([
    {url:"https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",top:"50%",left:"50%",isActive:false},
    {url:"https://plus.unsplash.com/premium_photo-1670869657576-444dffe3b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHx3ZWJzaXRlfGVufDB8fDB8fHww",top:"56%",left:"35%",isActive:false},
    {url:"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",top:"60%",left:"68%",isActive:false},
    {url:"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",top:"48%",left:"48%",isActive:false},
    {url:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",top:"75%",left:"38%",isActive:false},
    {url:"https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",top:"59%",left:"50%",isActive:false},
]
)
  const {scrollYProgress} = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    function showimg(arr){
      setimges(prev =>(
        prev.map((elem,index)=>
          //...elem here ... says it can take lot of element in it;
        arr.indexOf(index)=== -1?({...elem,isActive:false}):({...elem,isActive:true}))
      ))
    }
    
    switch(Math.floor(latest*100)){
      case 0:
        showimg([])
        break;
        case 2:
          showimg([0])
          break;
        case 4:
          showimg([0,1])
          break;
        case 5:
          showimg([0,1,2])
          break;
        case 6:
          showimg([0,1,2,3])
          break;
        case 7:
          showimg([0,1,2,3,4])
          break;
        case 8:
          showimg([0,1,2,3,4,5])
          break;
    }
  })
  
  return (
    <div className='w-full border-b-[1px]'>
    <div className='relative container mx-auto pt-[8vh] pb-[4vh]'>
      <h1 className='text-white font-bold text-[24vw] text-center cursor-default'>WORK</h1> 
       <div className='hidden md:block absolute top-0  h-full w-full'>
         {imges.map((elem,index)=>(
            elem.isActive &&( <img key={index} className="w-60 rounded absolute translate-x-[-50%] translate-y-[-50%]" style={{top:elem.top,left:elem.left}} src={elem.url} alt="" />)
           
         ))}
       </div>
    </div>
  
    </div>
  )
}

export default Work
