import React from 'react'
import Rectangle from '../assets/Rectangle.png'
 import Hero from './Hero'
import Vector from '../assets/Vector.png'

function Nav() {
  return (
    <div className='w-[100%]  ' style={{background: 'linear-gradient(90deg, rgba(97, 97, 255, 0.33) 0%, rgba(86, 138, 240, 0.295) 46.95%, rgba(212, 75, 224, 0.07) 96.1%)'}} >
      <div className='items-center justify-center'>

{/* <img src={Rectangle} alt=""  className='w-[100%]   h-[56vw] '  style={{backgroundImage:'Rectangle'}}/>  */}
 <div className=' w-[100%]  pt-[1vw] flex items-center    justify-between px-[7vw]'>
<a className="text-[2vw] font-semibold md:text-[1.3vw] font-['Poppins']">Obscura
</a>
<div className='flex items-center '>
<a className="font-thin text-[1.7vw] md:text-[1.1vw] font-['Poppins']">Features
</a>
<a className="font-thin text-[1.7vw] md:text-[1.1vw] px-[1.5vw] font-['Poppins']">FAQ
</a>
</div>
<div className='flex items-center '>
  <a className="font-thin text-[1.7vw] md:text-[1.1vw] px-[1.5vw] font-['Poppins']">Log in
</a>
<button className="   px-[1vw] py-[.3vw]   rounded-lg text-white flex items-center  " style={{backgroundColor:'rgba(97, 97, 255, 1)'}}><a className="text-[1.7vw] md:text-[1.1vw]   font-['Poppins']">Get Started
</a><img src={Vector} className='w-[1vw] pl-1' alt="" /></button>
</div>
 </div>
{/* <img src={Navbar} alt="" className='w-[100%]  top-[.5vw] fixed '/> */}
<Hero/>
  </div> 
       </div>

  )
}

export default Nav
