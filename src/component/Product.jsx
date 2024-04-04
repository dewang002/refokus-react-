import React from "react";

function Product({ items ,mover,count }) {

  return (
    <div onMouseEnter={()=>{mover(count)}} className="flex justify-between h-[20vh] items-center">
      <div className="w-[50%]">
        <h1 className="text-2xl font-bold text-white">{items.title}</h1>
      </div>
      <div className="w-[50%]">
        <p className="font-light text-xl text-white mb-2">{items.content}</p>
        {items.live && (
          <button className="p-2 w-52 bg-white rounded-full text-sm mt-3 mr-2">
            Visit Website
          </button>
        )}
        {items.Case && (
          <button className="p-2 w-52 bg-white rounded-full text-sm mt-3">
            Case Study
          </button>
        )}
        {/*  */}
      </div>
    </div>
  );
}

export default Product;
