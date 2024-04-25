import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center mt-[3vw]' style={{backgroundColor:'#0953ad'}}>
       <div className='grid sm:justify-center grid-cols-12  pt-[2vw] px-[6vw]'>
       <div className='col-span-4 flex    flex-col'>
        <a className=' text-[3.2vw]  md:text-[1.8vw] text-white font-semibold'>Logo</a>
        <a></a>
        </div>
        <div className='col-span-2 flex    flex-col'>
        <a className=' text-[3.2vw] text-white md:text-[1.8vw] font-semibold'>Heading</a>
        <a className='mt-[2.5vw] md:text-[1.2vw] text-white text-[1.7vw]'>Link One</a>
        <a className='mt-[1.5vw] md:text-[1.2vw] text-white text-[1.7vw]'>Link Two</a>
</div>
<div className='col-span-1 flex    flex-col'>
</div>
<div className='col-span-5 flex    flex-col'>
<a className='text-black text-[3.2vw] text-white  md:text-[1.8vw] font-semibold'>Subscribe
</a>
<a className='w-[90%] py-[3vw] md:text-[1.2vw] text-white text-[1.7vw]'>Join our newsletter to stay up to date on features and releases.
</a>
<div className='flex items-center justify-between w-[92%]  mb-[1vw] border-black border-[1px]'>
    <input type="text" className='w-[80%] text-[9px] md:text-[13px]    px-[.5vw] py-[.75vw]  ' placeholder='Enter your Email'/>
<button className='w-[24%] text-[9px] md:text-[13px] px-[.5vw] py-[.75vw] text-white   border-black border-[1px]'>Submit</button>
</div>
 <a className='w-[90%] md:text-[1.2vw] text-white text-[1.7vw] ' style={{textDecoration:'underline'}}>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</a>
    </div>
    </div>
    <div className='flex items-center self-center mt-[4vw] pb-[1vw] justify-center'>
        <a className='md:text-[1.2vw] text-white text-[1.7vw]'>© 2023 Obscura. All rights reserved.
</a>
<a className='px-[.5vw] md:text-[1.2vw] text-white text-[1.7vw]'>Privacy Policy
</a>
<a className='md:text-[1.2vw] text-white text-[1.7vw]'>Terms of Service</a>
<a className='pl-[.5vw] md:text-[1.2vw] text-white text-[1.4vw]'>Cookies Settings</a>
        </div>  
    </div>
  )
}

export default Footer
