import React, { useEffect, useState } from 'react'
import bgimage from '../assets/Top-Viewbbcbv-1-1440x921.jpg'

function Eyes() {
    const [rotate, setRotate] = useState(0)

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{

            let mouseX = e.clientX;
            let mouseY = e.clientY;
    
            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2
    
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
            setRotate(angle -180)
        })
    })
  return (
    <div className='w-full h-screen text-white overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6"  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute flex gap-10 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className=' relative w-2/3 h-2/3 rounded-full bg-zinc-900 text-3xl flex items-center justify-center'>
                        <span>play</span>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='h-5 w-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                    <div className=' relative flex justify-center items-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
                        <span className='text-3xl'>play</span>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5'>
                            <div className='h-5 w-5 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes
