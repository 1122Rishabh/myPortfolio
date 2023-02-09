import React from 'react'
import Services from '../Services/Service'
import Navbar from '../Navbar/Navbar'
import Portfolio from '../Portfolio/Portfolio'
import Intro from '../Intro/Intro'
import Clients from '../Clients/Clients'

import MyIntro from '../MyIntro/MyIntro'
import './Home.css'
const Home = () => {
  return (

    
    <div className='Home'> 
      <Navbar/>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Clients/> 
      <MyIntro/>
      


  
    </div>
    
  )
}

export default Home
