import { PAGES as C } from '../constants'

export const addPage = payload => {
  return {
    type: C.ADD_PAGE,
    payload
  }
}

export const setPage = pageNum => {
  return {
    type: C.SET_PAGE,
    pageNum
  }
}
