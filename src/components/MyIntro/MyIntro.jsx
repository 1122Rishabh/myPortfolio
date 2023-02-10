import React from 'react'
import myimage from '../../images/ri.jpg'
import rishi from '../../images/sh.jpg'
import gupta from '../../images/abh.jpg'

import './MyIntro.css'

const MyIntro = () => {
  return (
    <div className='image'>
<img src={myimage} alt="rt" />
<img src={rishi} alt="oi" />

<img src={gupta} alt="mn" />
<span>Hey! I am a Front End Developer and created some projects for MNC's clints. 
                  <br/>
                  I also have experince in back end side and created some API's using node js technologies.</span>



    </div>
  )
}

export default MyIntro
