import React from 'react'
import Logo from '../assets/Logo.png'
const Navbar = () => {
  return (
    <div className='' >
       {/* desktop navbar */}
        <nav className='w-[93%] min-h-[15vh]    m-auto flex itmes-center justify-center'>
             <div className='flex w-full items-center justify-between'>
                 <div>
                    <img className='w-40' src={Logo} alt="" />
                 </div>
                 <ul className='flex text-pimaryBlue   2xl:text-lg items-center gap-6 2xl:gap-16'>
                    <a className='hover:text-blue-700 duration-500' href='#'>Accueil</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Notre Ecole</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Academique</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Admessions</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Vie Scolaire</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Actualitees</a>
                    <a className='hover:text-blue-700 duration-500' href='#'>Conctactez nous</a>
                    <a className='text-white duration-500 py-2 bg-lightYellow px-2 rounded-md' href='#'>Inscriptions</a>
                 </ul>
             </div>
        </nav>


    </div>
  )
}

export default Navbar