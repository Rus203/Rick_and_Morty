import React from 'react'
import PropTypes from 'prop-types'
import './cardStyle.css'

const Card = ({ type, name, imageSrc, status }) => {
  return (
    <div className='card'>
      <div className='cart-img'>
        <img src={imageSrc} alt="character" width='100%' height='100%' />
      </div>
      <div className='card-info'>
          <h3>{name}</h3>
          <span className='card-status'>{'status - ' + status}</span>
          { type ? <div><span>type - {type}</span></div> : null }
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  imageSrc: PropTypes.string,
  type: PropTypes.string
}

export default Card
