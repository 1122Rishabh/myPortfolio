import React ,{useState }from 'react';
import './Navbar.css'
import Resume from '../../components/Navbar/Resume.pdf'
import {Link} from "react-scroll"



const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav>
    <div className='n-wrapper'>
      
        <div className="n-left">
<div className="n-name">Rishabh</div>

        </div>
     
            
        <div className="n-right">
          
            <div className="n-list">
          
            

                <ul  className={click ? "nav-menu active" : "nav-menu"}>

                    <li><Link activeClass="active" to ="intro" spy={true} smooth={true} >Intro </Link></li>
                    <li><Link  to ="services" spy={true} smooth={true} >Services </Link></li>
                    <li><Link to ="portfolio" spy={true} smooth={true} >Portfolio </Link></li>
                    <li><Link to ="clients" spy={true} smooth={true} >Clients </Link></li>


                </ul>
            </div>
            
            <a href={Resume} download>
                <button className="button n-button">Resume</button> 
                </a> 
                {/* <nav> */}
                {/* <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            <li><Link  to ="services" spy={true} smooth={true} >Services </Link></li> */}

              <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>


          {/* </div> */}
          {/* </nav> */}

        </div>
      
    </div>
    </div>
    </nav>
  )
}

export default Navbar
