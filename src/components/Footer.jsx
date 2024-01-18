import React from 'react'
import Logo from '../assets/Logo.png'
import {  FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiMapPinLineFill } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='  text-white'>
        <div className='gradientbg'>
        <div className='w-[97%]  m-auto  2xl:w-[93%]'>
              <div className='grid  gap-10 2xl:gap-16 py-8  px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 place-items-start '>
                 
                   <div className='bg-white mt-12 col-span-1 lg:col-span-2  grid place-items-center'><img src={Logo} alt="" /></div>
                   
                   <div className=' col-span-1 grid place-items-start  flex-col gap-4'>
                      <p className='uppercase bg-lightYellow font-bold flex text-xl items-start justify-start text-left text-white'>sitemap</p>
                      <ul className='flex flex-col gap-4'>
                        <li className='duration-300 cursor-pointer hover:text-lightYellow'>Admissions</li>
                        <li className='duration-300 cursor-pointer hover:text-lightYellow'>Gallerie</li>
                        <li className='duration-300 cursor-pointer hover:text-lightYellow'>Recrutement</li>
                        <li className='duration-300 cursor-pointer hover:text-lightYellow'>Inscriptions</li>
                        <li className='duration-300 cursor-pointer hover:text-lightYellow'>School Policies</li>
                      </ul>
                   </div>
                   <div className=' col-span-1 lg:col-span-2 grid place-items-start flex-col gap-4'>
                   <p className='uppercase bg-lightYellow font-bold flex items-start justify-start text-xl text-left text-white'>contact</p>
                      <ul className='flex flex-col gap-4'>
                        <li className='flex duration-300 cursor-pointer hover:text-lightYellow items-start gap-2'>
                            <PiMapPinLineFill className='text-5xl'/>
                            <span>Jeanne D'Arc International School N 57 Boulevard Moulay Youssef, Anfa-Casablanca</span>
                        </li>
                        <li className='flex duration-300 cursor-pointer hover:text-lightYellow items-center gap-2'>
                                <FaPhoneAlt />
                            <span>+212522220170 - +212642562328</span>
                        </li>
                        <li className='flex duration-300 cursor-pointer hover:text-lightYellow items-center gap-2'>
                            <MdEmail />
                            <span>contact@jeannedarcinternational.ma</span>
                        </li>
                        
                       
                      </ul>
                    
                     </div>
                   <div className=' col-span-1 lg:col-span-2 grid  gap-20 '>
                   <p className='uppercase bg-lightYellow w-fit font-bold flex items-start text-xl justify-start text-left text-white'>suivez nous</p>
                      <ul className='flex text-2xl 2xl:text-3xl  gap-4'>
                        <li className=' duration-300 cursor-pointer hover:text-lightYellow'><FaFacebookSquare/></li>
                        <li className=' duration-300 cursor-pointer hover:text-lightYellow'><AiFillInstagram/></li>
                        <li className=' duration-300 cursor-pointer hover:text-lightYellow'><FaYoutube/></li>
                        <li className=' duration-300 cursor-pointer hover:text-lightYellow'><FaLinkedin/></li>
                        <li className=' duration-300 cursor-pointer hover:text-lightYellow'><FaTiktok/></li>
                      </ul>
                   </div>
              </div>
        </div>
        </div>
        <div className='bg-primaryYellow py-4 '>
           <p className='text-center text-pimaryBlue uppercase font-semibold text-sm 2xl:text-md'>all rights reserved &copy; 2023 - jeanne d'arc international school</p>
        </div>
    </footer>
  )
}

export default Footer