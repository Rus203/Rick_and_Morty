import React, { useState, useEffect } from 'react'
import './listCardsStyle.css'
import Card from './Card'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import fetchCard from '../../redux/asyncActions/fetchCard'

const ListCards = () => {
  const dispatch = useDispatch()
  const currentCards = useSelector(state => state.cards)

  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    if (fetching) {
      dispatch(fetchCard(currentPage))
      setFetching(false)
      setCurrentPage(currentPage + 1)
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandle)
    return function () {
      document.removeEventListener('scroll', scrollHandle)
    }
  }, [currentPage])

  const scrollHandle = e => {
    const scrollHeight = e.target.documentElement.scrollHeight
    const scrollTop = e.target.documentElement.scrollTop
    const innerHeight = window.innerHeight
    const threshold = scrollHeight - (innerHeight + scrollTop)

    if (threshold < 100) {
      setFetching(true)
    }
  }

  return (
      <div className='list-cards'>
      {currentCards && currentCards.map((item, index) => {
        return (
          <Card type={item.type} key={index} name={item.name} status={item.status} imageSrc={item.image} />
        )
      })
      }
      </div>
  )
}

ListCards.propTypes = {
  currentCards: PropTypes.array
}

export default ListCards
