import { PAGES as C } from '../constants'

export const page = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_PAGE:
      return { ...state, ...action.payload }
    default: return state
  }
}
