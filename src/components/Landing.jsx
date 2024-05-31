import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>

      <div className="textstructure mt-40 px-10">
        {["We Create", "Eye opening", "presentations"].map((item, index)=>(
         <div className="masker font['Founders_Grotesk']">
            <h1 key={index} className='text-[6.5vw] uppercase leading-[5.5vw] tracking-tighter font-medium'>{item}</h1>
        </div>
        ))}
      </div>

      <div className='border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center py-3 px-10'>
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
