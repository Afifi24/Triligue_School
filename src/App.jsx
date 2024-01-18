import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Chart from './components/Chart'
import Activite from './components/Activite'
const App = () => {
  return (
    <>
     <Navbar/>
     <Header/>
     <Hero/>
     <Chart/>
     <Activite/>
     <Footer/>
    </>
  )
}

export default App