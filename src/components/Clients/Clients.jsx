import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import download from '../../images/download3.jpg'
import download1 from '../../images/download4.jpg'
import download2 from '../../images/amz.jpg'

import download3 from '../../images/Satya.jpeg'



import {Pagination} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import './Clients.css'

const Clients = () => {
    
    const clients=[{
        text:'Kyndle',
        img:download,
        review:"I have Worked With Kyndryle Clients.I have explored a good experience there and, Used Node js tech for creating API's"
    },
    {
        text:'Apple',
        img:download1,
        review:"I have Worked With Kyndryle Clients.I have explored a good experience there and, Used Node js tech for creating API's"
    },
    {   
        text:'Amazon',
        img:download2,
        review:"I have Worked With Kyndryle Clients.I have explored a good experience there and, Used Node js tech for creating API's"
    },
    {
        text:'Microsoft',
        img:download3,
        review:"I have Worked With Kyndryle Clients.I have explored a good experience there and, Used Node js tech for creating API's"
    }
]
  return (
    <div className='clients' id='clients'>
    <div className='t-wrapper'>
        <div className="t-heading">
    
            <span>
                Clients Experinces
            </span>
            <span> Worked With MNC's Clients</span>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
{clients.map((client,index)=>{
    return(
  <SwiperSlide key={index}>
    <div className="testimonial">
        <span>{client.text}</span>
  <img src={client.img} alt="" className="" />
 
  <span>{client.review}</span>
  </div>
              </SwiperSlide>
             
    )
})}
          
        </Swiper>
      
    </div>
    </div>
  )
}

export default Clients
