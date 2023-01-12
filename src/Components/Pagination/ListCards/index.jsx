import React from 'react'
import './listCards.css'
import Card from './Card'
import PropTypes from 'prop-types'

const ListCards = ({ pages }) => {
  return (
    <div className='list-cards'>
      { pages && pages.map((item, index) => {
        return (
          <Card
            type={item.type}
            key={index}
            name={item.name}
            status={item.status}
            imageSrc={item.image}
            />
        )
      })
      }
    </div>
  )
}

ListCards.propTypes = {
  pages: PropTypes.array
}

export default ListCards
