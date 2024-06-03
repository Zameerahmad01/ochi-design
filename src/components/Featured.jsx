import React from 'react'
import fyde from '../assets/Fyde_Illustration_Crypto_2-663x551.png'
import vise from '../assets/Vise_front2-663x551.jpg'

function Featured() {
  return (
    <div className='w-full py-10 font-["Neue_Montreal"]'>
        <div className='w-full pb-20 px-10 border-b-[1px] border-zinc-600'>
            <h1 className='text-5xl tracking-tight'>Featured projects</h1>
        </div>
        <div className='px-20 mt-10'>
            <div className='cards w-full flex gap-10'>
                <div className='cardconatiner relative w-1/2 h-[75vh] '>
                    <h1 className='text-6xl z-[10] text-[#CDEA68] leading-none tracking-tight absolute left-full top-1/2 -translate-x-1/2 '>
                        {"FYDE".split('').map((item, index)=>(
                            <span>{item}</span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full' src={fyde} alt="" />
                    </div>
                </div>
                <div className='cardconatiner relative w-1/2 h-[75vh] '>
                <h1 className='text-6xl z-[10] text-[#CDEA68] leading-none tracking-tight absolute right-full top-1/2 translate-x-1/2 '>
                {"VISE".split('').map((item, index)=>(
                            <span>{item}</span>
                        ))}
                    </h1>
                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full' src={vise} alt="" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
