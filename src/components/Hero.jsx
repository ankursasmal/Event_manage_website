import React from 'react'
 
import nocreadit from '../assets/nocreadit.png'
import Banner from '../assets/Banner.png'
import Group5 from '../assets/Group5.png'
import Group6 from '../assets/Group6.png'
import Vector from '../assets/Vector.png'

function Hero() {
  return (
    <div className='grid sm:justify-center grid-cols-12 pl-[5vw] w-[100%] sticky top-[2vw]'>
      {/* grid -1 */}
      <div className='col-span-6 flex pl-[3vw]    flex-col'>
        <a className='w-[92%] pt-[7vw] text-[3.5vw] font-bold' >A platform designed for photographers of the modern era!
        </a>
        <a className='w-[92%] pt-[2.2vw] text-[2.3vw] font-normal' > Obscura empowers you to deliver outstanding customer experiences and streamline your workflow while reducing overheads.
        </a>
        <button className="self-start   px-[1vw] py-[.3vw] mb-[1vw]   mt-[2.8vw]  rounded-lg text-white flex items-center  " style={{ backgroundColor: 'rgba(97, 97, 255, 1)' }}><a className="text-[1.7vw] md:text-[1.1vw]   font-['Poppins']">Signup For Beta Today

        </a><img src={Vector} className='w-[1.5vw] pl-1 ' alt="" /></button>
        <img src={nocreadit} alt="" className='w-[44%] pb-[2vw]' />

      </div>
{/* grid-2 */}
      <div className='col-span-6 flex w-[100%]  justify-center items-center'>
        <img src={Group5} alt="" className='absolute top-[36%] left-[51%] w-[11vw] ' />
        <img src={Banner} alt="" className='w-[100%] relative ' />
        <img src={Group6} alt="" className='  absolute top-[41%] left-[86%]  w-[11vw]' />


      </div>


    </div>
  )
}

export default Hero
