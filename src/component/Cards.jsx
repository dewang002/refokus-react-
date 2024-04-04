import React from 'react'
import Card from "./Card"
function cards() {
  return (
    <div className='container mx-auto text-white p-20 flex'>
      <Card width={"w-1/3"} color={"bg-zinc-700"}  start={false} para={true}/>
      <Card width={"w-2/3"} color={"bg-zinc-700"} start={true} para={false} hover={"hover:bg-purple-500"}/>
    </div>
  )
}

export default cards
