import React from 'react'
import './Service.css'
import download from '../../images/download11.png'
import download1 from '../../images/uu.png'
import download2 from '../../images/images.jpg'
import Resume from '../../components/Navbar/Resume.pdf'




import Card from '../Card/Card.jsx'
const Service = () => {
  return (
    <div className='services' id='services'>
        {/* left side */}
        <div className='awesome'>

            <span>My</span>
            <span>Services</span>
            <span>I have knowladge of some databses ,some languages, some framworkes , like
                <br/>
                Javascript , Mongo Db , React , NOde js. I have applied these technologies in my projects
        <br/></span>
        <a href={Resume} download>
            <button className="button s-button">Download Cv</button>

            </a>
            
        {/* right side */}
       
        </div> 
        <div className="cards">
            <div style={{left:'1rem'}}>
                <Card
            emoji={download}
            text={'Languages'}
            description={'JavaScript, React, Html, Css'}

            
                />
            </div>
            <div style={{top: "11rem", left: "-14rem" }}>
                <Card
            emoji={download1}
            text={'Database'}
            description={'MongoDb, Firebase'}

            
                />
            </div>
            <div style={{top: "11rem", right: "-16rem" }}>
                <Card
            emoji={download2}
            text={'Activites'}
            description={'Positive Attitude,Hard Working'}

            
                />
            </div>
        </div>
      
    </div>
  )
}

export default Service
