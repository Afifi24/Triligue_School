import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Actualite = () => {
  return (
    <div className='  '>
    <div className='w-[95%]  md:w-[90%] m-auto md:pt-28 pb-8 '>
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
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
             >
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                    <div className=' border1'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/margherita_pizza-la_crema_malta_home-480x480.png.webp" alt="" />
                    </div>
                    <p>Margherita Pizza</p>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                   <div className=' border2'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Napoli_Pizza-La_Crema__Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>Napoli Pizza</p>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                   <div className=' border3'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Friarielli_e_salsiccia_pizza-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>Friarielli E Salsiccia</p>
                 </div>
              </SwiperSlide>
              <SwiperSlide>
                 <div className='flex gap-3 items-center justify-center flex-col'>
                   <div className=' border4'>
                    <img src="https://lacremamalta.com/wp-content/uploads/2023/04/Pizza_Vegetariana-La_Crema_Malta_home-480x480.png.webp" alt="image" />
                    </div>
                    <p>Vegeteriana Pizza</p>
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