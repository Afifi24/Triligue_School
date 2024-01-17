import React from 'react'
import Logo from '../assets/Logo.png'
const Footer = () => {
  return (
    <footer className=' min-h-[40vh] text-white'>
        <div className='gradientbg'>
        <div className='w-[97%]  m-auto  2xl:w-[93%]'>
              <div className='grid  gap-8 py-8 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 place-items-center '>
                   <div className='bg-white col-span-1 lg:col-span-2 grid place-items-center'><img src={Logo} alt="" /></div>
                   <div className=' col-span-1 grid place-items-start  flex-col gap-2'>
                      <p className='uppercase bg-lightYellow font-bold flex items-start justify-start text-left text-white'>sitemap</p>
                      <ul className='flex flex-col gap-3'>
                        <li>Admissions</li>
                        <li>Gallerie</li>
                        <li>Recrutement</li>
                        <li>Inscriptions</li>
                        <li>School Policies</li>
                      </ul>
                   </div>
                   <div className=' col-span-1 lg:col-span-2 grid place-items-start flex-col gap-2'>
                   <p className='uppercase bg-lightYellow font-bold flex items-start justify-start text-left text-white'>sitemap</p>
                      <ul className='flex flex-col gap-3'>
                        <li className='flex items-start gap-1'>
                            <img src="" alt="" />
                            <span>Jeanne D'Arc International School N 57 Boulevard Moulay Youssef, Anfa-Casablanca</span>
                        </li>
                        <li className='flex items-start gap-1'>
                            <img src="" alt="" />
                            <span>+212522220170 - +212642562328</span>
                        </li>
                        <li className='flex items-start gap-1'>
                            <img src="" alt="" />
                            <span>contact@jeannedarcinternational.ma</span>
                        </li>
                        
                       
                      </ul>
                    
                     </div>
                   <div className=' col-span-1 lg:col-span-2 grid place-items-center'>
                   <p className='uppercase bg-lightYellow font-bold flex items-start justify-start text-left text-white'>suivez nous</p>
                      <ul className='flex flex-col gap-3'>
                        <li>Admissions</li>
                        <li>Gallerie</li>
                        <li>Recrutement</li>
                        <li>Inscriptions</li>
                        <li>School Policies</li>
                      </ul>
                   </div>
              </div>
        </div>
        </div>
    </footer>
  )
}

export default Footer