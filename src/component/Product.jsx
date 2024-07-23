import React from "react";

function Product({ items ,mover,count }) {

  return (
    <div onMouseEnter={()=>{mover(count)}} className="flex flex-col md:flex-row justify-between md:h-[20vh] items-center">
      <div className="w-[50%]">
        <h1 className="text-2xl font-bold text-white md:pl-16 md:text-left text-center">{items.title}</h1>
      </div>
      <div className="w-[90%] md:w-[50%]">
        <p className="font-light text-xl text-white md:text-left text-center mb-2">{items.content}</p>
        {items.live && (
          <button className="p-2 md:w-52 w-full bg-white rounded-full text-sm mt-3 mr-2">
            Visit Website
          </button>
        )}
        {items.Case && (
          <button className="p-2 md:w-52 w-full bg-white rounded-full text-sm mt-3">
            Case Study
          </button>
        )}
        {/*  */}
      </div>
    </div>
  );
}

export default Product;
