import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div data-scroll data-scroll-speed="-.6" className='w-full h-screen bg-zinc-900 pt-1 '>

      <div className="textstructure mt-[10vw] px-10">
        {["We Create", "Eye opening", "presentations"].map((item, index)=>(
         <div className="masker ">
            <div className='w-fit flex items-end overflow-hidden'>
              {[index === 1 && (
              <motion.div 
              initial={{width: 0}}
               animate={{width: "8vw"}}
               transition={{ease: [0.76,0,0.24,1], duration: 1}} 
              className='mr-1 w-[8vw] rounded-md h-[5vw] -top-[.7vw] relative bg-green-500'></motion.div>
              )]}
              <h1 key={index} className='  mb-[1vw] text-[6.5vw] uppercase leading-[5vw] tracking-tighter font-medium font["Founders_Grotesk_X-Condensed"]'>{item}</h1>
            </div>
        </div>
        ))}
      </div>

      <div className='border-t-[1px] border-zinc-600 mt-[5vw] flex justify-between items-center py-3 px-10'>
        {["For public and private companies","From the first pitch to IPO"].map((item, index)=>(
            <p className='text-md leading-none tracking-tight font-light '>{item}</p>
        ))}
        <div className="start flex  items-center gap-5">
            <div className='px-6 py-[2px] border-[2px] rounded-full border-zinc-500 font-light text-sm capitalize'>Start the project </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-full border-[2px] border-zinc-500'>
                <MdOutlineArrowOutward />
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Landing
