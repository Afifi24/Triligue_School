import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import claque1 from '../assets/images/Calque 5.png'
import claque2 from '../assets/images/Calque 7.png'
import claque3 from '../assets/images/Calque 9.png'
import claque4 from '../assets/images/Calque 13.png'
import claque5 from '../assets/images/Calque 14.png'
import claque6 from '../assets/images/Calque 17.png'
import claque7 from '../assets/images/Calque 20.png'
import claque8 from '../assets/images/Calque 24.png'
const Actualite = () => {
  return (
    <div className=' w-[96%]   ml-auto flex flex-wrap justify-between my-10'>
       <div className=' w-full  relative lg:w-auto'>
         <img className='w-full  lg:w-auto' src={claque1} alt="" />
          <div className='  absolute bottom-20 text-5xl -left-8  flex'>
                 <h1 className=' font-[800] font-headings uppercase  bg-text-gradient text-transparent bg-clip-text'> <span className=''>activites</span> <br /> <span className=''>sportives</span> </h1>

             </div>
       </div>
       <div className='w-full  lg:w-auto'>
         <img className='w-full  lg:w-auto' src={claque2} alt="" />
       </div>
       <div className='w-full lg:w-auto '>
         <img className='w-full  lg:w-auto' src={claque3} alt="" />
       </div>
       <div className='w-full lg:w-auto '>
         <img className='w-full  lg:w-auto'  src={claque4} alt="" />
       </div>
       <div className=' hidden bg-white xl:flex xl:col-span-2 text-white relative'>
                 <h1 className='text-xl leading-xl absolute top-[38%] -right-[45%] -translate-y-1/2  font-[800] font-headings  bg-text-gradient text-transparent bg-clip-text'> <span className=''>MODERN</span> <br /> <span className=''>ART GALLERY</span> </h1>

             </div>
</div>
  )
}

export default Actualite