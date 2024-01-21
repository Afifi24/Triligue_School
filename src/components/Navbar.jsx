import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import logo from '../assets/logo.jpg'
import { AnimatePresence,motion } from 'framer-motion';
import { navanim } from './animation';

const Navbar = () => {
   const [isNavOpen,setIsNavOpen] = useState(false)
  return (
    <nav className='' >
       {/* desktop navbar */}
       <div className='bg-white fixed z-40 left-0  hidden lg:flex top-0 right-0  min-h-[80px]'>
        <div className=' w-[97%]  2xl:w-[93%] min-h-[15vh]   m-auto lg:flex items-center justify-center'>
             <div className='flex w-full items-center justify-between'>
                 <div>
                    <img className='w-40' src={Logo} alt="" />
                 </div>
                 <ul className='flex text-pimaryBlue text-xs md:text-sm lg:text-md  2xl:text-lg items-center gap-4 xl:gap-6 2xl:gap-16'>
                    <a className='hover:text-yellow-500 bg-lightYellow py-1 px-1 rounded-md duration-500' href='#Accueil'>Accueil</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Notre Ecole'>Notre Ecole</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Academique'>Academique</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Admessions'>Admessions</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Vie Scolaire'>Vie Scolaire</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Actualitees'>Actualitees</a>
                    <a className='hover:text-yellow-500 duration-500' href='#Conctactez nous'>Conctactez nous</a>
                    <a className='text-white duration-500 py-4 font-semibold bg-lightYellow px-2 rounded-md' href='#'>Inscriptions</a>
                 </ul>
             </div>
        </div>
        </div>
       {/* mobile navbar */}
       <div className='bg-white z-50 fixed left-0 right-0 top-0 '>
       <div className='min-h-[60px] w-[97%] m-auto  flex items-center justify-between  lg:hidden '>
                 <div>
                   <img className='w-32' src={Logo} alt="" />
                 </div>
                 <div onClick={()=>setIsNavOpen(!isNavOpen)}>
               {  isNavOpen ? <LiaTimesSolid className='text-3xl text-black cursor-pointer'/> :
               < HiOutlineBars3BottomRight className='text-3xl text-black cursor-pointer'/>}
                 </div>
       </div>
       </div>
       {/* navmbile */}
       <AnimatePresence>
      { isNavOpen && <motion.div
      key={isNavOpen}
      variants={navanim}
      initial="hidden"
      animate="show"
      exit={"exit"}
      className='w-full z-40   bg-pimaryBlue   fixed lg:hidden inset-0 nav h-[100vh]'>

       <div className='  w-full  p-6 '>
                
                 <ul className='flex flex-col mt-20 font-semibold text-white gap-6'>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 bg-lightYellow py-1 px-1 rounded-md duration-500 w-fit' href='#Accueil'>Accueil</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Notre Ecole'>Notre Ecole</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Academique'>Academique</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Admessions'>Admessions</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Vie Scolaire'>Vie Scolaire</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Actualitees'>Actualitees</a>
                    <a onClick={()=>setIsNavOpen(false)} className='hover:text-yellow-500 duration-500' href='#Conctactez nous'>Conctactez nous</a>
                    <a onClick={()=>setIsNavOpen(false)} className='text-white duration-500 py-4 font-semibold w-fit bg-lightYellow px-2 rounded-md' href='#'>Inscriptions</a>
                 </ul>
         </div>
         </motion.div>}
         </AnimatePresence>

    </nav>
  )
}

export default Navbar