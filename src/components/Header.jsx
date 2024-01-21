import React from 'react'
import headerimg from '../assets/header.png'
import vectorLeft from '../assets/vector-left.png'
import vectorRight from '../assets/vector-right.png'
const Header = () => {
  return (
    <div id='Accueil' className='relative mt-[60px] lg:mt-[87px] pt-2 loginbg'>
        <div className='flex items-center justify-center'>
            <img className='w-[60%] lg:w-auto' src={headerimg} alt="" />
        </div>
    <h1 className='uppercase absolute text-white text-xl md:text-3xl lg:text-5xl 2xl:text-7xl right-[5%] md:right-[15%] top-[30%] '>jusqu'au <span className='text-lightYellow'>lycee</span></h1>
    <h1 className='uppercase absolute text-white text-xl md:text-3xl lg:text-5xl 2xl:text-7xl left-[5%] md:left-[15%] bottom-[30%]'>de la <span className='text-lightYellow'>maternelle</span></h1>
    </div>
  )
}

export default Header