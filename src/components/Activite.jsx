import React from 'react'
import activiteimg from '../assets/activite.png'
import Bacimg from '../assets/BAC2023.png'

const Activite = () => {
  return (
    <section>
       <div className=' relative min-h-screen mt-20 lg:m-0 '>
           <img className='absolute h-[90%] sm:w-2/3 lg:w-1/3 object-cover left-0 top-0' src={activiteimg} alt="" />
         <div className='relative flex items-end justify-end  font-semibold py-3 mb-10 lg:m-0'>
            <div className=' uppercase text-md lg:text-4xl 2xl:text-6xl mr-8'>
            <div className='flex items-center gap-2'>
                    <h2 className='lg:text-lightYellow text-pimaryBlue'>un enseignement </h2>
                    <h2 className='bg-pimaryBlue text-white lg:w-[340px] '>trilingue</h2>
            </div>
            <div className='flex items-center gap-2'>
                    <h2 className='lg:text-lightYellow text-pimaryBlue '>d'excellence de </h2>
                    <h2 className='text-pimaryBlue '>la creche au lycee</h2>
            </div>
           
            </div>

         </div>
           {/* <div></div> */}
          <div className='flex flex-col lg:flex-row relative items-center justify-between gap-20  mx-8'>
                 <div className='flex-1'>
                    <img className='w-full' src={Bacimg} alt="" />
                 </div>
                 <div className='flex-1 2xl:text-2xl text-pimaryBlue'>
                      <p>L'enseignement trilingue adopte par notre etablissement aide nos eleves a developper une meilleure sensibilite communicative dans un environement plurilingue et multiculturel.</p> 
                      <p>Jeanne D'Arc Trilingue school a toujours veille a inculque a ses apprenants, l'adhesion aux valeurs universelles et cultive en eux l'art de la cohabitaion avec les citoyens du monde.</p>
                 </div>
          </div>

       </div>

    </section>
  )
}

export default Activite