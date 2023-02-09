import React from 'react'
import myimage from '../../images/mee.jpg'
import myimage1 from '../../images/meee.jpg'
import myimage2 from '../../images/mlll.jpg'

import './MyIntro.css'

const MyIntro = () => {
  return (
    <div className='image'>
<img src={myimage} alt="" />
<img src={myimage1} alt="" />

<img src={myimage2} alt="" />
<span>Hey! I am a Front End Developer and created some projects for MNC's clints. 
                  <br/>
                  I also have experince in back end side and created some API's using node js technologies.</span>



    </div>
  )
}

export default MyIntro
