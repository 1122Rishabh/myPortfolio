import React from 'react'
import {Swiper, SwiperSlide}  from "swiper/react";

import './Portfolio.css';
import download from '../../images/ss.png';
import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import "swiper/css";



const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>

        <span>Recent Projects</span>
        <span>Portfolio</span>
<Swiper className='portfolio-slider'
       modules={[Pagination]}
       slidesPerView={1}
       pagination={{clickable:true}}>

<SwiperSlide >
          <img src={download} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={download} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={download} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={download} alt="" />
      
        </SwiperSlide>
    

    
</Swiper>
        
    </div>
  )
}

export default Portfolio
