import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
function Products() {
  const items = [
    {
      title: "ARQITEL",
      content:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      Case: false,
    },
    {
      title: "Cula",
      content:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates",
      live: true,
      Case: false,
    },
    {
      title: "Webflow",
      content:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      Case: false,
    },
    {
      title: "Rofokus",
      content:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      Case: true,
    },
    {
      title: "SLIVR ",
      content:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      Case: true,
    },
  ];

  const [posi, setposi] = useState(null);
  const mover = (val) => {
    setposi(val * 21);
  };
  return (
    <div className="container flex flex-col gap-6 justify-center items-center md:block  md:p-2 mx-auto md:mt-20 m-16 relative">
      {items.map((elem, index) => (
        <Product key={index} items={elem} count={index} mover={mover} />
      ))}
      <div className="hidden md:block absolute top-0 h-full w-full pointer-events-none">
        <div className="relative h-[20vh] w-full">
          <motion.div
            initial={{ y: posi, x: ["100%"] }}
            animate={{ y: posi + "vh" }}
            transition={{ease:[0.76, 0, 0.24, 1],duration:".6"}}
            className=" h-full w-[18vw]  rounded overflow-hidden"
          >
            {posi===null? <motion.div 
            animate={{ y: -posi + "vh" }}  className="h-[21vh] w-full transition"></motion.div>:<motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-300"><img className="w-full h-full object-cover" src=".\photos\64cc29f66c6594c072ba1a38_02.jpg" alt="" /></motion.div>}
           
            <motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-400 "><img className="w-full h-full object-cover" src=".\photos\64cd6ecc885579ba1b4ffc97_10-p-800.jpg" alt="" /></motion.div>
            <motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-500 "><img className="w-full h-full object-cover" src=".\photos\65b2cab86e8df24e528c4441_Frame 1.png" alt="" /></motion.div>
            <motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-600 "><img className="w-full h-full object-cover" src=".\photos\65b41324914b470b20ec7d03_Frame 3.png" alt="" /></motion.div>
            <motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-700 "><img className="w-full h-full object-cover" src=".\photos\65f1160e50447ddfb490fb59_portfolioCard_cc-02 (1)-p-800.webp" alt="" /></motion.div>
            <motion.div 
            animate={{ y: -posi + "vh" }} className="h-[21vh] w-full bg-red-800 "><img className="w-full h-full object-cover" src=".\photos\650c5f15978b05dc7f2ae554_14.webp" alt="" /></motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Products;
