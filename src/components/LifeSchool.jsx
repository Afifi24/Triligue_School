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
    <div id='Actualitees' className=' w-[98%]   mr-auto flex flex-wrap justify-between  my-10'>
       <div className=' w-full  relative lg:w-auto'>
         <img className='w-full  lg:w-auto' src={claque5} alt="" />
          <div className='  absolute bottom-20 text-4xl 2xl:text-5xl -left-8  lg:-left-14 2xl:-left-16  flex'>
                 <h1 className=' font-[800] my-text  uppercase  bg-text-gradient1 text-transparent max-w-[258px] bg-clip-text'> <span className=''>parties</span> <br /> <span className=''>Scolaires</span> </h1>

             </div>
       </div>
       <div className='w-full relative  lg:w-auto'>
        
          
         <img className='w-full  lg:w-auto' src={claque6} alt="" />
        
         <div className='  absolute bottom-20 text-4xl 2xl:text-5xl -left-5 lg:-left-6 2xl:-left-7  flex'>
                 <h1 className=' font-[800]  uppercase  bg-text-gradient2 my-text text-transparent w-fit bg-clip-text  '> <span className=''>voyage </span> <br /> <span className=''>l'etranger</span> </h1>
             </div>
       </div>
       <div className='w-full relative lg:w-auto '>
         <img className='w-full  lg:w-auto' src={claque7} alt="" />
         <div className='  absolute bottom-20 text-4xl 2xl:text-5xl -left-5 lg:-left-5 2xl:-left-5  flex'>
                 <h1 className=' font-[800]  uppercase my-text bg-text-gradient1 2xl:bg-text-gradient5 text-transparent w-fit bg-clip-text'> <span className=''>summer</span> <br /> <span className=''>camp</span> </h1>

          </div>
       </div>
       <div className='w-full relative lg:w-auto '>
         <img className='w-full  lg:w-auto'  src={claque8} alt="" />
         <div className='  absolute bottom-20 text-4xl 2xl:text-5xl -left-5 lg:-left-5 2xl:-left-8   flex'>
                 <h1 className='  font-[800]  uppercase my-text  bg-text-gradient1 text-transparent max-w-[258px] bg-clip-text'> <span className=''>robotique</span>  </h1>

             </div>
       </div>
       
</div>
  )
}

export default Actualite