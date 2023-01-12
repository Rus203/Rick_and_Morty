import { PAGES as C } from '../constants'

export const addPage = payload => {
  return {
    type: C.ADD_PAGE,
    payload
  }
}
