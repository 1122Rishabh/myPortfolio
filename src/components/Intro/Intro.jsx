import React from 'react'
import './Intro.css'
import Github from '../../../src/images/ghg.png'
import Instagram from '../../../src/images/inn.png'

import Linkdin from '../../../src/images/link.png'
import man from '../../../src/images/mee.jpg'
const Intro = () => {
  return (
    <div className='Intro' id='intro'>
        <div className="i-left">
            <div className="i-name">
                <span>Hi There!</span>
                <span>I am Rishabh</span>
                <span>I am a Front End Developer and created some projects for MNC's clints. 
                  <br/>
                  I also have experince in back end side and created some API's using node js technologies.
                </span>

            </div>   


           

          <a href='/blank'>  <button className="button i-button">Intro</button></a>
            <div className="i-icons">
                <a href='https://github.com/'>
                <img src={Github} alt=''/>
                 </a>
                 <a href='https://www.instagram.com/'>
                <img src={Instagram} alt=''/>
                </a>
                <a href='https://www.linkedin.com/login'>
                <img src={Linkdin} alt=''/>
                </a>
            </div>
        </div>
        <div className="i-right">
        <img src={man} alt="" />

        </div>
      
    </div>
  )
}

export default Intro
