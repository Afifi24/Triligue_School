import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Chart from './components/Chart'
import Activite from './components/Activite'
import Cycles from './components/Cycles'
import Actualite from './components/Actualite'
import LifeSchool from './components/LifeSchool'
const App = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <Hero/>
     <Chart/>
     <Activite/>
     <Cycles/>
     <Actualite/>
     <LifeSchool/>
     <Footer/>
    </>
  )
}

export default App