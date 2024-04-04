import React from 'react'

function Strip({val}) {
    
  return (
    <div className='flex '>
       
        {val.map((elem,index)=>(
          <div key={index} className='w-[16.66%] p-1 border-b-[1px] border-t-[1px] border-r-[1px] border-slate-700 flex justify-between items-center'>
            <img className=' p-4' src={elem.url} alt="" /> 
            <h3 className=' text-white font-bold text-2xl'>{elem.number}</h3>
            </div>  
            
        ))}
      
    </div>
  )
}

export default Strip
