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
    <div className='  '>
    <div className=' md:pt-28 pb-8 '>
       <div className='my-28'>
          <Swiper
             spaceBetween={50}
              grabCursor= {true}
              scrollbar={{ draggable: true }}
              resistance={false}
              freeMode={true} 
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
             >
              <SwiperSlide>
                 <div className=''>
                    <img src={claque1} alt="" />
                 </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=''>
                    <img src={claque2} alt="" />
                 </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=''>
                    <img src={claque3} alt="" />
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className=''>
                    <img src={claque4} alt="" />
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                    <div className=' border5'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Calzone_Classico-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>Calzone Classico</p>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                 <div className=' border3'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_La_Crema-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>La Creme Pizza</p>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                   <div className=' border2'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Balluta-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>Balluta Pizza</p>
                 </div>
              </SwiperSlide>
              
              
 
          </Swiper>
       </div>
   </div>
</div>
  )
}

export default Actualite