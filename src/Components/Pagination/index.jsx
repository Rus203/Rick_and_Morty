import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ListCards from './ListCards'
import Loader from '../Loader'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { addPage } from '../../redux/actions/pages'
import { addInfo } from '../../redux/actions/info'

import './pagination.css'

const Pagination = () => {
  const dispatch = useDispatch()
  const totalPages = useSelector(state => state.info.pages)

  const [currentPage, setCurrentPage] = useState(0)
  const currentPages = useSelector(state => state.page[currentPage])
  const pages = useSelector(state => state.page)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        dispatch(addInfo(response.data.info))
      })
      .then(() => chosenPage())
  }, [])

  const chosenPage = (pageNum = 1) => {
    setCurrentPage(pageNum)
    if (!Object.keys(pages).includes(pageNum.toString())) {
      setLoading(true)
      setTimeout(() => axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNum}`)
        .then(res => dispatch(addPage({ [pageNum]: res.data.results })))
        .then(() => setLoading(false)), 300)
    }
  }

  return (
  <>
  { loading
    ? <Loader />
    : <ListCards pages={currentPages} />
    }
    <ReactPaginate
      pageCount={totalPages}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      breakClassName='btn-break'
      renderOnZeroPageCount={null}
      pageRangeDisplayed={4}
      marginPagesDisplayed={2}
      onPageChange={ target => chosenPage(target.selected + 1) }
      className={ loading ? 'disable-component' : 'pagination' }
      pageClassName='btn'
      pageLinkClassName='btn'
      nextLinkClassName='btn btn-next'
      previousLinkClassName='btn btn-previous'
      activeLinkClassName='btn-active'
    />
    </>
  )
}

export default Pagination
