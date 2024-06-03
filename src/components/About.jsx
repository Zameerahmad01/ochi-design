import React from 'react'
import image from '../assets/Homepage-Photo-663x469.jpg'

function About() {
  return (
    <div className='w-full pt-20  pb-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"]'>
        <h1 className='text-[3.5vw]  px-10  leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[2px] border-[#A9C059] mt-20 py-5 px-10'>
            <div className='w-1/2 '>
                <h1 className='text-5xl font-medium'>Our approach:</h1>
                <button className=' flex gap-10 items-center px-5 py-4 mt-6 rounded-full text-white bg-zinc-900 uppercase'>Read More
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-xl'>
                <img className="w-full h-full rounded-xl" src={image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
