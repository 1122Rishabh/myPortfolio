import React from 'react';
import './Navbar.css'
import Resume from '../../components/Navbar/Resume.pdf'
import {Link} from "react-scroll"



const Navbar = () => {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
<div className="n-name">Rishabh</div>

        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <li><Link activeClass="active" to ="intro" spy={true} smooth={true} >Intro </Link></li>
                    <li><Link  to ="services" spy={true} smooth={true} >Services </Link></li>
                    <li><Link to ="portfolio" spy={true} smooth={true} >Portfolio </Link></li>
                    <li><Link to ="clients" spy={true} smooth={true} >Clients </Link></li>
                    

                    {/* <a   className="navlinks" href={intro}>Fitness & Lifestyle</a> */}


                </ul>
            </div>
            <a href={Resume} download>
                <button className="button n-button">Resume</button> 
                </a>
        </div>
      
    </div>
  )
}

export default Navbar
