import React from 'react'
import fyde from '../assets/Fyde_Illustration_Crypto_2-663x551.png'
import vise from '../assets/Vise_front2-663x551.jpg'
import { motion, useAnimation } from 'framer-motion'

function Featured() {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index)=>{
        cards[index].start({y: "0"})
    }

    const handleHoverEnd = (index)=>{
        cards[index].start({y: "100%"})
    }
  return (
    <div data-scroll data-scroll-section className='w-full py-10 font-["Neue_Montreal"]'>
        <div className='w-full pb-20 px-10 border-b-[1px] border-zinc-600'>
            <h1 className='text-5xl tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20 mt-10'>
            <div className='cards w-full flex gap-10'>
                <motion.div 
                onHoverStart={()=>handleHover(0)} 
                onHoverEnd={()=>handleHoverEnd(0)}
                className='cardconatiner relative w-1/2 h-[75vh] '>
                    <h1 className='text-6xl flex overflow-hidden z-[10] text-[#CDEA68] leading-none tracking-tight absolute left-full top-1/2 -translate-x-1/2 '>
                        {"FYDE".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[0]} 
                            transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                            >{item}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full' src={fyde} alt="" />
                    </div>
                </motion.div>
                <motion.div 
                 onHoverStart={()=>handleHover(1)} 
                 onHoverEnd={()=>handleHoverEnd(1)} className='cardconatiner relative w-1/2 h-[75vh] '>
                <h1 className='text-6xl z-[10] flex overflow-hidden text-[#CDEA68] leading-none tracking-tight absolute right-full top-1/2 translate-x-1/2 '>
                {"VISE".split('').map((item, index)=>(
                            <motion.span 
                            initial={{y: "100%"}} 
                            animate={cards[1]} 
                            transition={{ease: [0.22,1,0.36,1], delay: index*.05}}
                            >{item}</motion.span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full' src={vise} alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
