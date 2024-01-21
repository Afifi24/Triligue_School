import React from 'react'
import vectorRight from '../assets/vector-right.png'
import vectorLeft from '../assets/vector-left.png'
import heroChart from '../assets/hero-charte.png'


const Chart = () => {
  return (
    <section id='Academique'>
      <div className='flex items-center justify-center' >
        <img src={vectorLeft} alt="" />
        <h2 className='uppercase text-2xl lg:text-5xl font-bold text-center text-pimaryBlue'>notre charte</h2>
        <img src={vectorRight} alt="" />

      </div>
      <div className='min-h-screen chartbg bg-lightYellow'>
        <div className='flex flex-col lg:flex-row mt-4 lg:mt-0  items-center lg:justify-around'>
                 <div className='flex flex-1 text-sm md:text-sm lg:text-lg 2xl:text-2xl flex-col gap-16 2xl:gap-32 p-6 2xl:mt-32 text-pimaryBlue font-semibold'>
                      <div className='lg:w-[400px] grid place-items-center'>
                        <p className='max-w-[300px] 2xl:max-w-[400px] text-center'>Assurer a l'enfant une securite affective et physique</p>
                      </div>
                      <div className='lg:w-[400px] grid place-items-center'>
                        <p className='max-w-[300px]  text-center'>Respecter les rythmes et reperes de l'enfant</p>
                      </div>
                      <div className='hoverTextbg lg:w-[400px] m-auto grid place-items-center'>
                        <p className='max-w-[300px]  text-center'>Garantir a chacun des soins individualises</p>
                      </div>
                 </div>
             <div>
             <img className='flex-1 w-32 md:w-auto ' src={heroChart} alt="" />
             </div>
              <div className='flex flex-1  flex-col gap-16 p-6 mt-28 text-pimaryBlue text-sm md:text-sm lg:text-lg 2xl:text-2xl 2xl:gap-32 2xl:mt-64 font-semibold'>
                      <div className='lg:w-[400px] grid place-items-center'>
                        <p className='max-w-[300px]  text-center'>Favoriser l'eveil et l'autonomie de l'enfant</p>
                      </div>
                      <div className='lg:w-[400px] grid place-items-center'>
                        <p className='max-w-[300px]  text-center'>Soutenir l'enfant dans ses emotions et ses desirs</p>
                      </div>
                      <div className=' lg:w-[400px] m-auto grid place-items-center'>
                        <p className='max-w-[300px]  text-center'>Situer les parents au centre de notre projet</p>
                      </div>
             </div>
        </div>
      </div>
    </section>
  )
}

export default Chart