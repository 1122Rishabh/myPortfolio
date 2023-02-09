import React from 'react'

import './Card.css'
const Card = ({emoji,text,description}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>
        {text}
      </span>
      <span>{description}</span>
    </div>
  )
}

export default Card
