import React, { useEffect, useState } from 'react'
import ListCards from './ListCards'
import Loader from '../Loader'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'

import { setPage } from '../../redux/actions/pages'

import './pagination.css'

const Pagination = () => {
  const dispatch = useDispatch()
  const totalPages = useSelector(state => state.info.pages)

  const [currentPage, setCurrentPage] = useState(0)
  const currentPages = useSelector(state => state.page[currentPage])
  const pages = useSelector(state => state.page)
  const loader = useSelector(state => state.loader)

  useEffect(() => {
    chosenPage()
  }, [])

  const chosenPage = (pageNum = 1) => {
    setCurrentPage(pageNum)
    if (!Object.keys(pages).includes(pageNum.toString())) {
      dispatch(setPage(pageNum))
    }
  }

  return (
  <>
  { loader
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
      className={ loader ? 'disable-component' : 'pagination' }
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
