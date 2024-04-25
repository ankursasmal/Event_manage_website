import React from 'react'
import bg2 from '../assets/bg2.png'
import SVG from '../assets/SVG.png'
import Rectangle2 from '../assets/Rectangle2.png'
import style from '../style/Mainsection.module.css'
import  Frame7 from '../assets/Frame7.png'

function Mainsection2() {
  return (
<div className='w-[100%]   ' >
      <div className='items-center justify-center'>
       <div className=' w-[100%]     flex items-center    justify-center px-[4vw]  '>

<div className='grid sm:justify-center relative grid-cols-12 px-[5vw] w-[100%] '>
     
{/* grid-1*/}
      <div className='col-span-6 flex w-[100%]  justify-center items-center'>
        <img src={Frame7} alt="" className='absolute top-[54%] left-[46%] w-[6vw] ' />
        <img src={Rectangle2} alt="" className='w-[100%]   ' />
        {/* <img src={Frame7} alt="" className='  absolute top-[41%] left-[86%]  w-[10vw]' /> */}


      </div>
 {/* grid -2 */}
      <div className='col-span-6 flex pl-[3vw] mt-[4vw]   flex-col'>
        <a className='w-[92%] pt-[3vw] text-[2vw] font-normal '  style={{color:'rgba(66, 98, 255, 1)'}}>Client Experience


        </a>
        <a className='w-[72%] pt-[1.3vw] text-[4vw] font-semibold ' style={{lineHeight:'5vw'}} > Your clients, happy


        </a>
        <a  className='w-[92%] pt-[1vw] text-[1vw]'> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </a>
       <div className='flex w-[76%] items-center   flex-wrap'> 
        <button className="   px-[1vw] py-[.3vw] mb-[1vw]   mt-[2vw]       text-[1.2vw] md:text-[1.2vw]   font-['Poppins'] " style={{ backgroundColor: 'rgba(66, 98, 255, 0.08)' ,color:'rgba(97, 97, 255, 1)'}}> 
        AI Based Photo Distribution
</button>
<button className="   px-[1vw] py-[.3vw] mb-[1vw]   mt-[1vw]   mx-[1vw]    text-[1.2vw] md:text-[1.2vw]   font-['Poppins'] " style={{ backgroundColor: 'rgba(66, 98, 255, 0.08)' ,color:'rgba(97, 97, 255, 1)'}}> 
Album Selection
</button>
<button className="   px-[1vw] py-[.3vw] mb-[1vw]   mt-[1vw]     text-[1.2vw] md:text-[1.2vw]   font-['Poppins'] " style={{ backgroundColor: 'rgba(66, 98, 255, 0.08)' ,color:'rgba(97, 97, 255, 1)'}}> 
Wedding Album Website
</button>
<button className="   px-[1vw] py-[.3vw] mb-[1vw]   mt-[1vw]  ml-[1vw]   text-[1.2vw] md:text-[1.2vw]   font-['Poppins'] " style={{ backgroundColor: 'rgba(66, 98, 255, 0.08)' ,color:'rgba(97, 97, 255, 1)'}}> 
Photo Selection</button>
</div>
 
 <button className={` ${style.shadows} self-start   px-[1.3vw] py-[.4vw] mb-[1vw]   mt-[2.8vw]    text-black flex items-center  `}  ><a className="text-[1.7vw] md:text-[1.1vw]   font-['Poppins']">Learn more


        </a><img src={SVG} className='w-[1.5vw] text-black pl-1 ' alt="" /></button>
      </div>

    </div>

</div>
    </div>  
    </div>
  )
}

export default Mainsection2
